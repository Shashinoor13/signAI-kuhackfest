// import {io} from 'socket.io-client';
// import{useEffect, useState} from 'react';
// // const socket = io('http://localhost:3000');

// function DetectPage() {
//   return (
//     <div>
//       <div className="cam">
//         <video autoPlay playsInline id="videoElement" width="640" height="480"></video>
//         <canvas id="canvas" width="400" height="300"></canvas>
//       </div>
//     </div>
//   );
// }
// export default DetectPage;
import { useState, useEffect } from "react";

import {io} from "socket.io-client";

function DetectApp() {
  const [val, setVal] = useState("Waiting for results...");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Create a WebSocket connection to the backend
    const socket = io("http://localhost:5000");
    setSocket(socket);

    // Listen for incoming results from the backend
    socket.on("result", (data) => {
      setVal(data.message);
    });

    return () => {
      // Clean up the WebSocket connection when the component unmounts
      socket.disconnect();
    };
  }, []);

  const startVideoCapture = async () => {
    // Start capturing video frames from webcam using WebRTC
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then(function (stream) {
          video.srcObject = stream;
          video.play();
        })
        .catch(function (err0r) {});
    }
    const videoElement = document.createElement("videoElement");
    videoElement.srcObject = videoStream;
    videoElement.autoplay = true;

    // Continuously capture and send frames to the backend
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const vidWidth =416;
    const vidHeigth =320;
    
    const sendFrame = () => {
      context.drawImage(videoElement, 0, 0, vidWidth,vidHeigth);
      const frameData = canvas.toDataURL("image/jpeg", 0.5);
      context.clearRect(0, 0, vidWidth, vidHeigth);
      // Send the frame to the backend
      socket.emit("frame",  frameData ),

      // Request the next frame
      requestAnimationFrame(sendFrame);
    };

    requestAnimationFrame(sendFrame);
  };

  return (
    <>
      {/* Add a button to start video capture */}
      <button onClick={startVideoCapture}>Start Video Capture</button>

      <div className=" mt-[5rem] mb-4 text-2xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-violet-600 from-blue-900 font-black">
          Detected Image is : {val}
        </span>
      </div>
    </>
  );
  
}

export default DetectApp;