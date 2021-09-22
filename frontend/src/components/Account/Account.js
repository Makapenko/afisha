import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { isAuthenticatedAC } from '../../redux/actionCreators';
import AddEvent from '../AddEvent/AddEvent';
import AddPlace from '../AddPlace/AddPlace';

function Account() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userReducer);

  function logoutHandler() {
    fetch(`${process.env.REACT_APP_SERVER_URL}/auth/logout`, {
      credentials: 'include',
    });

    dispatch(isAuthenticatedAC(false));
    history.push('/auth');
  }

  return (
    <div>
      {isAuthenticated ? (
        <>
          <button onClick={logoutHandler}>Выход</button>
          <hr />
          <h1>Профиль для добавления событий</h1>
          <AddPlace />
          <hr /> <hr />
          <AddEvent />
        </>
      ) : (
        <Redirect to='/auth' />
      )}
    </div>
  );
}

export default Account;
