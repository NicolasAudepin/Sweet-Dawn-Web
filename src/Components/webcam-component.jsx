// Import dependencies
import React, { useRef, useEffect } from "react";

import Webcam from "react-webcam";
import "../App.css";



function WebcamBlock() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runWebcam = async () => {  
    //  Loop and detect stuff 
    setInterval(() => {
      refresh();
    }, 10);
  };

  const refresh = async () => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

    }
  };

  useEffect(()=>{runWebcam()},[]); //starts the coco detection thread



  return (
    <div className="Webcam">  
        <p>Webcam</p>     
        <Webcam
          ref={webcamRef}
          mirrored
          muted={true} 
          style={{
            
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

    </div>
  );
}

export default WebcamBlock;
