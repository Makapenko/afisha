import React, { useEffect, useState } from 'react';
// import Filter from './Filter';
import { useDispatch } from 'react-redux';
import style from './Main.module.css';

import moviePng from '../../icons/filters/1movie.png'
import theatrePng from '../../icons/filters/2theatreActive.png'
import concertPNG from '../../icons/filters/3concert.png'
// import movieActivePng from '../../icons/filters/1movieActive.png'
// import arrowWhitePng from '../../icons/navigation/arrowWhite.png'
import arrowBlackDownPng from '../../icons/navigation/arrowBlackDown.png'
import arrowBlackUpPng from '../../icons/navigation/arrowBlackUp.png'
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

  function dropDownList() {
    setSelect(!select)
  }


  return (
    <div className={style.container}>
      {/* Кино */}
      <div className={style.category}>
        <div className={style.category__left}>
          <div className={style.category__img}>
            <img src={moviePng} alt="favorites" className={style.icon} name="cat_movie" id="cat_movie" />
            {/* настройки как для чекбокса */}
          </div>

          <div className={style.category__name} htmlFor="cat_movie">Кино</div>

        </div>
        {select
          ? <div onClick={dropDownList} className={style.category__arrow}>
            <img src={arrowBlackDownPng} alt="arrow" className={style.icon} name="cat_movie" id="cat_movie" />
          </div>
          : <div onClick={dropDownList} className={style.category__arrow}>
            <img src={arrowBlackUpPng} alt="arrow" className={style.icon} name="cat_movie" id="cat_movie" />
          </div>
        }
      </div>

      {/* sub */}
      {select
        ?
        <div className={style.subcats__container}>
          <div className={style.subcats}>
            <div className={style.subcat}>
              <input type="checkbox" name="filmWideRelease" id="filmWideRelease" className={style.subcat__checkbox} />
              <label htmlFor="filmWideRelease" className={style.subcat__name}>
                Широкий прокат
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input type="checkbox" name="filmLimitedRelease" id="filmLimitedRelease" className={style.subcat__checkbox} />
              <label htmlFor="filmLimitedRelease" className={style.subcat__name}>
                Ограниченный прокат
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input type="checkbox" name="filmBar" id="filmBar" className={style.subcat__checkbox} />
              <label htmlFor="filmBar" className={style.subcat__name}>
                Кинопоказы в барах
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input type="checkbox" name="filmOther" id="filmOther" className={style.subcat__checkbox} />
              <label htmlFor="filmOther" className={style.subcat__name}>
                Разное
              </label>
            </div>
          </div>
        </div>
        : <span />
      }
      {/* Театр */}
      <div className={style.category}>
        <div className={style.category__left}>
          <div className={style.category__img}>
            <img src={theatrePng} alt="favorites" className={style.icon} name="cat_theatre" id="cat_theatre" />
            {/* настройки как для чекбокса */}
          </div>
          <div className={style.category__name} htmlFor="cat_theatre">Театр</div>
        </div>
        {select
          ? <div onClick={dropDownList} className={style.category__arrow}>
            <img src={arrowBlackDownPng} alt="arrow" className={style.icon} name="cat_theatre" id="cat_theatre" />
          </div>
          : <div onClick={dropDownList} className={style.category__arrow}>
            <img src={arrowBlackUpPng} alt="arrow" className={style.icon} name="cat_theatre" id="cat_theatre" />
          </div>
        }
      </div>
      {select
        ?
        <div className={style.subcats__container}>
          <div className={style.subcats}>
            <div className={style.subcat}>
              <input type="checkbox" name="bigTheatre" id="bigTheatre" className={style.subcat__checkbox} />
              <label htmlFor="bigTheatre" className={style.subcat__name}>
                Большой театр
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input type="checkbox" name="chamberTheatre" id="chamberTheatre" className={style.subcat__checkbox} />
              <label htmlFor="chamberTheatre" className={style.subcat__name}>
                Камерный театр
              </label>
            </div>
            <hr />

            <div className={style.subcat}>
              <input type="checkbox" name="theatreOther" id="theatreOther" className={style.subcat__checkbox} />
              <label htmlFor="theatreOther" className={style.subcat__name}>
                Разное
              </label>
            </div>
          </div>
        </div>
        : <span />
      }





      {/* Концерты */}
      <div className={style.category}>
        <div className={style.category__left}>
          <div className={style.category__img}>
            <img src={concertPNG} alt="favorites" className={style.icon} name="cat_concert" id="cat_concert" />
            {/* настройки как для чекбокса */}
          </div>
          <div className={style.category__name} htmlFor="cat_concert">Концерты</div>
        </div>
        {select
          ? <div onClick={dropDownList} className={style.category__arrow}>
            <img src={arrowBlackDownPng} alt="arrow" className={style.icon} name="cat_concert" id="cat_concert" />
          </div>
          : <div onClick={dropDownList} className={style.category__arrow}>
            <img src={arrowBlackUpPng} alt="arrow" className={style.icon} name="cat_concert" id="cat_concert" />
          </div>
        }
      </div>
      {select
        ?
        <div className={style.subcats__container}>
          <div className={style.subcats}>
            <div className={style.subcat}>
              <input type="checkbox" name="popConcert" id="popConcert" className={style.subcat__checkbox} />
              <label htmlFor="popConcert" className={style.subcat__name}>
                Поп
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input type="checkbox" name="rockConcert" id="rockConcert" className={style.subcat__checkbox} />
              <label htmlFor="rockConcert" className={style.subcat__name}>
                Рок
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input type="checkbox" name="rapConcert" id="rapConcert" className={style.subcat__checkbox} />
              <label htmlFor="rapConcert" className={style.subcat__name}>
                Рэп
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input type="checkbox" name="perfomanceInBars" id="perfomanceInBars" className={style.subcat__checkbox} />
              <label htmlFor="perfomanceInBars" className={style.subcat__name}>
                Выступления в барах
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input type="checkbox" name="concertOther" id="concertOther" className={style.subcat__checkbox} />
              <label htmlFor="concertOther" className={style.subcat__name}>
                Разное
              </label>
            </div>
          </div>
        </div>
        : <span />
      }







    </div>
  );
}

export default Main;
