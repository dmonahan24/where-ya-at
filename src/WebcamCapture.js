import React, { useRef } from "react"
import Webcam from "react-webcam"

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

function WebcamCapture() {
  const webcamRef = useRef(null)
  return (
    <div className='webcamCapture'>
      <Webcam 
        audio={false}
        height={400}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
    </div>
  )
};

export default WebcamCapture;