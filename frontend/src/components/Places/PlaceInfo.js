import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PlaceInfo(props) {
  const { id } = useParams();
  const { places } = useSelector((store) => store.eventsReducer.places);
  const place = places[id - 1]
  const history = useHistory();
  return (
    <div className="flex column jus-center align-center" >
      <h2>{place.title}</h2>
      <p>{place.title}</p>
      <p>{place.address}</p>
      <p>{place.type}</p>
      <img src={place.urlImg1} alt="" />
      <button onClick={() => history.goBack()} className="margin2 padding2">Назад</button>
    </div>
  );
}

export default PlaceInfo;
