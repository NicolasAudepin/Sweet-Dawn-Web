// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./App.css";
import { drawRect } from "./utilities";
import * as WebMidi from "webmidi"
//https://github.com/djipco/webmidi
    
function SweetDawn() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let options = [];
  // Main function
  const runCoco = async () => {
    
    WebMidi.enable(function (err) {
      if (err) {
          console.log("WebMidi could not be enabled.", err);
        } else {
          console.log("WebMidi enabled!");
          console.log(WebMidi.inputs);
          console.log(WebMidi.outputs);
          console.log(WebMidi.outputs.length);
          var midout = [];
          WebMidi.outputs.map((out,index) =>  options.push(<div>coucou</div>));
          WebMidi.outputs.map((out,index) => console.log(WebMidi.outputs[index]));
          WebMidi.outputs.map((out,index) => console.log(WebMidi.outputs[index].name));
        }
      });

    const net = await cocossd.load();
    console.log("coco model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      //console.log(webcamRef)

      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const obj = await net.detect(video);
      //console.log(obj)
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx); 
    }
  };



  useEffect(()=>{runCoco()},[]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>output</p>
          {options}
          {console.log("options")}
          {console.log(options)}
           
          <select name="bad_day">
            <option value="Sundayyyy">Sundayyyy</option>
            
            {options}
            <option value="Sunday">Sunday</option>
          </select>

        </div>
        <div>
          <Webcam
            ref={webcamRef}
            muted={true} 
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 9,
              width: 640,
              height: 480,
            }}
          />

          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 8,
              width: 640,
              height: 480,
            }}
          />
        </div>
        
      </header>
    </div>
  );
}

export default SweetDawn;
