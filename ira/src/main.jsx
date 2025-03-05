import React, {Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Rank from './Rank'
import ImageLinkForm from './ImageLinkForm'
import FaceRecognition from './FaceRecognition.jsx'

const returnClarifaiRequestOptions = (imageUrl) => {
// Clarifai API credentials and model settings
const PAT = '0371c5bf07fd45b195acd9ff30e41eef';
const USER_ID = 'nash_1129';
const APP_ID = 'my-first-application-a33ytm';
const MODEL_ID = 'face-detection';
const IMAGE_URL = imageUrl;

const raw = JSON.stringify({
  user_app_id: {
    user_id: USER_ID,
    app_id: APP_ID
  },
  inputs: [
    {
      data: {
        image: {
          url: imageUrl
        }
      }
    }
  ]
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key ' + PAT
  },
  body: raw
};
return requestOptions
};

class Main extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '', // stores URL entered by the user
      imageUrl: '' // can store output for later use in FaceRecognition
    };
  }
  
  onInputChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  onButtonSubmit = () => {
    const IMAGE_URL = this.state.userInput;
    // console.log('User input:', IMAGE_URL);
    
    // Update the imageUrl state to display the image in FaceRecognition component
    this.setState({ imageUrl: IMAGE_URL });
  
    fetch(
      "https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs", returnClarifaiRequestOptions(this.state.userInput))
      .then(response => response.json())
     };

  render() {
    return (
      <StrictMode>
        <Navbar />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </StrictMode>
    );
  }
}

createRoot(document.getElementById('root')).render(<Main />);