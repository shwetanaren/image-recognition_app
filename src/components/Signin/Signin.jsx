import React from 'react';
import './Signin.css';

class  SignInForm extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    // event.preventDefault(); // Prevent the form from submitting the traditional way
    fetch("https://server-image-recognition-production.up.railway.app/signin", {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(user => {
      //check what is being returned
      console.log('Server response:', user)
      if (user.id) { //does the user exist with the id
        this.props.loadUser(user);
        this.props.onRouteChange('_home_');
      } else {
        //update the error state with an error message
        this.setState({error: user.message || "Error logging in: wrong credentials"})
      }
    })
    .catch(error => {
      console.error("Sign-in error:" , error);
      this.setState({error:"An error occured during signin please try later"})
    });
  }


  render () {
    const { onRouteChange } = this.props;
  return (
    <div className='container'>
      <div className='form-container'>
        <h2 >Sign in with your credentials</h2>
        <div>
          <label htmlFor="email" > Email: </label>
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
          className='buttonstyle button-signin'
        >
          Sign In
        </button>
        <button
          onClick={()=> {onRouteChange('_register_')}}
          type="button"
          className='buttonstyle button-register'
        >
          Register
        </button>
      </div>
    </div>
  );
}}

export default SignInForm;