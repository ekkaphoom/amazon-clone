import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(authObj => {
        history.push('/');
      })
      .catch(error => alert(error.message));
  }

  const register = e => {
    e.preventDefault();
    console.log(email, password);
    auth.createUserWithEmailAndPassword(email, password).then((authObj) => {
      console.log('authObj', authObj);
      if (authObj) {
        history.push('/');
      }
    })
      .catch(error => alert(error.message));
  }

  return (
    <div className="login">
      <img src='./images/Amazon-logo.png' alt='amazon' className="login__logo" />
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email </h5>
          <input type="text" onChange={e => setEmail(e.target.value)} value={email} />

          <h5>Password</h5>
          <input type="password" onChange={e => setPassword(e.target.value)} value={password} />

          <button className="login__signInButton" onClick={signIn}>Sign In</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice</p>
        <button className="login__registerButton" onClick={e => register(e)}> Create your Amazon Account</button>
      </div>
    </div>
  )
}

Login.propTypes = {

}

export default Login
