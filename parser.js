"use strict";

// libraries
const cheerio = require("cheerio");
const whois = require("whois");
const fs = require("fs");
const express = require("express");
const iplocation = require("iplocation");

// Quality regular expressions
const ipPattern = /(\s|^)(\d+\.){3}\d+(\s|$)/;
const datePattern = /(\s|^)(Monday|Tuesday|Wednesday|Thursday|Friday).+(am|pm) [A-Z]{3}(\s|$)/;

let locationCache = {};
let parsedContent = [];
let whoisCache = {};

const app = express();
const router = express.Router();

function init() {
  fs.readFile("security.htm", "utf8", function(err, data) {
    if (err) throw err;
    let parsedContent = parse(data);
    ipWithWhoIs(parsedContent, function() {
      getLocations(parsedContent, function() {
        compileResponse();
        createServer();
      });
    });
  });
}

function parse(data) {
  let $ = cheerio.load(data);
  $(".contents .meta").each(function(i, elem) {
    let date = null;
    let ip = null;

    // Get category
    let category = $(this)
      .closest("ul")
      .prev()
      .text();

    // Get type of activity, excluding login protection data
    let type = $(this)
      .parent()
      .contents()
      .filter(function() {
        return this.type === "text";
      })[0].data;
    if (type.startsWith("...")) return;
    if (type.startsWith("IP")) return;
    if (type.startsWith("Cookie")) return;

    // Attempt to get data from type
    let dateMatches = datePattern.exec(type);
    if (dateMatches) date = dateMatches[0];
    let ipMatches = ipPattern.exec(type);
    if (ipMatches) ip = ipMatches[0];

    // Attempt to get data from meta
    let meta = $(this)
      .contents()
      .filter(function() {
        return this.type === "text";
      });
    for (let i = 0; i < meta.length; i++) {
      let text = meta[i].data;
      let dateMatches = datePattern.exec(text);
      if (dateMatches) date = dateMatches[0];
      let ipMatches = ipPattern.exec(text);
      if (ipMatches) ip = ipMatches[0];
    }

    // Only keep content if required data can be found
    if (ip && category && date) {
      let data = {
        category: category,
        type: type,
        date: date.trim(),
        ip: ip.trim()
      };
      parsedContent.push(data);
    }
  });
  return parsedContent;
}

function whoIs(ipAddress, callback) {
  var metaData = [];
  var split_data = [];
  var regex = /^([A-Za-z]+)/;
  whois.lookup(ipAddress, { verbose: true }, function(err, data) {
    for (let i = 0; i < data.length; i++) {
      split_data = data[i].data.split("\n");
      for (let j = 0; j < split_data.length; j++) {
        let stringmatches = regex.exec(split_data[j]);
        if (stringmatches) {
          metaData.push(stringmatches.input);
        }
      }
    }
    callback(metaData);
  });
}

function ipWithWhoIs(parsedContent, callback) {
  // Get list of IP from parsed_content
  let ipAddresses = [];
  for (var i = 0; i < parsedContent.length; i++) {
    var ip = parsedContent[i].ip.trim();
    if (ipAddresses.indexOf(ip) == -1) {
      ipAddresses.push(ip);
    }
  }

  // Run whois on the IP
  ipAddresses.forEach(function(ip_addr, index) {
    if (whoisCache[ip_addr]) return;
    whoIs(ip_addr, function(data) {
      whoisCache[ip_addr] = data;
      if (Object.keys(whoisCache).length == ipAddresses.length) callback();
    });
  });
}

function getLocations(parsedContent, callback) {
  // Get list of IP from parsed_content
  let ipAddresses = [];
  for (var i = 0; i < parsedContent.length; i++) {
    var ip = parsedContent[i].ip.trim();
    if (ipAddresses.indexOf(ip) == -1) {
      ipAddresses.push(ip);
    }
  }

  // Run whois on the IP
  ipAddresses.forEach(function(ip_addr, index) {
    if (locationCache[ip_addr]) return;
    iplocation(ip_addr, function(err, data) {
      locationCache[ip_addr] = data;
      if (Object.keys(locationCache).length == ipAddresses.length) callback();
    });
  });
}

function compileResponse() {
  for (let i = 0; i < parsedContent.length; i++) {
    parsedContent[i].data = whoisCache[parsedContent[i].ip];
    parsedContent[i].location = locationCache[parsedContent[i].ip];
  }
}

function createServer() {
  // Simply return raw JSON for now
  router.get("/data", (req, res) => {
    res.send(parsedContent);
  });
  app.use("/", router);
  app.listen(8003, () => {
    console.log("Server is running on port 8003");
  });
}

init();
