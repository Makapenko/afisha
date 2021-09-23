import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { isAuthenticatedAC } from '../../redux/actionCreators';

function Auth() {
  const { isAuthenticated } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();

    const { username, password } = e.target;

    fetch(`${process.env.REACT_APP_SERVER_URL}/auth/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 'ACCESS OK') {
          dispatch(isAuthenticatedAC(true));
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        throw err.message;
      });
  };

  return (
    <div>
      <h1>Пожалуйста, авторизуйтесь</h1>

      <form onSubmit={submitHandler}>
        <input type='text' name='username' placeholder='username' />
        <br />
        <input type='password' name='password' placeholder='password' />
        <br />
        <br />

        <button type='submit'>Sign in</button>
      </form>

      <br />
      <br />
      <hr />
      <Link to='/signup'>Регистрация нового пользователя</Link>
      <br />
      <br />

      {
        isAuthenticated && <Redirect to='/account' />
      }
    </div>
  );
}

export default Auth;
