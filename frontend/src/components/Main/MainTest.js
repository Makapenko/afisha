import React, { useEffect, useState } from "react";
// import Filter from './Filter';
import { useDispatch, useSelector } from "react-redux";
import style from "./Main.module.css";

import moviePng from "../../icons/filters/1movie.png";
import theatrePng from "../../icons/filters/2theatreActive.png";
import concertPNG from "../../icons/filters/3concert.png";
// import movieActivePng from '../../icons/filters/1movieActive.png'
// import arrowWhitePng from '../../icons/navigation/arrowWhite.png'
import arrowBlackDownPng from "../../icons/navigation/arrowBlackDown.png";
import arrowBlackUpPng from "../../icons/navigation/arrowBlackUp.png";

// для кнопок навигации
import { PUSH_BUTOON } from '../../redux/actionTypes';

function Main() {
  const dispatch = useDispatch();

  // для кнопок навигации
  const action = {
    type: PUSH_BUTOON,
    payload: 'filter',
  };
  dispatch(action);
  //

  // тест чекбокса
  const checkBoxes = useSelector(store => store.filterReducer.subcategories)

  console.log(checkBoxes)

  // const events = useSelector(store=>store.eventsReducer)
  // console.log('event', events)
  const [selectMovie, setSelectMovie] = useState(false);
  const [selectTheatre, setSelectTheatre] = useState(false);
  const [selectConcert, setSelectConcert] = useState(false);

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

  const [all, setAll] = useState(null);
  const [checkboxList, setCheckboxList] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  function filterByCategory() {
    filterBySubcategory("WIDERELEASE", "DEL_WIDERELEASE", "Рок", 0);
    filterBySubcategory(
      "WIDERELEASE",
      "DEL_WIDERELEASE",
      "Ограниченный прокат",
      1
    );
  }

  function toggle(status) {
    return status === 1 ? 0 : 1;
  }

  function filterBySubcategory(
    actionTypeAdd,
    actionTypeDelete,
    subcategoryName,
    checkboxIndex
  ) {
    const status = checkboxList[checkboxIndex];
    if (!(status === 0 || status === 1)) {
      throw new Error("Invalid status");
    }

    setCheckboxList((prevList) => {
      const copy = [...prevList];
      copy[checkboxIndex] = toggle(status);
      return copy;
    });

    const action = status
      ? {
        type: actionTypeDelete,
        payload: subcategoryName,
      }
      : {
        type: actionTypeAdd,
        payload: { all, c: subcategoryName },
      };
    dispatch(action);
  }

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((data) => setAll(data));
  }, []);

  function test(data) {
    const action = {
      type: 'ADD_SUBCAT',
      payload: data
    }
    dispatch(action)
  }

  return (
    <div className={style.container}>
      Обучение:
      -Лекции - lections
      -Мастер-классы - masterClass
      -Другое - educationOthers
      Вечеринки:
      -Танцевальные - dances
      -Концерты - concerts
      -18+ - adults
      Бары:
      -Кинопоказы - barCinema
      -Лекции - barLections
      -Дегустации - degustations
      Выставки
      -Живопись - painting
      -Разное - expositionOther


      <input
         defaultChecked={checkBoxes.expositionOther && true}
        type="checkbox"
        name="filmLimitedRelease"
        id="filmLimitedRelease"
        className={style.subcat__checkbox}
        onClick={() =>
          test('expositionOther')
        }
        onChange={() =>
          filterBySubcategory(
            "WIDERELEASE",
            "DEL_WIDERELEASE",
            "Ограниченный прокат",
            1
          )
        }
      />



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
              onClick={filterByCategory}
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
                onClick={() =>
                  filterBySubcategory(
                    "WIDERELEASE",
                    "DEL_WIDERELEASE",
                    "Рок",
                    0
                  )
                }
              />
              <label htmlFor="filmWideRelease" className={style.subcat__name}>
                Широкий прокат
              </label>
            </div>
            <hr />
            <div className={style.subcat}>
              {/* Тест чекбокса !!!!!!!!!!!!!*/}
              {checkBoxes[0] === 'test'
                ? <input
                  defaultChecked
                  type="checkbox"
                  name="filmLimitedRelease"
                  id="filmLimitedRelease"
                  className={style.subcat__checkbox}
                  onClick={() =>
                    filterBySubcategory(
                      "WIDERELEASE",
                      "DEL_WIDERELEASE",
                      "Ограниченный прокат",
                      1
                    )
                  }
                />
                : <input

                  type="checkbox"
                  name="filmLimitedRelease"
                  id="filmLimitedRelease"
                  className={style.subcat__checkbox}
                  onClick={() =>
                    filterBySubcategory(
                      "WIDERELEASE",
                      "DEL_WIDERELEASE",
                      "Ограниченный прокат",
                      1
                    )
                  }
                />
              }

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
    </div>
  );
}

export default Main;
