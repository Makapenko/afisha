import React from 'react';
import Filter from './Filter';

import style from './Main.module.css';

import moviePng from '../../icons/filters/1movie.png'
import movieActivePng from '../../icons/filters/1movieActive.png'

function Main(props) {
  return (
    <div className={style.container}>
      <div className={style.category}>
        <div className={style.category__left}>
          <div className={style.category__img}>
            <img src={moviePng} alt="favorites" className={style.icon} />
          </div>

          <div className={style.category__name}>Кино</div>
        </div>
        <div className={style.category__arrow}>\/</div>
      </div>

    </div>
  );
}

export default Main;
