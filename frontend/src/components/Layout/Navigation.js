import React from 'react';
import { Link } from "react-router-dom"
import style from './Navigation.module.css'

import filterSvg from '../../icons/navigation/filter.svg'
import cardListSvg from '../../icons/navigation/cardList.svg'
import mapSvg from '../../icons/navigation/map.svg'
import favoritesSvg from '../../icons/navigation/favorites.svg'

function Navigation() {
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <Link to="/">
          <li className={`${style.li} ${style.liFirstChild}`}><img src={filterSvg} alt="filter" className={style.icon} /></li>
        </Link>
        <Link to="/events">
          <li className={style.li}><img src={cardListSvg} alt="card-list" className={style.icon} /></li>
        </Link>
        <Link to="/map">
          <li className={style.li}><img src={mapSvg} alt="map" className={style.icon} /></li>
        </Link>
        <Link to="/favorites">
          <li className={style.li}><img src={favoritesSvg} alt="favorites" className={style.icon} /></li>
        </Link>
        <Link to="/addEventAndPlace">
          <li className="margin-1 padding-1">Добавить Событие</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
