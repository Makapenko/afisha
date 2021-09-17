import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function EventInfo(props) {
  const { id } = useParams();
  const { events } = useSelector((store) => store.eventsReducer.events);
  const event = events[id-1]
  const placeId = event.idPlace


  const { places } = useSelector((store) => store.eventsReducer.places);
  const idPlace =  event.idPlace
  const place = places.find(el => el.id == idPlace)

  const history = useHistory();
  return (
    <div className="flex column jus-center align-center">
      <h2>{event.title}</h2>
      <Link to={`place/${placeId}`}>{place.title}</Link>
      <p  className="padding-2">{event.description}</p>
      <p>{event.price}</p>
      <p>{event.startDate}</p>
      <p>{event.startTime}</p>
      <img className="margin-1" src={event.urlImg1} alt="" />
      <img className="margin-1" src={event.urlImg2} alt="" />
      <button onClick={() => history.goBack()} className="margin2 padding2">Назад</button>
    </div>
  );
}

export default EventInfo;
