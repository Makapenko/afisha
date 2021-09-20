import React from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function EventInfo(props) {
  const { id } = useParams();
  const { events } = useSelector((store) => store.eventsReducer.events);
  // const { places } = useSelector((store) => store.eventsReducer.places);
  console.log('events', events);
  const event = events[id - 1]
  console.log('event', event);
 


  // const place = places.find(el => el.id == event.LocationId)
  // console.log('event', event);
  // console.log('places', places);
  // console.log('idPlace', idPlace);
  // console.log('place', place);

  const history = useHistory();
  return (
    <div className="flex column jus-center align-center">
      <h2>{event.title}</h2>
      {/* <Link to={`place/${idPlace}`}>{place.title}</Link> */}
      <p  className="padding-2">{event.description}</p>
      <p>{event.price}</p>
      <p>{event.startDate}</p>
      <p>{event.startTime}</p>
      {/* <img className="margin-1" src={event.urlImg1} alt="" />
      <img className="margin-1" src={event.urlImg2} alt="" /> */}
      <button onClick={() => history.goBack()} className="margin2 padding2">Назад</button> 
    </div>
  );
}

export default EventInfo;
