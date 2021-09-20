import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Event from './Event';
import style from './Events.module.css';

function CardList(props) {
  const dispatch = useDispatch()
  const {events} = useSelector(store => store.eventsReducer.events)

  
  return (
    <>
      {events
        ?<div className={style.cardlist}>{ events.map(event => <Event key={event.id} event={event} />)}</div>
        : <p>упс</p>
      }
    </>
  );
}

export default CardList;
