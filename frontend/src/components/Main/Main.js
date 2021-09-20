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
            <img src={moviePng} alt="favorites" className={style.icon} name="cat_movie" id="cat_movie"/> 
            {/* настройки как для чекбокса */}
          </div>

          <div className={style.category__name} for="cat_movie">Кино</div>
        </div>
        <div className={style.category__arrow}>\/</div>
      </div>
      <div className={style.subcats__container}>
        <div className={style.subcats}>
          <div className={style.subcat}>
            <input type="checkbox" name="filmWideRelease" id="filmWideRelease" className={style.subcat__checkbox} />
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
            <input type="checkbox" name="filmOther" id="filmOther" className={style.subcat__checkbox} />
            <label for="filmOther" className={style.subcat__name}>
              Разное
            </label>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Main;
