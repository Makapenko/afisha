import React from 'react';
import { Link } from "react-router-dom"
import style from './Navigation.module.css'

import filterSvg from '../../icons/navigation/filter.svg'
import filterActiveSvg from '../../icons/navigation/filterActive.svg'
import cardListSvg from '../../icons/navigation/cardList.svg'
import cardListActiveSvg from '../../icons/navigation/cardListActive.svg'
import mapSvg from '../../icons/navigation/map.svg'
import mapActiveSvg from '../../icons/navigation/mapActive.svg'
import favoritesSvg from '../../icons/navigation/favorites.svg'
import favoritesActiveSvg from '../../icons/navigation/favoritesActive.svg'

import { useSelector } from "react-redux";
import store from '../../redux/store';

function Navigation() {

  // для кнопок навигации
  const renderNav = useSelector(store => store.navigationReducer.renderNav)
  console.log('renderNav',renderNav);
  const nav = useSelector(store => store.navigationReducer.navigation)

  //

  return (
    <>
    {renderNav
    ?
    <nav className={style.nav}>
    <ul className={style.ul}>
      <Link to="/">
        <li className={`${style.li} ${style.liFirstChild}`}>
          {nav === "filter"
            ? <img src={filterActiveSvg} alt="filter" className={style.icon} />
            : <img src={filterSvg} alt="filter" className={style.icon} />
          }
        </li>
      </Link>
      <Link to="/events">
        <li className={style.li}>
          {nav === "cardList"
            ? < img src={cardListActiveSvg} alt="card-list" className={style.icon} />
            : < img src={cardListSvg} alt="card-list" className={style.icon} />
          }
        </li>
      </Link>
      <Link to="/map">
        <li className={style.li}>
          {nav === "map"
            ? <img src={mapActiveSvg} alt="map" className={style.icon} />
            : <img src={mapSvg} alt="map" className={style.icon} />
          }
        </li>
      </Link>
      <Link to="/favorites">
        <li className={style.li}>
          {nav === "favorites"
            ? <img src={favoritesActiveSvg} alt="favorites" className={style.icon} />
            : <img src={favoritesSvg} alt="favorites" className={style.icon} />
          }
        </li>
      </Link>
    </ul>
  </nav>
    : <span></span>
    
    }
    </>
  );
}

export default Navigation;
