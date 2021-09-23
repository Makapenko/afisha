
import React, {useState} from 'react';
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

  const [copyEvents, setCopyEvents] = useState(events)

  const [value, setValue] = useState(true)
  const [isToday, setIsToday] = useState(true)
function isFree(){
  // if(value&&isToday){
    if(value){
     
    console.log("бесплатно и всегда", events);
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
    console.log(" любые  всегда", events);
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
function cal(e){
console.log(e.timeStamp);
var timestamp = e.timeStamp
var date = new Date(timestamp);

console.log("Date: "+date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()+
          " "+date.getHours()+
          ":"+date.getMinutes()+
          ":"+date.getSeconds());
//   let today1= new Date().toISOString().slice(0, 10)

// console.log(today1)
//   var date = new Date( );
//   console.log(date);
//   let today = new Date().toLocaleDateString()

// console.log(today)
}
  return (
    <>
    <div onClick={isFree} >бесплатно</div>
    {/* <div onClick={Today} >сегодня</div> */}
      {events
        ? <div className={style.cardlist}>{events.map(event =>
          <Event key={event.id} event={event} />)}</div>
        : <p>упс</p>
      }
       <input type="date" name="calendar" onChange={cal}/>
    </>
  );
}

export default CardList;
