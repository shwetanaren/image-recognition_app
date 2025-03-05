import React from 'react';


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div className='margin-top:1.5rem'>
            <p>
            {'This magic brain will detect faces in your pictures. Try it !!!'}
            </p>
            <div>
                <input onChange={onInputChange}  type='text' placeholder="enter the image URL"/>
                <button onClick={onButtonSubmit}> Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;