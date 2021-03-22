// Import dependencies
import React, { Component } from "react";
import "./App.css";

//https://github.com/djipco/webmidi
  
import SweetDawn from "./SweetDawn";
import MidiOut from "./MidiOut";
import DataVis from "./DataVis";

class App extends Component {

  state = {values:["aaaaah default"]}

  callbackFunction = (childData) => {
    this.setState({values: childData});
  }

  render(){
    const {values} = this.state;
    return (
      <div className="App">
        <header className="App-header">
        <h1>SWEET DAWN</h1>
        
        <MidiOut/>
        <DataVis values = {values}/>
        <SweetDawn parentCallback = {this.callbackFunction}/>
  
        </header>
      </div>
    );
  
  }
}

export default App;
