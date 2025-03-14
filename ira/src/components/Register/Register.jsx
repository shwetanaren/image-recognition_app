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
    fetch("http://localhost:3000/register", {
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
      if (user ) {
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        backgroundColor: 'lightcyan'
      }}
    >
      <div className='formstyle' >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h2>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
            Name:
          </label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Enter your name"
            className='inputstyle'
            onChange={this.onNameChange}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
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
          type="submit"
          className='buttonstyle'
          style={{
            backgroundColor: '#007BFF',
          }}
        >
          Register
        </button>
      </div>
    </div>
  )};
}

export default Register;