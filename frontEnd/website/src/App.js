import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TableComp from "./components/TableComp";
import TableComp2 from "./components/TableComp2";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      ipData: [],
      newComponent: false
    };
  }

  handleIP = item => {
    this.setState({
      ipData: item,
      newComponent: !this.state.newComponent
    });
  };

  onClick = () => {
    this.setState({
      newComponent: !this.state.newComponent
    });
  };

  render() {
    var renderThis;
    if (!this.state.newComponent) {
      renderThis = (
        <TableComp data={this.state.data} buttonClick={this.handleIP} />
      );
    } else {
      renderThis = (
        <div>
          <button onClick={this.onClick} className="backbutton">
            Back
          </button>
          <TableComp2 data={this.state.ipData} />
        </div>
      );
    }
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <AppBar title="FaceBook IP History" showMenuIconButton={false} />
            {renderThis}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
