import React, { useEffect, useRef, useState } from "react";
// import Filter from './Filter';
import { useDispatch, useSelector } from "react-redux";
import style from "./Main.module.css";

import moviePng from "../../icons/filters/1movie.png";
import movieActivePng from "../../icons/filters/1movieActive.png"
import educationPng from '../../icons/filters/5education.png'
import theatrePng from "../../icons/filters/2theatreActive.png";
import concertPNG from "../../icons/filters/3concert.png";
import excursionPng from '../../icons/filters/4excursion.png'
// import movieActivePng from '../../icons/filters/1movieActive.png'
// import arrowWhitePng from '../../icons/navigation/arrowWhite.png'
import arrowBlackDownPng from "../../icons/navigation/arrowBlackDown.png";
import arrowBlackUpPng from "../../icons/navigation/arrowBlackUp.png";
function Main() {
  const dispatch = useDispatch();
  const events = useSelector(store=>store.eventsReducer)
  console.log('myEvents', events.myEvents)

  const [selectMovie, setSelectMovie] = useState(false);
  const [selectTheatre, setSelectTheatre] = useState(false);
  const [selectConcert, setSelectConcert] = useState(false);
  const [selectEducation, setSelectEducation] = useState(false);
  const [selectExcursion, setSelectExcursion] = useState(false);

  function dropDownListMovie(e) {
    setSelectMovie(!selectMovie);
    console.log(e.target.name);
  }
  function dropDownListTheatre(e) {
    setSelectTheatre(!selectTheatre);
    console.log(e.target.name);
  }
  function dropDownListConcert(e) {
    setSelectConcert(!selectConcert);
    console.log(e.target.name);
  }
  function dropDownListEducation(e) {
    setSelectEducation(!selectEducation);
    console.log(e.target.name);
  }

  function dropDownListExcursion(e) {
    setSelectExcursion(!selectExcursion);
    console.log(e.target.name);
  }



  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((data) => dispatch({type:'INIT_ALL', payload:data}));
  }, []);

  function onChange(e) {
    // console.log(e.target.checked);
    const sub = e.target.labels[0].innerText
    // console.log('sub', sub)
    if (e.target.checked) {
      dispatch({ type: 'ADD_EVENT', payload: sub })
    } else {
      dispatch({ type: "DELETE_EVENT", payload: sub })
    }
  }

  const npt1 = useRef(false)
  const npt2 = useRef(false)
  const npt3 = useRef(false)
  const npt4 = useRef(false)
  const npt5 = useRef(false)
  const npt6 = useRef(false)
  const npt7 = useRef(false)
  const npt8 = useRef(false)
  const npt9 = useRef(false)
  const npt10 = useRef(false)
  const npt11 = useRef(false)
  const npt12 = useRef(false)
  const npt13 = useRef(false)
  const npt14 = useRef(false)
  const npt15 = useRef(false)
  const npt16 = useRef(false)
  const npt17 = useRef(false)
  const npt18 = useRef(false)
  const npt19 = useRef(false)

function click(e){
  console.log(npt1)
   npt1.current.checked=!npt1.current.checked
   npt2.current.checked=!npt2.current.checked

}

  return (
    <div className={style.container}>
      {/* Кино */}
      <div className={style.category}>
        <div className={style.category__left}>
          <div className={style.category__img}>
            <img
              src={moviePng}
              alt="favorites"
              className={style.icon}
              name="cat_movie"
              id="cat_movie"
              onClick={click}
            />
            {/* настройки как для чекбокса */}
          </div>

          <div className={style.category__name} htmlFor="cat_movie">
            Кино
          </div>
        </div>
        {selectMovie ? (
          <div onClick={dropDownListMovie} className={style.category__arrow}>
            <img
              src={arrowBlackDownPng}
              alt="arrow"
              className={style.icon}
              name="cat_movie"
              id="cat_movie"
            />
          </div>
        ) : (
          <div onClick={dropDownListMovie} className={style.category__arrow}>
            <img
              src={arrowBlackUpPng}
              alt="arrow"
              className={style.icon}
              name="cat_movie"
              id="cat_movie"
            />
          </div>
        )}
      </div>

      {/* sub */}
      {selectMovie ? (
        <div name="cat_movie" className={style.subcats__container}>
          <div className={style.subcats}>
            <div className={style.subcat}>
              <input
                type="checkbox"
                name="filmWideRelease"
                id="filmWideRelease"
                className={style.subcat__checkbox}
                ref={npt1}
                // onClick={() =>
                //   filterBySubcategory(
                //     "WIDERELEASE",
                //     "DEL_WIDERELEASE",
                //     "Рок",
                //     0
                //   )
                // }
                onChange={onChange}
              />
              <label htmlFor="filmWideRelease" className={style.subcat__name}>
                Широкий прокат
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input
                type="checkbox"
                name="filmLimitedRelease"
                id="filmLimitedRelease"
                className={style.subcat__checkbox}
                // onClick={() =>
                //   filterBySubcategory(
                //     "WIDERELEASE",
                //     "DEL_WIDERELEASE",
                //     "Ограниченный прокат",
                //     1
                //   )
                // }
                onChange={onChange}
                ref={npt2}
              />
              <label
                htmlFor="filmLimitedRelease"
                className={style.subcat__name}
              >
                Ограниченный прокат
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input
                type="checkbox"
                name="filmBar"
                id="filmBar"
                className={style.subcat__checkbox}
                onChange={onChange}
              />
              <label htmlFor="filmBar" className={style.subcat__name}>
                Кинопоказы в барах
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input
                type="checkbox"
                name="filmOther"
                id="filmOther"
                className={style.subcat__checkbox}
                onChange={onChange}
              />
              <label htmlFor="filmOther" className={style.subcat__name}>
                Разное
              </label>
            </div>
          </div>
        </div>
      ) : (
        <span />
      )}
      {/* Театр */}
      <div className={style.category}>
        <div className={style.category__left}>
          <div className={style.category__img}>
            <img
              src={theatrePng}
              alt="favorites"
              className={style.icon}
              name="cat_theatre"
              id="cat_theatre"
            />
            {/* настройки как для чекбокса */}
          </div>
          <div className={style.category__name} htmlFor="cat_theatre">
            Театр
          </div>
        </div>
        {selectTheatre ? (
          <div onClick={dropDownListTheatre} className={style.category__arrow}>
            <img
              src={arrowBlackDownPng}
              alt="arrow"
              className={style.icon}
              name="cat_theatre"
              id="cat_theatre"
            />
          </div>
        ) : (
          <div onClick={dropDownListTheatre} className={style.category__arrow}>
            <img
              src={arrowBlackUpPng}
              alt="arrow"
              className={style.icon}
              name="cat_theatre"
              id="cat_theatre"
            />
          </div>
        )}
      </div>
      {selectTheatre ? (
        <div className={style.subcats__container}>
          <div className={style.subcats}>
            <div className={style.subcat}>
              <input
                type="checkbox"
                name="bigTheatre"
                id="bigTheatre"
                className={style.subcat__checkbox}
                onChange={onChange}
              />
              <label htmlFor="bigTheatre" className={style.subcat__name}>
                Большой театр
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input
                type="checkbox"
                name="chamberTheatre"
                id="chamberTheatre"
                className={style.subcat__checkbox}
                onChange={onChange}
              />
              <label htmlFor="chamberTheatre" className={style.subcat__name}>
                Камерный театр
              </label>
            </div>
            <hr />

            <div className={style.subcat}>
              <input
                type="checkbox"
                name="theatreOther"
                id="theatreOther"
                className={style.subcat__checkbox}
                onChange={onChange}
              />
              <label htmlFor="theatreOther" className={style.subcat__name}>
                Разное
              </label>
            </div>
          </div>
        </div>
      ) : (
        <span />
      )}

      {/* Концерты */}
      <div className={style.category}>
        <div className={style.category__left}>
          <div className={style.category__img}>
            <img
              src={concertPNG}
              alt="favorites"
              className={style.icon}
              name="cat_concert"
              id="cat_concert"
            />
            {/* настройки как для чекбокса */}
          </div>
          <div className={style.category__name} htmlFor="cat_concert">
            Концерты
          </div>
        </div>
        {selectConcert ? (
          <div onClick={dropDownListConcert} className={style.category__arrow}>
            <img
              src={arrowBlackDownPng}
              alt="arrow"
              className={style.icon}
              name="cat_concert"
              id="cat_concert"
            />
          </div>
        ) : (
          <div onClick={dropDownListConcert} className={style.category__arrow}>
            <img
              src={arrowBlackUpPng}
              alt="arrow"
              className={style.icon}
              name="cat_concert"
              id="cat_concert"
            />
          </div>
        )}
      </div>
      {selectConcert ? (
        <div className={style.subcats__container}>
          <div className={style.subcats}>
            <div className={style.subcat}>
              <input
                type="checkbox"
                name="popConcert"
                id="popConcert"
                className={style.subcat__checkbox}
                onChange={onChange}
              />
              <label htmlFor="popConcert" className={style.subcat__name}>
                Поп
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input
                type="checkbox"
                name="rockConcert"
                id="rockConcert"
                className={style.subcat__checkbox}
                onChange={onChange}
              />
              <label htmlFor="rockConcert" className={style.subcat__name}>
                Рок
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input
                type="checkbox"
                name="rapConcert"
                id="rapConcert"
                className={style.subcat__checkbox}
                onChange={onChange}
              />
              <label htmlFor="rapConcert" className={style.subcat__name}>
                Рэп
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input
                type="checkbox"
                name="perfomanceInBars"
                id="perfomanceInBars"
                className={style.subcat__checkbox}
                onChange={onChange}
              />
              <label htmlFor="perfomanceInBars" className={style.subcat__name}>
                Выступления в барах
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input
                type="checkbox"
                name="concertOther"
                id="concertOther"
                className={style.subcat__checkbox}
                onChange={onChange}
              />
              <label htmlFor="concertOther" className={style.subcat__name}>
                Разное
              </label>
            </div>
          </div>
        </div>
      ) : (
        <span />
      )}


      {/* Обучение */}

      <div className={style.category}>
        <div className={style.category__left}>
          <div className={style.category__img}>
            <img
              src={educationPng}
              alt="favorites"
              className={style.icon}
              name="cat_education"
              id="cat_education"
            />
            {/* настройки как для чекбокса */}
          </div>
          <div className={style.category__name} htmlFor="cat_education">
            Обучение
          </div>
        </div>
        {selectEducation ? (
          <div onClick={dropDownListEducation} className={style.category__arrow}>
            <img
              src={arrowBlackDownPng}
              alt="arrow"
              className={style.icon}
              name="cat_education"
              id="cat_education"
            />
          </div>
        ) : (
          <div onClick={dropDownListEducation} className={style.category__arrow}>
            <img
              src={arrowBlackUpPng}
              alt="arrow"
              className={style.icon}
              name="cat_education"
              id="cat_education"
            />
          </div>
        )}
      </div>
      {selectEducation ? (
        <div className={style.subcats__container}>
          <div className={style.subcats}>
            <div className={style.subcat}>
              <input
                type="checkbox"
                name="lecturesEducation"
                id="lecturesEducation"
                className={style.subcat__checkbox}
                onChange={onChange}
              />
              <label htmlFor="lecturesEducation" className={style.subcat__name}>
                Лекции
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input
                type="checkbox"
                name="masterClassEducation"
                id="masterClassEducation"
                className={style.subcat__checkbox}
                onChange={onChange}
              />
              <label htmlFor="masterClassEducation" className={style.subcat__name}>
                Мастер-классы
              </label>
            </div>
            <hr />

            <div className={style.subcat}>
              <input
                type="checkbox"
                name="otherEducation"
                id="otherEducation"
                className={style.subcat__checkbox}
                onChange={onChange}
              />
              <label htmlFor="otherEducation" className={style.subcat__name}>
                Разное
              </label>
            </div>
          </div>
        </div>
      ) : (
        <span />
      )}

      {/* Экскурсии */}

      <div className={style.category}>
        <div className={style.category__left}>
          <div className={style.category__img}>
            <img
              src={excursionPng}
              alt="favorites"
              className={style.icon}
              name="cat_excursion"
              id="cat_excursion"
            />
            {/* настройки как для чекбокса */}
          </div>
          <div className={style.category__name} htmlFor="cat_excursion">
            Экскурсии
          </div>
        </div>
        {selectExcursion ? (
          <div onClick={dropDownListExcursion} className={style.category__arrow}>
            <img
              src={arrowBlackDownPng}
              alt="arrow"
              className={style.icon}
              name="cat_excursion"
              id="cat_excursion"
            />
          </div>
        ) : (
          <div onClick={dropDownListExcursion} className={style.category__arrow}>
            <img
              src={arrowBlackUpPng}
              alt="arrow"
              className={style.icon}
              name="cat_excursion"
              id="cat_excursion"
            />
          </div>
        )}
      </div>
      {selectExcursion ? (
        <div className={style.subcats__container}>
          <div className={style.subcats}>
            <div className={style.subcat}>
              <input
                type="checkbox"
                name="water_excursion"
                id="water_excursion"
                className={style.subcat__checkbox}
                onChange={onChange}
              />
              <label htmlFor="water_excursion" className={style.subcat__name}>
                Водная экскурсия
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              <input
                type="checkbox"
                name="walking_excursion"
                id="walking_excursion"
                className={style.subcat__checkbox}
                onChange={onChange}
              />
              <label htmlFor="walking_excursion" className={style.subcat__name}>
                Пешеходная экскурсия
              </label>
            </div>
            <hr />

            <div className={style.subcat}>
              <input
                type="checkbox"
                name="otherExcursion"
                id="otherExcursion"
                className={style.subcat__checkbox}
                onChange={onChange}
              />
              <label htmlFor="otherExcursion" className={style.subcat__name}>
                Разное
              </label>
            </div>
          </div>
        </div>
      ) : (
        <span />
      )}













    </div>
  );
}

export default Main;
