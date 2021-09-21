import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import AddEvent from '../AddEvent/AddEvent';
import AddPlace from '../AddPlace/AddPlace';

function Account(props) {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/account', {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        console.log('AddEventAndPlace', data.message);
        if (data.code === 'ACCESS DENIED') {
          setRedirect(true);
        }
      })
      .catch(err => err.message)
  }, [])

  return (
    <div>
      <h1>Профиль для добавления событий</h1>
      <p>(component Account)</p>
      {
        redirect
          ? <Redirect to='/auth' />
          : (
            <>
              <AddPlace />
              <hr /> <hr />
              <AddEvent />
            </>
          )
      }


    </div>
  );
}

export default Account;
