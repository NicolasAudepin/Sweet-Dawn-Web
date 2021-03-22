// Import dependencies
import React, { useRef, useState, useEffect, Component } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./App.css";
import { drawRect } from "./utilities";
    
class SweetDawn extends Component {

    constructor(props){
        super(props);

        console.log("COCO construct");
        this.state = { 
            webcamRef : null,
            canvasRef : null,
        }
        
        this.sendData =  this.sendData.bind(this);
        this.runCoco =  this.runCoco.bind(this);
        this.detect =  this.detect.bind(this);
    
        this.runCoco();
    };

  // Main function
    sendData() {
        this.props.parentCallback(["People","Phones"]);
    }

    async runCoco() {
        
        this.sendData();

        const net = await cocossd.load();
        console.log("coco model loaded.");
        //  Loop and detect hands
        setInterval(() => {
            this.detect(net);
        }, 10);
    };

    async detect(net) {   
        // Check data is available
        const canvasRef = this.state.canvasRef;
        const webcamRef = this.state.webcamRef;
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

    

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        WEBCAM
            
                    </div>
                    <div>
                        <Webcam
                            ref={this.state.webcamRef}
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
                            ref={this.state.canvasRef}
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
  
}

export default SweetDawn;
