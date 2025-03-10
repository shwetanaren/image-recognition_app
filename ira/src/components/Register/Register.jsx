import React from 'react';
import '../Signin/Signin.css';

function Register(onRouteChange) {
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
      <form className='formstyle'>
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
          />
        </div>
        <button
          onClick={()=> {onRouteChange('_home_')}}
          type="submit"
          className='buttonstyle'
          style={{
            backgroundColor: '#007BFF',
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;