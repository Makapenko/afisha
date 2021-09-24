import React from 'react';
import { Link } from 'react-router-dom';
import style from './Event.module.css';
import favoritesCardSvg from '../../icons/favoritesCard.png'

import favoritesCardActiveSvg from '../../icons/favoritesCardActive.png'

import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

function Event({ event }) {
  const dispatch = useDispatch();
  const favorites = useSelector(store => store.favoriteReducer)


  function addFavorit(){
    dispatch({
      type: "ADD_FAVORITE",
      payload: event.id
    })
  }
  return (
    
    <>
      <Link to={`events/${event.id}`} style={{ textDecoration: 'none' }}>
        <div className={style.box} style={{ background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(    http://localhost:3001${event.EventPhotos[0].url})`, backgroundPosition: 'center', backgroundSize: 'cover', }}>
          <div className={style.firstline}>
            <div className={style.subcategory}>{event.subcategory}</div>

            {/* <img src={favoritesCardSvg} alt="favorites" className={style.icon} onClick={addFavorit}/> */}

          </div>

          <div className={style.bottom}>
            <div className={style.title}>{event.title}</div>

            <div className={style.bottom__bottom}>
              <div className={style.bottom__bottom__left}>
                <div className={style.location}></div>
                <div className={style.date}>{event.startDate} {event.startTime}</div>
                {/* <Link to={`events/${event.id}`} style={{textDecoration: 'none'}}>
              <button>На страницу события</button>
              </Link> */}
              </div>
              <div className={style.bottom__bottom__right}>
                Билеты {event.price}
              </div>
            </div>
          </div>
        </div>
      </Link>
      <img src={favorites.indexOf(event.id) >= 0 ? favoritesCardActiveSvg : favoritesCardSvg} alt="favorites" className={style.icon} onClick={addFavorit} />
    </>

  );
}

export default Event;
