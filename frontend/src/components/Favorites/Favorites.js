import React from 'react';
import { Link } from "react-router-dom"
import Event from '../CardList/Event'
import { useSelector } from 'react-redux';
import style from '../CardList/Events.module.css';

function Favorites() {
  const { events } = useSelector(store => store.eventsReducer)
  const favorites = useSelector(store => store.favoriteReducer)
  console.log(events);
  console.log(favorites);
  return (
    <div>
      <Link to="/addEventAndPlace">
        <li className="margin-1 padding-1">Добавить Событие</li>
      </Link>
      {events
        // eslint-disable-next-line array-callback-return
        ? <div className={style.cardlist}>{events.map(event => {
          if ((favorites.indexOf(event.id)) >= 0) {
            console.log("должно работать");
            return <div><Event key={event.id} event={event} /></div>

          }
        })}</div>
        : <p>упс</p>

      }

    </div>
  );
}

export default Favorites;
