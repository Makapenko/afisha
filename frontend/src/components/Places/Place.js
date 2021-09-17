import React from 'react';
import { Link } from 'react-router-dom';

function Place({ place }) {
  return (
    <li>
      <p>{place.title}</p>
      <p>{place.description}</p>
      <Link to={`place/${place.id}`}><span>  ...читать далее</span></Link>
    </li>
  );
}

export default Place;
