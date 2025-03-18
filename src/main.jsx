import React, {Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Rank from './Rank.jsx'
import ImageLinkForm from './ImageLinkForm.jsx'
import FaceRecognition from './FaceRecognition.jsx'
import SigninForm from './components/Signin/Signin.jsx'
import Register from './components/Register/Register.jsx'

// const returnClarifaiRequestOptions = (imageUrl) => {
// // Clarifai API credentials and model settings
// const PAT = '0371c5bf07fd45b195acd9ff30e41eef';
// const USER_ID = 'nash_1129';
// const APP_ID = 'my-first-application-a33ytm';
// const MODEL_ID = 'face-detection';
// const IMAGE_URL = imageUrl;

// const raw = JSON.stringify({
//   user_app_id: {
//     user_id: USER_ID,
//     app_id: APP_ID
//   },
//   inputs: [
//     {
//       data: {
//         image: {
//           url: imageUrl
//         }
//       }
//     }
//   ]
// });

// const requestOptions = {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Authorization': 'Key ' + PAT
//   },
//   body: raw
// };
// return requestOptions
// };

const initialState = {
  userInput: '', // stores URL entered by the user
  imageUrl: '', // can store output for later use in FaceRecognition and store in the image displayed before we enter a new URL
  boxes:[] ,//new state to store the bounding boxes. 
  route:'_signin_', //route checks the state of the component and accordingly changes the behavior of the app view.
  isSignedIn: false,
  user:{
    id: '',
    name:'',
    email:'',
    entries: 0,
    joined:''
  }
}


class Main extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name:data.name,
      email:data.email,
      entries:data.entries,
      joined:data.joined,
    }})
  }
  
  onInputChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  onButtonSubmit = () => {
    const IMAGE_URL = this.state.userInput;
    // console.log('About to fetch Clarifai API');
    console.log('About to send image URL to my server');
    
    // Update the imageUrl state to display the image in FaceRecognition component
    this.setState({ imageUrl: IMAGE_URL });

    // Send the image URL to your server’s /clarifai endpoint
  fetch("https://server-image-recognition-production.up.railway.app/clarifai", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageUrl: IMAGE_URL })
  })
  
    // fetch(
    //   "/clarifai/v2/models/" + "face-detection" + "/outputs", returnClarifaiRequestOptions(this.state.userInput))
      .then(response => response.json())
      .then(result => {

        if (result) {
          fetch("https://server-image-recognition-production.up.railway.app/image", {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id:this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
           this.setState(Object.assign(this.state.user, {entries:count}))
                // Update the user's entries immutably
          console.log("Updated count from server:", count);
          //this.setState({ user: { ...this.state.user, entries: count } });
          })
        }
        
      
      // Extracts output from the API response to find the regions of face detection
      const regions = result.outputs[0].data.regions;
        
         // Maps each region to its bounding box data
      const boxes =  regions.map(region => {
         // Accessing and rounding the bounding box values
         const boundingBox = region.region_info.bounding_box;
          // Return the bounding box object directly. You can also round the values if needed.
        return {
          top_row: parseFloat(boundingBox.top_row.toFixed(3)),
          left_col: parseFloat(boundingBox.left_col.toFixed(3)),
          bottom_row: parseFloat(boundingBox.bottom_row.toFixed(3)),
          right_col: parseFloat(boundingBox.right_col.toFixed(3))
        }
      });

          // Updates the state with the bounding boxes
        this.setState({ boxes });
        
         // Optional: Log concepts if you want to debug them
      regions.forEach(region => {
        region.data.concepts.forEach(concept => {
          const name = concept.name;
          const value = concept.value.toFixed(4);
          console.log(`${name}: ${value}`);
        });
      });
    })
          
         .catch(error => console.log('error', error));
        }

        //onroutechange gets called when we click on any of the routes 
  onRouteChange = (route) => { //calling this function for changes in the route
    if (route === '_signout_'){
      this.setState(initialState)
    } else if (route === '_home_') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route}); //route sets to the route that is being set
  };


  render() {
    const { isSignedIn, route, imageUrl, boxes } = this.state;
    return (
      
      <StrictMode>
        <Navbar 
        onRouteChange={this.onRouteChange} 
        isSignedIn={isSignedIn}/> 
        
        {route === '_home_' 
        ? <div>
          <Rank name={this.state.user.name} entries={this.state.user.entries}/>
          <ImageLinkForm 
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition 
          imageUrl={imageUrl} 
          boxes={boxes}/>{/* pass the boxes and imageUrl down as props */}
        </div>
        : (
          this.state.route === '_signin_'
          ? <SigninForm loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>

        )
      }
      </StrictMode>
    );
  }
  }

createRoot(document.getElementById('root')).render(<Main />);