import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import Event from './Event';
import style from './Events.module.css';

function CardList(props) {

  const { events } = useSelector(store => store.eventsReducer)
  const [copyEvents, setCopyEvents] = useState(events)
const [value, setValue] = useState(true)
function isFree(){
  if(value){
    console.log("бесплатно");
    setValue(false)
    setCopyEvents(events.filter(function (el) {
    return hasNumbers(el.price)!==true
  }))
  console.log(copyEvents);
  }else{
    console.log("все");

    setValue(true)

    setCopyEvents(events)
    console.log(copyEvents);
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
      {copyEvents
        ? <div className={style.cardlist}>{copyEvents.map(event => 
        <Event key={event.id} event={event} />)}</div>
        : <p>упс</p>
      }
    </>
  );
}

export default CardList;
