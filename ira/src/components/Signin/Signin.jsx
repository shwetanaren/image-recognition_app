import React from 'react';
import './Signin.css';

function SignInForm({onRouteChange}) {
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
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign In</h2>
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
      </form>
    </div>
  );
}

export default SignInForm;