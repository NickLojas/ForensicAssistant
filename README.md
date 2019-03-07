# ForensicAssistant
This is a web app made as a tool in aiding digital forensic investigations. It takes a facebook user's privately accessible security.htm file, then parses it for relevant information such as the user's IP addresses from wherever the user triggered some facebook events (login/post/like). With the parsed data, it runs it through the "whois" API to retreive valuable forensic information regarding the ip addresses received. It then displays the data received from the API on a table in a readable fashion using ReactJS.

## Usage
First clone the repo, then in a terminal run 
```
$ npm run full-install

// When finished installing run
$ npm run start
```

## Skills used
- Javascript ES6
- React JS
- Node JS
- Express
- Cheerio
- Axios
- Regex
- Git
- Coffee-script

## Notable Features
- Uses nodeJS and Express router to create a server that sends the parsed data to the front end
- Uses cheerio module to parse the relevant data in the back end
- Uses regex when parsing to data to filter the important information
- Uses Whois API to retreive user information when given IP Addresses
- Uses IpLocations API to retreive user locations given IP Addresses
- Displays notable information in a ReactJS Table with the option to click on a specific IP Address for more detailed information retreieved from the Whois API

## What I learned
- Using cheerio to parse data
- Using regex to filter relevant info
- Setting up a proxy in the package.json to connect back end and front end when using axios
- Sending data from back end to front end and fetching it with axios
- Using tables in ReactJS to display Data
- Editting a node module to make it better usable for the project (fork through github and npm install the repo)


