import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Event from './Event';

function CardList(props) {
  const dispatch = useDispatch()
  const {events} = useSelector(store => store.eventsReducer.events)

  
  return (
 
    <>
      {events
        ?<ul>{ events.map(event => <Event key={event.id} event={event} />)}</ul>
        : <p>упс</p>
      }
    </>
  );
}

export default CardList;
