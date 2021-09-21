import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

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
      <h1>Пожалуйста, авторизуйтесь</h1>
      <Link to='/auth/signup'>Регистрация нового пользователя</Link><br/><br />

      <form onSubmit={submitHandler}>
        <input type='text' name='username' placeholder='username' /><br />
        <input type='password' name='password' placeholder='password' /><br /><br />

        <button type='submit'>Sign in</button>
      </form>

      {
        redirect
          ? <Redirect to='/account' />
          : ''
      }
    </div>
  );
}

export default Auth;
