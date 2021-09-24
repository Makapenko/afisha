import React from 'react';
import { Link } from "react-router-dom"
import Event from '../CardList/Event'

import { useSelector, useDispatch } from 'react-redux';

import style from '../CardList/Events.module.css';
// для кнопок навигации
import { PUSH_BUTOON } from '../../redux/actionTypes';


function Favorites(props) {
  // для кнопок навигации
  const dispatch = useDispatch();
  const action = {
    type: PUSH_BUTOON,
    payload: 'favorites',
  };
  dispatch(action);
  //

  const { events } = useSelector(store => store.eventsReducer)
  const favorites = useSelector(store => store.favoriteReducer)
  // console.log(events);
  // console.log(favorites);
  return (
    <div>

      {events

        ? <div className={style.cardlist}>{events.map(event => {
          if ((favorites.indexOf(event.id)) >= 0) {
            // console.log("должно работать");
            return <Event key={event.id} event={event} />

          }
        })}</div>
        : <p>упс</p>

      }

    </div>
  );
}

export default Favorites;
