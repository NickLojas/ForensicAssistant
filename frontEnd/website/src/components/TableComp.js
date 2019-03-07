import React, { Component } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
class TableComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selected: [1]
    };
  }
  componentWillMount() {
    axios
      .get("/data")
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err.response));
  }

  isSelected = index => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = selectedRows => {
    this.setState({
      selected: selectedRows
    });
  };

  handleIPSelect = e => {
    e.preventDefault();
    var ip = e.target.text;
    var dataArray = this.state.data;
    var index_result;
    for (var i = 0; i < dataArray.length && i !== index_result; i++) {
      if (dataArray[i]["ip"] === ip) {
        index_result = i;
      }
    }
    var data_result = dataArray[index_result];
    this.props.buttonClick(data_result);
  };

  render() {
    return (
      <Table onRowSelection={this.handleRowSelection} multiSelectable={true}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Row</TableHeaderColumn>
            <TableHeaderColumn>Category</TableHeaderColumn>
            <TableHeaderColumn>IP</TableHeaderColumn>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Country</TableHeaderColumn>
            <TableHeaderColumn>City</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.state.data ? (
            this.state.data.map((item, index) => (
              <TableRow key={index} selected={this.isSelected(index)}>
                <TableRowColumn>{index + 1}</TableRowColumn>
                <TableRowColumn>{item.category}</TableRowColumn>
                <TableRowColumn>
                  <a href={item.ip} onClick={this.handleIPSelect}>
                    {item.ip}
                  </a>
                </TableRowColumn>
                <TableRowColumn>{item.date}</TableRowColumn>
                <TableRowColumn>{item.location.country_name}</TableRowColumn>
                <TableRowColumn>{item.location.city}</TableRowColumn>
              </TableRow>
            ))
          ) : (
            <p>loading</p>
          )}
        </TableBody>
      </Table>
    );
  }
}

export default TableComp;
