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
    fetch("http://localhost:3000/signin", {
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        backgroundColor: 'lightcyan'
      }}
    >
      <div className='formstyle'>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign In</h2>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
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
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
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
          className='buttonstyle'
          style={{
            backgroundColor: '#007BFF',
          }}
        >
          Sign In
        </button>
        <button
          onClick={()=> {onRouteChange('_register_')}}
          type="button"
          className='buttonstyle'
          style={{
            backgroundColor: '#28a745',
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}}

export default SignInForm;