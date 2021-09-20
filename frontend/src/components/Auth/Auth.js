import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Auth() {
  // eslint-disable-next-line no-unused-vars
  const [redirect, setRedirect] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const { username, password } = e.target;

    fetch('http://localhost:3001/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.code === 'ACCESS GRANTED') {
          setRedirect(true);
        }
      })
      .catch(err => {
        throw err.message
      })
  };

  return (
    <div>
      <h1>Авторизация</h1>

      <form onSubmit={submitHandler}>
        <input type='text' name='username' placeholder='username' />
        <input type='password' name='password' placeholder='password' />

        <button type='submit'>Sign in</button>
      </form>

      {
        redirect
          ? <Redirect to='/addLocation' />
          : ''
      }
    </div>
  );
}

export default Auth;
