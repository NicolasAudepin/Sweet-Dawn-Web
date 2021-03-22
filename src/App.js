// Import dependencies
import React, { Component } from "react";
import "./App.css";

//https://github.com/djipco/webmidi
  
import Coco from "./Coco";
import MidiOut from "./MidiOut";
import DataVis from "./DataVis";

class App extends Component {

  state = {detections:[]}

  callbackSetDetections = (childData) => {
    this.setState({detections: childData});
  }

  render(){
    const {detections} = this.state;
    return (
      <div className="App">
        <header className="App-header">
        <h1>SWEET DAWN</h1>
        
        
        <DataVis detections = {detections}/>
        <Coco parentCallback = {this.callbackSetDetections}/>
  
        </header>
      </div>
    );
  
  }
}

export default App;
