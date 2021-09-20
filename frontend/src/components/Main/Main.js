import React, { useEffect } from 'react';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import style from './Main.module.css';

import moviePng from '../../icons/filters/1movie.png'
import movieActivePng from '../../icons/filters/1movieActive.png'

function Main(props) {

  useEffect(() => {
    fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(data => console.log(data))
  })
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
