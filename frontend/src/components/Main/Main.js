import React, { useEffect, useState } from 'react';
// import Filter from './Filter';
import { useDispatch } from 'react-redux';
import style from './Main.module.css';

import moviePng from '../../icons/filters/1movie.png'
// import movieActivePng from '../../icons/filters/1movieActive.png'
import arrowWhitePng from '../../icons/navigation/arrowWhite.png'
import arrowBlackPng from '../../icons/navigation/arrowBlack.png'
function Main() {

  const [select, setSelect] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('http://localhost:3001/')
      .then(res => res.json())
      .then(data => dispatch({
        type: 'INIT_ALL',
        payload: data
      }))
  }, [dispatch])

    function dropDownList(){
      setSelect(!select)
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
        <div onClick={dropDownList} className={style.category__arrow}>
        <img src={arrowBlackPng} alt="arrow" className={style.icon} name="cat_movie" id="cat_movie" />
          {/* \/ */}
        </div>
      </div>
      
      {/* sub */}
      {select
      ?
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
      : <span/>
      }
      



      <div className={style.category__name} for="cat_theatre">Театр</div>
    </div>
  );
}

export default Main;
