import React, { useEffect } from "react";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import style from "./Main.module.css";

import moviePng from "../../icons/filters/1movie.png";
import { useState } from "react";


function Main() {
  const dispatch = useDispatch()

  const events = useSelector(store => store.eventsReducer.events)

  useEffect(() => {
    fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(data => dispatch({
      type: 'INIT_ALL',
      payload: data
    }))
  },[dispatch])

  function selected(e) {
    // console.log('events', e.target.name);
    // console.log(e.target.value);
    console.log('target',e.target.value);
    console.log(1);
    console.log(1);
    console.log(1);
    console.log(1);
    console.log(1);
    console.log(1);
    const sub = e.target.name
    // if(e.target.value=='on'){
      if(e.target.value==='on'){
      dispatch({
        type:'ADD_EVENT',
        payload: sub
      })
    } else {
      dispatch({
        type:"DELETE_EVENT",
        payload: sub
      })
    }
  }



  // const [checked, setChecked] =useState(nptVal.current.value)
  // const subcategory = useSelector((store) => 
  //   store.eventsReducer.events
  //   )
  //   console.log(subcategory);

  // function filterWideRelease() {
  //   setChecked(!checked)
  //   console.log(nptVal.current.value);
  //   // console.log(subcategory);
  //   // setState(!state);
  //   // if (state) {
  //   //   fetch("http://localhost:3001/")
  //   //     .then((res) => res.json())
  //   //     .then((data) =>
  //   //       dispatch({
  //   //         type: a,
  //   //         payload: data,
  //   //       })
  //   //     );
  //   // }
  // } 
  //   function delWide(b) {
  //     dispatch({
  //       type: b,
  //       payload: arrayToSend
  //     });
  //   }



  // // const subcategory = 
    
  // function test (num) {
  //   const a = 3;
  //   const b = num + a
  //   console.log(b);
  //   return b
    
  //   // console.log(event.target.value);
  // }
  // // function addEvent () {
  // //   dispatch({
  // //     type: 'ADD_EVENT',
  // //     payload: subcategory
  // //   })
  // // }
  // Рабочая версия

  // const arrayToSend = useSelector((store) => store.eventsReducer.events);
  // const abc = [];
  // arrayToSend.map((el) => {
  //   return abc.push(el.id);
  // });

  // const [state, setState] = useState(true);
    
  
  // function filterWideRelease(a, b) {
  //   setState(!state);
  //   if (state) {
  //     fetch("http://localhost:3001/")
  //       .then((res) => res.json())
  //       .then((data) =>
  //         dispatch({
  //           type: a,
  //           payload: data,
  //         })
  //       );
  //   } else {
  //     dispatch({
  //       type: b
  //       // payload: arrayToSend
  //     });
  //   }
  // }


  return (
    <div className={style.container}>
      <div className={style.category}>
        <div className={style.category__left}>
          <div className={style.category__img}>
            <img
              src={moviePng}
              alt="favorites"
              className={style.icon}
              name="cat_movie"
              id="cat_movie"
            />
          </div>

          <div className={style.category__name} for="cat_movie">
            Кино
          </div>
        </div>
        <div className={style.category__arrow}>\/</div>
      </div>
      <div className={style.subcats__container}>
        <div className={style.subcats}>
          <div className={style.subcat}>
            <input
              type="checkbox"
              name="filmWideRelease"
              id="filmWideRelease"
              className={style.subcat__checkbox}
              // onChange={
              //   test(3)
              // }
              // value='fuck'
              // onClick={() => filterWideRelease('WIDERELEASE','DEL_WIDERELEASE')}
            />
            <label for="filmWideRelease" className={style.subcat__name}>
              Широкий прокат
            </label>
          </div>
          <hr />
          <div className={style.subcat}>
            <input
              type="checkbox"
              name="Ограниченый прокат"
              id="filmLimitedRelease"
              className={style.subcat__checkbox}
              onChange={selected}
              // onClick={filterWideRelease}
            />
            <label for="filmLimitedRelease" className={style.subcat__name}>
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
            <label for="filmBar" className={style.subcat__name}>
              Кинопоказы в барах
            </label>
          </div>
          <hr />
          <div className={style.subcat}>
            <input
              type="checkbox"
              name="Рок"
              id="filmOther"
              className={style.subcat__checkbox}
            />
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
