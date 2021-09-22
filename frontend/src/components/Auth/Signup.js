import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthenticatedAC } from '../../redux/actionCreators';

function Signup() {
  const { isAuthenticated } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  function signupHandler(e) {
    e.preventDefault();
    const { username, email, password, role } = e.target;
    console.log(username, email, password, role);

    fetch(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
        role: role.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('компонент signup', data.message);
        if (data.code === 'ACCESS OK') {
          alert(data.message);
          dispatch(dispatch(isAuthenticatedAC(true)));
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        throw err.message;
      });
  }

  return (
    <div>
      <h1>Регистрация</h1>

      <form onSubmit={signupHandler}>
        <input type='text' name='username' placeholder='username' />
        <br />
        <input type='email' name='email' placeholder='email' />
        <br />
        <input type='password' name='password' placeholder='password' />
        <br />
        <br />
        <select name='role'>
          {/* <option selected disabled>role</option> */}
          <option value='admin'>admin</option>
          <option value='other'>other</option>
        </select>
        <br />
        <br />
        <button type='submit'>Sign up</button>
      </form>

      <br />
      <br />
      <hr />
      <Link to='/auth'>Авторизоваться</Link>

      {
        isAuthenticated && <Redirect to='/account' />
      }
    </div>
  );
}

export default Signup;
