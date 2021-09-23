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
import { checkboxHandleAC } from "../../redux/actionCreators";

function Main() {
  const dispatch = useDispatch();
  const subcategories = useSelector(store => store.filterReducer.subcategories)

  // для кнопок навигации
  const action = {
    type: PUSH_BUTOON,
    payload: 'filter',
  };
  dispatch(action);
  //

  // тест чекбокса


  // const events = useSelector(store=>store.eventsReducer)
  // console.log('event', events)
  //todo Переписать на редакс, чтобы при перемещении по вкладкам открытое состояние категории состовалось
  const [selectStudy, setSelectStudy] = useState(false); // ! Обучение
  const [selectTheatre, setSelectTheatre] = useState(false);
  const [selectConcert, setSelectConcert] = useState(false);

  function dropDownListMovie(e) {
    setSelectStudy(!selectStudy);
    // console.log(e.target.name);
  }

  function dropDownListTheatre(e) {
    setSelectTheatre(!selectTheatre);
    // console.log(e.target.name);
  }

  function dropDownListConcert(e) {
    setSelectConcert(!selectConcert);
    // console.log(e.target.name);
  }

  const [all, setAll] = useState(null);
  // const [checkboxList, setCheckboxList] = useState([
  //   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  // ]);

  function filterByCategory() {
    filterBySubcategory( "lections");
    filterBySubcategory("masterClass");
  }

  // function toggle(status) {
  //   return status === 1 ? 0 : 1;
  // }

  const subCat={lections:"Лекции",
    // masterClass:"Мастер-классы ",
    masterClass:"Ограниченный прокат",
    educationOthers:"Другое",
    dances:"Танцевальные",
    concerts:"Концерты",
    adults:"18+",
    // lections:"Лекции",
    lections:"Рок",
    // masterClass:"Ограниченный прокат",
    // filmScreeningsInBars:"Кинопоказы в барах"
    // barCinema:"",
    // barLections:"",
    // degustations:"",
    // painting:"",
    // expositionOther:"",
  }

  function filterBySubcategory(
    
    subcategoryName
    // checkboxIndex
  ) {
    
    let nameSubCat=''
    for(var i in subCat){
      if(i==subcategoryName){
        nameSubCat=subCat[i]
      }
    }
    // const status = checkboxList[checkboxIndex];
    // if (!(status === 0 || status === 1)) {
    //   throw new Error("Invalid status");
    // }

    // setCheckboxList((prevList) => {
    //   const copy = [...prevList];
    //   copy[checkboxIndex] = toggle(status);
    //   return copy;
    // });

    // const action = status
    if(subcategories[subcategoryName]) {
      subcategories[subcategoryName]=false
      dispatch({
        type: "DEL_WIDERELEASE",
        payload: nameSubCat,
      })}else{
        subcategories[subcategoryName]=true

          dispatch(
            {type: "WIDERELEASE",
        payload: { all, c: nameSubCat },
        
      })};
    
  }

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((data) => setAll(data));
  }, []);

  function checkboxHandle(data) {
    dispatch(checkboxHandleAC(data))
  }

  return (
    <div className={style.container}>
      {/* Обучение:
      -Лекции - lections
      -Мастер-классы - masterClass
      -Другое - educationOthers */}

      {/* Вечеринки:
      -Танцевальные - dances
      -Концерты - concerts
      -18+ - adults */}

      Бары:
      -Кинопоказы - barCinema
      -Лекции - barLections
      -Дегустации - degustations
      <br/>
      Выставки
      -Живопись - painting
      -Разное - expositionOther


      <input
        onClick={() => checkboxHandle('expositionOther')}
        defaultChecked={subcategories.expositionOther && true}
        type="checkbox"
        name="filmLimitedRelease"
        id="filmLimitedRelease"
        className={style.subcat__checkbox}
        onChange={() =>
          filterBySubcategory(
            
            "masterClass"
          )
        }
      />



      {/* // ! ОБУЧЕНИЕ */}
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
            Обучение
          </div>
        </div>
        {
          selectStudy
            ? (
              <div onClick={dropDownListMovie} className={style.category__arrow}>
                <img
                  src={arrowBlackUpPng}
                  alt="arrow"
                  className={style.icon}
                  name="cat_movie"
                  id="cat_movie"
                />
              </div>
            )
            : (
              <div onClick={dropDownListMovie} className={style.category__arrow}>
                <img
                  src={arrowBlackDownPng}
                  alt="arrow"
                  className={style.icon}
                  name="cat_movie"
                  id="cat_movie"
                />
              </div>
            )
        }
      </div>

      {
        selectStudy && (
          <div name="cat_movie" className={style.subcats__container}>
            <div className={style.subcats}>

              <div className={style.subcat}>
                <input
                  type="checkbox"
                  name="lections"
                  id="lections"
                  className={style.subcat__checkbox}
                  onClick={() => {
                    filterBySubcategory(
                      
                      "lections"
                    );
                    // checkboxHandle('lections');
                  }}
                  defaultChecked={subcategories.lections}
                />
                <label htmlFor="lections" className={style.subcat__name}>
                  Лекции
                </label>
              </div>
              <hr />

              <div className={style.subcat}>
                <input
                  type="checkbox"
                  name="masterClass"
                  id="masterClass"
                  className={style.subcat__checkbox}
                  onClick={() => {
                    filterBySubcategory(
                      "masterClass"
                    );
                    // checkboxHandle('masterClass');
                  }}
                  defaultChecked={subcategories.masterClass}
                />
                <label htmlFor="masterClass" className={style.subcat__name}>
                  Мастер-классы
                </label>
              </div>
              <hr />

              <div className={style.subcat}>
                <input
                  type="checkbox"
                  name="educationOthers"
                  id="educationOthers"
                  className={style.subcat__checkbox}
                  onClick={() => {
                    checkboxHandle('educationOthers')
                  }}
                  defaultChecked={subcategories.educationOthers}
                />
                <label htmlFor="educationOthers" className={style.subcat__name}>
                  Другое
                </label>
              </div>
              <hr />

            </div>
          </div>
        )
      }

      {/* // todo Театр */}
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
            Вечеринки
          </div>
        </div>
        {
          selectTheatre
            ? (
              <div onClick={dropDownListTheatre} className={style.category__arrow}>
                <img
                  src={arrowBlackUpPng}
                  alt="arrow"
                  className={style.icon}
                  name="cat_theatre"
                  id="cat_theatre"
                />
              </div>
            )
            : (
              <div onClick={dropDownListTheatre} className={style.category__arrow}>
                <img
                  src={arrowBlackDownPng}
                  alt="arrow"
                  className={style.icon}
                  name="cat_theatre"
                  id="cat_theatre"
                />
              </div>
            )
        }

      </div>
      {
        selectTheatre && (
          <div className={style.subcats__container}>
            <div className={style.subcats}>
              <div className={style.subcat}>
                <input
                  type="checkbox"
                  name="dances"
                  id="dances"
                  className={style.subcat__checkbox}
                  onClick={() => checkboxHandle('dances')}
                  defaultChecked={subcategories.dances}
                />
                <label htmlFor="dances" className={style.subcat__name}>
                  Танцевальные
                </label>
              </div>
              <hr />

              <div className={style.subcat}>
                <input
                  type="checkbox"
                  name="concerts"
                  id="concerts"
                  className={style.subcat__checkbox}
                  onClick={() => checkboxHandle('concerts')}
                  defaultChecked={subcategories.concerts}
                />
                <label htmlFor="concerts" className={style.subcat__name}>
                  Концерты
                </label>
              </div>
              <hr />

              <div className={style.subcat}>
                <input
                  type="checkbox"
                  name="adults"
                  id="adults"
                  className={style.subcat__checkbox}
                  onClick={() => checkboxHandle('adults')}
                  defaultChecked={subcategories.adults}
                />
                <label htmlFor="adults" className={style.subcat__name}>
                  18 +
                </label>
              </div>
            </div>
          </div>
        )
      }

      {/* // ! Концерты */}
      <div className={style.category}>
        <div className={style.category__left}>
          <div className={style.category__img}>
            <img
              src={concertPNG}
              alt="favorites"
              className={style.icon}
              name="cat_movie"
              id="cat_movie"
              onClick={filterByCategory}
            />
            {/* настройки как для чекбокса */}
          </div>

          <div className={style.category__name} htmlFor="cat_movie">
            Бары
          </div>
        </div>
        {
          selectConcert
            ? (
              <div onClick={dropDownListConcert} className={style.category__arrow}>
                <img
                  src={arrowBlackUpPng}
                  alt="arrow"
                  className={style.icon}
                  name="cat_movie"
                  id="cat_movie"
                />
              </div>
            )
            : (
              <div onClick={dropDownListConcert} className={style.category__arrow}>
                <img
                  src={arrowBlackDownPng}
                  alt="arrow"
                  className={style.icon}
                  name="cat_movie"
                  id="cat_movie"
                />
              </div>
            )
        }
      </div>

      {
        selectConcert && (
          <div name="cat_movie" className={style.subcats__container}>
            <div className={style.subcats}>

              <div className={style.subcat}>
                <input
                  type="checkbox"
                  name="barCinema"
                  id="barCinema"
                  className={style.subcat__checkbox}
                  onClick={() => {
                    filterBySubcategory(
                      
                      "lections"
                    );
                    checkboxHandle('barCinema');
                  }}
                  defaultChecked={subcategories.barCinema}
                />
                <label htmlFor="barCinema" className={style.subcat__name}>
                  Кинопоказы
                </label>
              </div>
              <hr />

              <div className={style.subcat}>
                <input
                  type="checkbox"
                  name="barLections"
                  id="barLections"
                  className={style.subcat__checkbox}
                  onClick={() => {
                    filterBySubcategory(
                      
                      "masterClass"
                    );
                    checkboxHandle('barLections');
                  }}
                  defaultChecked={subcategories.barLections}
                />
                <label htmlFor="barLections" className={style.subcat__name}>
                  Лекции
                </label>
              </div>
              <hr />

              <div className={style.subcat}>
                <input
                  type="checkbox"
                  name="degustations"
                  id="degustations"
                  className={style.subcat__checkbox}
                  onClick={() => {
                    checkboxHandle('degustations')
                  }}
                  defaultChecked={subcategories.degustations}
                />
                <label htmlFor="degustations" className={style.subcat__name}>
                  Дегустации
                </label>
              </div>
              <hr />

            </div>
          </div>
        )
      }

    </div>
  );
}

export default Main;
