import React from 'react';
// import { checkEmail, checkNick, checkPass } from '../../utils/validate'

function Auth() {

  const submitHandler = (e) => {
    e.preventDefault();

    // if (inputs.every((input) => input.isValid())) {
    //   alert('We can send form');
    //   inputs.forEach((input) => input.clear());
    // } else {
    //   alert('Invalid data');
    // }
  };

  return (
    <div>
      <h1>Авторизация</h1>

      <form onSubmit={submitHandler}>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default Auth;
