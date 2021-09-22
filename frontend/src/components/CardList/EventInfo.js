import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function EventInfo(props) {
  const { id } = useParams();
  const { events } = useSelector((store) => store.eventsReducer);
  const { locations } = useSelector((store) => store.eventsReducer);
  const event = events[id - 1]

  // eslint-disable-next-line no-unused-vars
  const location = locations.find(el => el.id === +event.LocationId)
  const history = useHistory();
  return (
    <div className="flex column jus-center align-center">
      <h2>{event.title}</h2>
      <p>{event.location}</p>
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
