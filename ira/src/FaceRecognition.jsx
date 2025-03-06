import React from 'react';


function FaceRecognition({ imageUrl, boxes }) {
    console.log("Received boxes:", boxes); // Check console for output

    return (
      <div className="center">
        <div className="image-box">
          <img alt="detected face" src={imageUrl} />
          {boxes.map((box, i) => {
            return (
              <div
                key={i}
                className="bounding-box"
                style={{
                  top: `${box.top_row * 100}%`,
                  left: `${box.left_col * 100}%`,
                  right: `${(1 - box.right_col) * 100}%`,
                  bottom: `${(1 - box.bottom_row) * 100}%`
                }}
              ></div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default FaceRecognition;