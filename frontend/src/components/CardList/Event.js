import React from 'react';
import { Link } from 'react-router-dom';
import style from './Event.module.css';
import favoritesCardSvg from '../../icons/favoritesCard.png'
// import favoritesCardActiveSvg from '../../icons/favoritesCardActive.png'

function Event({ event }) {
  return (
    <Link to={`events/${event.id}`} style={{textDecoration: 'none'}}>
      <div className={style.box} style={{  background:`linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(http://localhost:3001/img/eventsPic/event-1.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover',  }}>
        <div className={style.firstline}>
          <div className={style.subcategory}>{event.subcategory}</div>
          <img src={favoritesCardSvg} alt="favorites" className={style.icon} />
        </div>

        <div className={style.bottom}>
          <div className={style.title}>{event.title}</div>

          <div className={style.bottom__bottom}>
            <div className={style.bottom__bottom__left}>
              <div className={style.location}>Тут будет место проведения</div>
              <div className={style.date}>{event.startDate} {event.startTime}</div>
            </div>
            <div className={style.bottom__bottom__right}>
              Билеты от 1500р
            </div>
          </div>
        </div>
      </div >
    </Link>
  );
}

export default Event;
