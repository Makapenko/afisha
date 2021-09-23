import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Event from './Event';
import style from './Events.module.css';

// для кнопок навигации
import { PUSH_BUTOON } from '../../redux/actionTypes';

function CardList(props) {

  const { events } = useSelector(store => store.eventsReducer)
  // для кнопок навигации
  const dispatch = useDispatch();
  const action = {
    type: PUSH_BUTOON,
    payload: 'cardList',
  };
  dispatch(action);
  //

  return (
    <>
      {events
        ? <div className={style.cardlist}>{events.map(event =>
          <Event key={event.id} event={event} />)}</div>
        : <p>упс</p>
      }
    </>
  );
}

export default CardList;
