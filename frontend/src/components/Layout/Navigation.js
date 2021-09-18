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
      <ul>
        <Link to="/">
          <li className="margin-1 padding-1"><img src={filterSvg} alt="filter" /></li>
        </Link>
        <Link to="/events">
          <li className="margin-1 padding-1"><img src={cardListSvg} alt="card-list" /></li>
        </Link>
        <Link to="/map">
          <li className="margin-1 padding-1"><img src={mapSvg} alt="map" /></li>
        </Link>
        <Link to="/favorites">
          <li className="margin-1 padding-1"><img src={favoritesSvg} alt="favorites" /></li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
