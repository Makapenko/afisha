import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function EventInfo(props) {
  const { id } = useParams();
  const { events } = useSelector((store) => store.eventsReducer.events);
  const event = events[id-1]
  console.log('event info',event )
  console.log('id', id);
  return (
    <div className="flex column jus-center align-center">
      <h2>{event.title}</h2>
      <p  className="padding-2">{event.description}</p>
      <p>{event.price}</p>
      <p>{event.startDate}</p>
      <p>{event.startTime}</p>
      <img className="margin-1" src={event.urlImg1} alt="" />
      <img className="margin-1" src={event.urlImg2} alt="" />
    </div>
  );
}

export default EventInfo;
