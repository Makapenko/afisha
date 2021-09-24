

import React, { useState } from 'react';
import calendar from '../../icons/filters/calendar.png';
import { useSelector, useDispatch } from 'react-redux';

import Event from './Event';
import style from './Events.module.css';

// для кнопок навигации
import { PUSH_BUTOON } from '../../redux/actionTypes';

function CardList(props) {
  const dispatch = useDispatch();

  const { events } = useSelector(store => store.eventsReducer)

  // для кнопок навигации
  const action = {
    type: PUSH_BUTOON,
    payload: 'cardList',
  };
  dispatch(action);
  //

  const [copyEvents, setCopyEvents] = useState(events)

  const [value, setValue] = useState(true)
  const [value1, setValue1] = useState(true)
  const [isToday, setIsToday] = useState(true)
  function isFree() {
    // if(value&&isToday){
    if (value) {

      // console.log("бесплатно и всегда", events);
      setValue(false)
      dispatch({
        type: "IS_FREE_EVENT",
        payload: events
      })
      //   setCopyEvents(events.filter(function (el) {
      //   return hasNumbers(el.price)!==true
      // })
      // )
    } else if (!value) {
      // console.log(" любые  всегда", events);
      setValue(true)
      dispatch({
        type: "ALL_EVENT",
        payload: copyEvents
      })
      // setCopyEvents(events)
    }
   
  }
 
  function today() {

    if (value1) {

      setValue1(false)
      dispatch({
        type: "IS_TODAY",
        payload: events
      })

    } else if (!value1) {
      setValue1(true)
      dispatch({
        type: "ALL_EVENT_IS_NOT_TODAY",
        payload: copyEvents
      })

    }
  }
  return (
    <>
      <div className={style.header}>
        {!value
          ?<div onClick={isFree} className={style.active} >Бесплатно</div>
          :<div onClick={isFree} >Бесплатно</div>
        }
        {!value1
          ?<div onClick={today} className={style.active} >Сегодня</div>
          :<div onClick={today} >Сегодня</div>
        }
        {/* <div onClick={today} >Сегодня</div> */}
        <img src={calendar} alt="" height='20vh' />
      </div>

      {events
        ? <div className={style.cardlist}>{events.map(event =>
          <Event key={event.id} event={event} />)}</div>
        : <p>упс</p>
      }

    </>
  );
}

export default CardList;
