import React from 'react';
import '../Signin/Signin.css';

class Register extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    // event.preventDefault(); // Prevents the form from reloading the page
    fetch("https://server-image-recognition-production.up.railway.app/register", {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(user => { //when we get the user we will change the route to home
      if (user.id) {
        this.props.loadUser(user)
        this.props.onRouteChange('_home_');
      } else{
        console.error("User registration failed");
      }
    })
    .catch(error => {
      console.error("Registration error:", error);
    });
  }
  
  render() {
  return (
       <div className='container'>
       <div className='form-container'>
        <h2 >Register</h2>
        <div>
          <label htmlFor="name" >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className='inputstyle'
            onChange={this.onNameChange}
          />
        </div>
        
        <div >
          <label htmlFor="email" >
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            className='inputstyle'
            onChange={this.onEmailChange}
          />
        </div>
        <div >
          <label htmlFor="password" >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
           className='inputstyle'
           onChange={this.onPasswordChange}
          />
        </div>
        <button
          onClick={this.onSubmitSignIn}
          type="button"
            className='buttonstyle button-register'>
          Register
        </button>
      </div>
    </div>
  )};
}

export default Register;