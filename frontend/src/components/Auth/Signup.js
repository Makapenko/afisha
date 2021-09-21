import React from 'react';
import { Link } from 'react-router-dom';
// todo В РАБОТЕ
function Signup() {
  return (
    <div>
      <h1>Регистрация</h1>
      <Link to='/auth'>Авторизация</Link><br /><br />

      {/* <form onSubmit={submitHandler}> */}
      <form>
        <input type='text' name='username' placeholder='username' /><br />
        <input type='email' name='email' placeholder='email' /><br />
        <input type='password' name='password' placeholder='password' /><br /><br />
        <select>
          {/* <option selected>role</option> */}
          <option value="admin">admin</option>
          <option value="other">other</option>
        </select><br /><br />
        <button type='submit'>Sign up</button>
      </form>

      {/* {
        redirect
          ? <Redirect to='/addEventAndPlace' />
          : ''
      } */}
    </div>
  );
}

export default Signup;
