import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import Event from './Event';
import style from './Events.module.css';

function CardList(props) {

  const { events } = useSelector(store => store.eventsReducer)
  const [copyEvents, setCopyEvents] = useState(events)

  const [value, setValue] = useState(true)
  const [isToday, setIsToday] = useState(true)
function isFree(){
  if(value&&isToday){
    console.log("бесплатно и всегда");
    setValue(false)
    setCopyEvents(events.filter(function (el) {
    return hasNumbers(el.price)!==true
  }))
  if(value&&!isToday){
    console.log("бесплатно и сегодня");
    setValue(false)
    setCopyEvents(events.filter(function (el) {
    return hasNumbers(el.price)!==true
  }))
  }
  if(!value&&isToday){
    console.log(" любые  всегда");

    setValue(true)

    setCopyEvents(events)
  }
  if(!value&&!isToday){
    console.log(" любые  всегда");

  }
}}
function Today(){
  var todaysDate = new Date();
  if(value&&isToday){
    console.log("бесплатно и всегда");
    setValue(false)
    setCopyEvents(events.filter(function (el) {
    return hasNumbers(el.price)!==true
  }))
  if(value&&!isToday){
    console.log("бесплатно и сегодня");
    setValue(false)
    setCopyEvents(events.filter(function (el) {
    return hasNumbers(el.price)!==true
  }))
  }
  if(!value&&isToday){
    console.log(" любые  всегда");

    setValue(true)

    setCopyEvents(events)
  }
  if(!value&&!isToday){
    console.log(" любые  всегда");

  }
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
  }
  
}
function hasNumbers(t)
{
var regex = /\d/g;
return regex.test(t);
}  
  return (
    <>
    <div onClick={isFree} >бесплатно</div>
    <div onClick={Today} >сегодня</div>
      {copyEvents
        ? <div className={style.cardlist}>{copyEvents.map(event => 
        <Event key={event.id} event={event} />)}</div>
        : <p>упс</p>
      }
    </>
  );
}

export default CardList;
