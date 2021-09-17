import React from 'react';
import { Link } from 'react-router-dom';

function Event({ event }) {
  return (
    <li>
      <h2>{event.title}</h2>
      <p className="padding-1">{event.description.slice(0, 150) }
      <Link to={`events/${event.id}`}><span>  ...читать далее</span></Link>
      </p>     
      
      <img src="https://via.placeholder.com/200x100" alt="" />
      <p>{event.startTime}</p>
    </li >
  );
}

export default Event;
