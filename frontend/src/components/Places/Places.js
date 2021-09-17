import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Place from './Place';

function Places(props) {
  const dispatch = useDispatch()
  const { places } = useSelector(store => store.eventsReducer.places)

  return (
    <>
      {places
        ?<ul>{ places.map(place => <Place key={place.id} place={place} />)}</ul>
        : <p>упс</p>
      }
    </>
  );
}

export default Places;
