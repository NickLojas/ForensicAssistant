import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

class TableComp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      contactAbuseInfo: [],
      contactTechInfo: [],
      contactRTechInfo: [],
      contactRAbuseInfo: [],
      contactRNOCInfo: []
    };
  }

  componentWillMount() {
    var roughData = this.props.data;
    var OrgAbuseHandleInfo = [];
    var OrgAbuseNameInfo = [];
    var OrgAbusePhoneInfo = [];
    var OrgAbuseEmailInfo = [];
    var OrgAbuseRefInfo = [];
    var OrgTechHandleInfo = [];
    var OrgTechNameInfo = [];
    var OrgTechPhoneInfo = [];
    var OrgTechEmailInfo = [];
    var OrgTechRefInfo = [];
    var RTechHandleInfo = [];
    var RTechNameInfo = [];
    var RTechPhoneInfo = [];
    var RTechEmailInfo = [];
    var RTechRefInfo = [];
    var RAbuseHandleInfo = [];
    var RAbuseNameInfo = [];
    var RAbusePhoneInfo = [];
    var RAbuseEmailInfo = [];
    var RAbuseRefInfo = [];
    var RNOCHandleInfo = [];
    var RNOCNameInfo = [];
    var RNOCPhoneInfo = [];
    var RNOCEmailInfo = [];
    var RNOCRefInfo = [];

    for (var i = 0; i < roughData.data.length; i++) {
      var contact = roughData.data[i].split(":");

      if (contact[0] === "OrgAbuseHandle") {
        OrgAbuseHandleInfo.push(contact.pop().trim());
      }
      if (contact[0] === "OrgAbuseName") {
        OrgAbuseNameInfo.push(contact.pop().trim());
      }
      if (contact[0] === "OrgAbusePhone") {
        OrgAbusePhoneInfo.push(contact.pop().trim());
      }
      if (contact[0] === "OrgAbuseEmail") {
        OrgAbuseEmailInfo.push(contact.pop().trim());
      }
      if (contact[0] === "OrgAbuseRef") {
        OrgAbuseRefInfo.push(contact.pop().trim());
      }
      if (contact[0] === "OrgTechHandle") {
        OrgTechHandleInfo.push(contact.pop().trim());
      }
      if (contact[0] === "OrgTechName") {
        OrgTechNameInfo.push(contact.pop().trim());
      }
      if (contact[0] === "OrgTechPhone") {
        OrgTechPhoneInfo.push(contact.pop().trim());
      }
      if (contact[0] === "OrgTechEmail") {
        OrgTechEmailInfo.push(contact.pop().trim());
      }
      if (contact[0] === "OrgTechRef") {
        OrgTechRefInfo.push(contact.pop().trim());
      }
      if (contact[0] === "RTechHandle") {
        RTechHandleInfo.push(contact.pop().trim());
      }
      if (contact[0] === "RTechName") {
        RTechNameInfo.push(contact.pop().trim());
      }
      if (contact[0] === "RTechPhone") {
        RTechPhoneInfo.push(contact.pop().trim());
      }
      if (contact[0] === "RTechEmail") {
        RTechEmailInfo.push(contact.pop().trim());
      }
      if (contact[0] === "RTechRef") {
        RTechRefInfo.push(contact.pop().trim());
      }
      if (contact[0] === "RAbuseHandle") {
        RAbuseHandleInfo.push(contact.pop().trim());
      }
      if (contact[0] === "RAbuseName") {
        RAbuseNameInfo.push(contact.pop().trim());
      }
      if (contact[0] === "RAbusePhone") {
        RAbusePhoneInfo.push(contact.pop().trim());
      }
      if (contact[0] === "RAbuseEmail") {
        RAbuseEmailInfo.push(contact.pop().trim());
      }
      if (contact[0] === "RAbuseRef") {
        RAbuseRefInfo.push(contact.pop().trim());
      }
      if (contact[0] === "RNOCHandle") {
        RNOCHandleInfo.push(contact.pop().trim());
      }
      if (contact[0] === "RNOCName") {
        RNOCNameInfo.push(contact.pop().trim());
      }
      if (contact[0] === "RNOCPhone") {
        RNOCPhoneInfo.push(contact.pop().trim());
      }
      if (contact[0] === "RNOCEmail") {
        RNOCEmailInfo.push(contact.pop().trim());
      }
      if (contact[0] === "RNOCRef") {
        RNOCRefInfo.push(contact.pop().trim());
      }
    }

    var contact_OrgAbuseInfo = [];
    var contact_OrgTechInfo = [];
    var contact_RTechInfo = [];
    var contact_RAbuseInfo = [];
    var contact_RNOCInfo = [];

    for (var j = 0; j < OrgAbuseHandleInfo.length; j++) {
      var contactOrg = {
        OrgAbuseHandle: OrgAbuseHandleInfo[j],
        OrgAbuseName: OrgAbuseNameInfo[j],
        OrgAbusePhone: OrgAbusePhoneInfo[j],
        OrgAbuseEmail: OrgAbuseEmailInfo[j],
        OrgAbuseRef: OrgAbuseRefInfo[j]
      };
      contact_OrgAbuseInfo.push(contactOrg);
    }

    for (var k = 0; k < OrgTechHandleInfo.length; k++) {
      var contactTech = {
        OrgTechHandle: OrgTechHandleInfo[k],
        OrgTechName: OrgTechNameInfo[k],
        OrgTechPhone: OrgTechPhoneInfo[k],
        OrgTechEmail: OrgTechEmailInfo[k],
        OrgTechRef: OrgTechRefInfo[k]
      };
      contact_OrgTechInfo.push(contactTech);
    }

    for (var l = 0; l < RTechHandleInfo.length; l++) {
      var contactRTech = {
        RTechHandle: RTechHandleInfo[l],
        RTechName: RTechNameInfo[l],
        RTechPhone: RTechPhoneInfo[l],
        RTechEmail: RTechEmailInfo[l],
        RTechRef: RTechRefInfo[l]
      };
      contact_RTechInfo.push(contactRTech);
    }

    for (var m = 0; m < RAbuseHandleInfo.length; m++) {
      var contactRAbuse = {
        RAbuseHandle: RAbuseHandleInfo[m],
        RAbuseName: RAbuseNameInfo[m],
        RAbusePhone: RAbusePhoneInfo[m],
        RAbuseEmail: RAbuseEmailInfo[m],
        RAbuseRef: RAbuseRefInfo[m]
      };
      contact_RAbuseInfo.push(contactRAbuse);
    }

    for (var n = 0; n < RNOCHandleInfo.length; n++) {
      var contactRNOC = {
        RNOCHandle: RNOCHandleInfo[n],
        RNOCName: RNOCNameInfo[n],
        RNOCPhone: RNOCPhoneInfo[n],
        RNOCEmail: RNOCEmailInfo[n],
        RNOCRef: RNOCRefInfo[n]
      };
      contact_RNOCInfo.push(contactRNOC);
    }

    var netData = {
      NetRange: roughData.data[0]
        .split(":")
        .pop()
        .trim(),
      CIDR: roughData.data[1]
        .split(":")
        .pop()
        .trim(),
      NetName: roughData.data[2]
        .split(":")
        .pop()
        .trim(),
      NetHandle: roughData.data[3]
        .split(":")
        .pop()
        .trim(),
      Parent: roughData.data[4]
        .split(":")
        .pop()
        .trim(),
      NetType: roughData.data[5]
        .split(":")
        .pop()
        .trim(),
      OriginAs: roughData.data[6]
        .split(":")
        .pop()
        .trim(),
      Organization: roughData.data[11]
        .split(":")
        .pop()
        .trim(),
      OrgID: roughData.data[12]
        .split(":")
        .pop()
        .trim(),
      Address:
        roughData.data[13]
          .split(":")
          .pop()
          .trim() +
        ", " +
        roughData.data[14]
          .split(":")
          .pop()
          .trim() +
        ", " +
        roughData.data[15]
          .split(":")
          .pop()
          .trim(),
      City: roughData.data[16]
        .split(":")
        .pop()
        .trim(),
      StateProv: roughData.data[17]
        .split(":")
        .pop()
        .trim(),
      PostalCode: roughData.data[18]
        .split(":")
        .pop()
        .trim(),
      Country: roughData.data[19]
        .split(":")
        .pop()
        .trim(),
      LocationLatLng:
        "(" +
        roughData.location.latitude +
        "," +
        roughData.location.longitude +
        ")",
      LocationCity: roughData.location.city,
      LocationRegion: roughData.location.region_name,
      LocationCountry: roughData.location.country_name,
      LocationZip: roughData.location.zip_code,
      LocationTimeZone: roughData.location.time_zone
    };

    this.setState({
      data: netData,
      contactAbuseInfo: contact_OrgAbuseInfo,
      contactTechInfo: contact_OrgTechInfo,
      contactRTechInfo: contact_RTechInfo,
      contactRAbuseInfo: contact_RAbuseInfo,
      contactRNOCInfo: contact_RNOCInfo
    });
  }

  render() {
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Lat/Lng</TableHeaderColumn>
              <TableHeaderColumn>City</TableHeaderColumn>
              <TableHeaderColumn>Region</TableHeaderColumn>
              <TableHeaderColumn>Country</TableHeaderColumn>
              <TableHeaderColumn>ZipCode</TableHeaderColumn>
              <TableHeaderColumn>TimeZone</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>{this.state.data.LocationLatLng}</TableRowColumn>
              <TableRowColumn>{this.state.data.LocationCity}</TableRowColumn>
              <TableRowColumn>{this.state.data.LocationRegion}</TableRowColumn>
              <TableRowColumn>{this.state.data.LocationCountry}</TableRowColumn>
              <TableRowColumn>{this.state.data.LocationZip}</TableRowColumn>
              <TableRowColumn>
                {this.state.data.LocationTimeZone}
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>NetRange</TableHeaderColumn>
              <TableHeaderColumn>CIDR</TableHeaderColumn>
              <TableHeaderColumn>NetName</TableHeaderColumn>
              <TableHeaderColumn>NetHandle</TableHeaderColumn>
              <TableHeaderColumn>Parent</TableHeaderColumn>
              <TableHeaderColumn>NetType</TableHeaderColumn>
              <TableHeaderColumn>OriginAs</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>{this.state.data.NetRange}</TableRowColumn>
              <TableRowColumn>{this.state.data.CIDR}</TableRowColumn>
              <TableRowColumn>{this.state.data.NetName}</TableRowColumn>
              <TableRowColumn>{this.state.data.NetHandle}</TableRowColumn>
              <TableRowColumn>{this.state.data.Parent}</TableRowColumn>
              <TableRowColumn>{this.state.data.NetType}</TableRowColumn>
              <TableRowColumn>{this.state.data.OriginAs}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Organization</TableHeaderColumn>
              <TableHeaderColumn>OrgID</TableHeaderColumn>
              <TableHeaderColumn>Address</TableHeaderColumn>
              <TableHeaderColumn>City</TableHeaderColumn>
              <TableHeaderColumn>State/Province</TableHeaderColumn>
              <TableHeaderColumn>Postal Code</TableHeaderColumn>
              <TableHeaderColumn>Country</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>{this.state.data.Organization}</TableRowColumn>
              <TableRowColumn>{this.state.data.OrgID}</TableRowColumn>
              <TableRowColumn>{this.state.data.Address}</TableRowColumn>
              <TableRowColumn>{this.state.data.City}</TableRowColumn>
              <TableRowColumn>{this.state.data.StateProv}</TableRowColumn>
              <TableRowColumn>{this.state.data.PostalCode}</TableRowColumn>
              <TableRowColumn>{this.state.data.Country}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>OrgAbuseHandle</TableHeaderColumn>
              <TableHeaderColumn>OrgAbuseName</TableHeaderColumn>
              <TableHeaderColumn>OrgAbusePhone</TableHeaderColumn>
              <TableHeaderColumn>OrgAbuseEmail</TableHeaderColumn>
              <TableHeaderColumn>OrgAbuseRef</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.contactAbuseInfo ? (
              this.state.contactAbuseInfo.map((item, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{item.OrgAbuseHandle}</TableRowColumn>
                  <TableRowColumn>{item.OrgAbuseName}</TableRowColumn>
                  <TableRowColumn>{item.OrgAbusePhone}</TableRowColumn>
                  <TableRowColumn>{item.OrgAbuseEmail}</TableRowColumn>
                  <TableRowColumn>{item.OrgAbuseRef}</TableRowColumn>
                </TableRow>
              ))
            ) : (
              <p>loading</p>
            )}
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>OrgTechHandle</TableHeaderColumn>
              <TableHeaderColumn>OrgTechName</TableHeaderColumn>
              <TableHeaderColumn>OrgTechPhone</TableHeaderColumn>
              <TableHeaderColumn>OrgTechEmail</TableHeaderColumn>
              <TableHeaderColumn>OrgTechRef</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.contactTechInfo ? (
              this.state.contactTechInfo.map((item, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{item.OrgTechHandle}</TableRowColumn>
                  <TableRowColumn>{item.OrgTechName}</TableRowColumn>
                  <TableRowColumn>{item.OrgTechPhone}</TableRowColumn>
                  <TableRowColumn>{item.OrgTechEmail}</TableRowColumn>
                  <TableRowColumn>{item.OrgTechRef}</TableRowColumn>
                </TableRow>
              ))
            ) : (
              <p>loading</p>
            )}
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>RTechHandle</TableHeaderColumn>
              <TableHeaderColumn>RTechName</TableHeaderColumn>
              <TableHeaderColumn>RTechPhone</TableHeaderColumn>
              <TableHeaderColumn>RTechEmail</TableHeaderColumn>
              <TableHeaderColumn>RTechRef</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.contactRTechInfo ? (
              this.state.contactRTechInfo.map((item, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{item.RTechHandle}</TableRowColumn>
                  <TableRowColumn>{item.RTechName}</TableRowColumn>
                  <TableRowColumn>{item.RTechPhone}</TableRowColumn>
                  <TableRowColumn>{item.RTechEmail}</TableRowColumn>
                  <TableRowColumn>{item.RTechRef}</TableRowColumn>
                </TableRow>
              ))
            ) : (
              <p>loading</p>
            )}
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>RAbuseHandle</TableHeaderColumn>
              <TableHeaderColumn>RAbuseName</TableHeaderColumn>
              <TableHeaderColumn>RAbusePhone</TableHeaderColumn>
              <TableHeaderColumn>RAbuseEmail</TableHeaderColumn>
              <TableHeaderColumn>RAbuseRef</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.contactRAbuseInfo ? (
              this.state.contactRAbuseInfo.map((item, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{item.RAbuseHandle}</TableRowColumn>
                  <TableRowColumn>{item.RAbuseName}</TableRowColumn>
                  <TableRowColumn>{item.RAbusePhone}</TableRowColumn>
                  <TableRowColumn>{item.RAbuseEmail}</TableRowColumn>
                  <TableRowColumn>{item.RAbuseRef}</TableRowColumn>
                </TableRow>
              ))
            ) : (
              <p>loading</p>
            )}
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>RNOCHandle</TableHeaderColumn>
              <TableHeaderColumn>RNOCName</TableHeaderColumn>
              <TableHeaderColumn>RNOCPhone</TableHeaderColumn>
              <TableHeaderColumn>RNOCEmail</TableHeaderColumn>
              <TableHeaderColumn>RNOCRef</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.contactRNOCInfo ? (
              this.state.contactRNOCInfo.map((item, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{item.RNOCHandle}</TableRowColumn>
                  <TableRowColumn>{item.RNOCName}</TableRowColumn>
                  <TableRowColumn>{item.RNOCPhone}</TableRowColumn>
                  <TableRowColumn>{item.RNOCEmail}</TableRowColumn>
                  <TableRowColumn>{item.RNOCRef}</TableRowColumn>
                </TableRow>
              ))
            ) : (
              <p>loading</p>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default TableComp2;
