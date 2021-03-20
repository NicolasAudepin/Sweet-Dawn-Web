// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./App.css";
import { drawRect } from "./utilities";
import * as WebMidi from "webmidi"
//https://github.com/djipco/webmidi
  
import SweetDawn from "./SweetDawn"
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <h1>AAAAAh</h1>
      <SweetDawn/>
      </header>
    </div>
  );
}

export default App;
