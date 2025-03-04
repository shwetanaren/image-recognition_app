import React from 'react';


const ImageLinkForm = () => {
    return(
        <div className='margin-top:20px'>
            <p>
            {'This magic brain will detect faces in your pictures. Try it !!!'}
            </p>
            <div>
                <input classname='center' type='text' placeholder="enter the image URL"/>
                <button> Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm