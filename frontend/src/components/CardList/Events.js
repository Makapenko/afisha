

import React, {useState} from 'react';

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
function isFree(){
  // if(value&&isToday){
    if(value){
     
    // console.log("бесплатно и всегда", events);
    setValue(false)
    dispatch({
      type:"IS_FREE_EVENT",
      payload:events
    })
  //   setCopyEvents(events.filter(function (el) {
  //   return hasNumbers(el.price)!==true
  // })
  // )
}else if(!value){
    // console.log(" любые  всегда", events);
    setValue(true)
    dispatch({
      type:"ALL_EVENT",
      payload: copyEvents
    })
    // setCopyEvents(events)
  }
  // if(value&&!isToday){
  //   console.log("бесплатно и сегодня");
  //   setValue(false)
  //   setCopyEvents(events.filter(function (el) {
  //   return hasNumbers(el.price)!==true
  // }))
  // }
  // if(!value&&isToday){
    
  // if(!value&&!isToday){
  //   console.log(" любые  всегда");
  //   setValue(true)


  // }
}
// function Today(){
//   var todaysDate = new Date();
//   if(value&&isToday){
//     console.log("бесплатно и всегда");
//     setValue(false)
//     setCopyEvents(events.filter(function (el) {
//     return hasNumbers(el.price)!==true
//   }))
//   if(value&&!isToday){
//     console.log("бесплатно и сегодня");
//     setValue(false)
//     setCopyEvents(events.filter(function (el) {
//     return hasNumbers(el.price)!==true
//   }))
//   }
//   if(!value&&isToday){
//     console.log(" любые  всегда");

//     setValue(true)

//     setCopyEvents(events)
//   }
//   if(!value&&!isToday){
//     console.log(" любые  всегда");

  // }
  // if(value){
  //   console.log("сегодня и бесплатные и платные");
  //   setIsToday(false)
  //   setCopyEvents(copyEvents.filter(function (el) {
  //     let inputDate = new Date(el.dateStart);
  //     console.log(inputDate);
  //     return inputDate.setHours(0,0,0,0)==todaysDate.setHours(0,0,0,0)
  //   }))
  // }else{
  //   setIsToday(true)
  //   console.log("сегодня и бесплатные");

  //   setCopyEvents()
//   }
  
// }
// function hasNumbers(t)
// {
// var regex = /\d/g;
// return regex.test(t);
// }  
// function isFree(){
//   // if(value&&isToday){
//     if(value){
     
//     console.log("бесплатно и всегда", events);
//     setValue(false)
//     dispatch({
//       type:"IS_FREE_EVENT",
//       payload:events
//     })
//   //   setCopyEvents(events.filter(function (el) {
//   //   return hasNumbers(el.price)!==true
//   // })
//   // )
// }else if(!value){
//     console.log(" любые  всегда", events);
//     setValue(true)
//     dispatch({
//       type:"ALL_EVENT",
//       payload: copyEvents
//     })
//     // setCopyEvents(events)
//   }
function today(){
  
  if(value1){
     
    setValue1(false)
    dispatch({
      type:"IS_TODAY",
      payload:events
    })

}else if(!value1){
  setValue1(true)
  dispatch({
    type:"ALL_EVENT_IS_NOT_TODAY",
    payload: copyEvents
  })

}
}
  return (
    <>
    <div onClick={isFree} >бесплатно</div> 
    <div onClick={today} >Сегодня</div>

      {events
        ? <div className={style.cardlist}>{events.map(event =>
          <Event key={event.id} event={event} />)}</div>
        : <p>упс</p>
      }

    </>
  );
}

export default CardList;
