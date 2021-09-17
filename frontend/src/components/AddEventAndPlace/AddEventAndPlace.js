import React from 'react';
import AddPlace from '../AddPlace/AddPlace';
import AddEvent from '../AddEvent/AddEvent';

function AddEventAndPlace(props) {
  return (
    <div>
      <AddPlace />
      <hr /> <hr />
      <AddEvent />
    </div>
  );
}

export default AddEventAndPlace;
