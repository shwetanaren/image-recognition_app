import React from 'react';


function FaceRecognition({ imageUrl })  {
    return(
        <div className="center ">
            <div className='image-box'>
            <img alt="detected face" src={imageUrl}/>
            </div>

        </div>
    );
}

export default FaceRecognition;