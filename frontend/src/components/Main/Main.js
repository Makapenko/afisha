import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import style from './Main.module.css';

import moviePng from '../../icons/filters/1movie.png'
// import movieActivePng from '../../icons/filters/1movieActive.png'

function Main() {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   fetch('http://localhost:3001/')
  //   .then(res => res.json())
  //   .then(data => dispatch({
  //     type: 'INIT_ALL',
  //     payload: data
  //   }))
  // },[dispatch])



  // const {events} = useSelector(store => store.eventsReducer)
  // console.log(events);

  const arrayToSend = useSelector(store => store.eventsReducer.events)
  const abc = [];
  arrayToSend.map(el => {
    return abc.push(el.id)
  })

// let val={ subcategory: "Рок", value: false }

  const [state, setState] = useState(false)


  function filterWideRelease() {

    console.log(state);
    setState( !state)
    console.log(state);


    if (state) {
      fetch('http://localhost:3001/')
        .then(res => res.json())
        .then(data => dispatch({
          type: 'INIT_WIDERELEASE',
          payload: data
        }))
    } else {
      console.log("!!!!!!!!!!!!!!!!");
      dispatch({
        type: 'CLEAR_FILTER',
        payload: arrayToSend
      })
    }
  }

  return (
    <div className={style.container}>
      <div className={style.category}>
        <div className={style.category__left}>
          <div className={style.category__img}>
            <img src={moviePng} alt="favorites" className={style.icon} name="cat_movie" id="cat_movie" />
            {/* настройки как для чекбокса */}
          </div>

          <div className={style.category__name} for="cat_movie">Кино</div>
        </div>
        <div className={style.category__arrow}>\/</div>
      </div>
      <div className={style.subcats__container}>
        <div className={style.subcats}>
          <div className={style.subcat}>
            <input type="checkbox" name="filmWideRelease" id="filmWideRelease" className={style.subcat__checkbox}
              onClick={filterWideRelease}
            />
            <label for="filmWideRelease" className={style.subcat__name}>
              Широкий прокат
            </label>
          </div>
          <hr />
          <div className={style.subcat}>
            <input type="checkbox" name="filmLimitedRelease" id="filmLimitedRelease" className={style.subcat__checkbox} />
            <label for="filmLimitedRelease" className={style.subcat__name}>
              Ограниченный прокат
            </label>
          </div>
          <hr />
          <div className={style.subcat}>
            <input type="checkbox" name="filmBar" id="filmBar" className={style.subcat__checkbox} />
            <label for="filmBar" className={style.subcat__name}>
              Кинопоказы в барах
            </label>
          </div>
          <hr />
          <div className={style.subcat}>
            <input type="checkbox" name="Rock" id="filmOther" className={style.subcat__checkbox} />
            <label for="filmOther" className={style.subcat__name}>
              Рок
            </label>
          </div>
          {/* <div className={style.subcat}>
            <input type="checkbox" name="filmOther" id="filmOther" className={style.subcat__checkbox} />
            <label for="filmOther" className={style.subcat__name}>
              Разное
            </label>
          </div> */}
        </div>
      </div>

    </div>
  );
}

export default Main;
