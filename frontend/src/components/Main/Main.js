
import React, { useEffect } from "react";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import style from "./Main.module.css";

import moviePng from "../../icons/filters/1movie.png";
import { useState } from "react";


function Main() {
  const dispatch = useDispatch()
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

  // const dispatch = useDispatch()
  

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

  // const arrayToSend = useSelector(store => store.eventsReducer.events)
  // const abc = [];
  // arrayToSend.map(el => {
  //   return abc.push(el.id)
  // })

  // let val={ subcategory: "Рок", value: false }

 

  // function filterWideRelease() {

  //   console.log(state);
  //   setState(!state)
  //   console.log(state);


  //   if (state) {
  //     fetch('http://localhost:3001/')
  //       .then(res => res.json())
  //       .then(data => dispatch({
  //         type: 'INIT_WIDERELEASE',
  //         payload: data
  //       }))
  //   } else {
  //     console.log("!!!!!!!!!!!!!!!!");
  //     const [state, setState] = useState(true);
  //     const dispatch = useDispatch()
const [all,setAll]=useState(null)
const [arr,setArr]=useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])

  function allFunc(){
    filterWideRelease('WIDERELEASE', 'DEL_WIDERELEASE', 'Ограниченный прокат', 1);
    allFunc1()     

  }
  function allFunc1(){
    filterWideRelease('WIDERELEASE', 'DEL_WIDERELEASE', 'Рок', 0);
  }
    function filterWideRelease(a, b, c, f) {
    console.log(arr[f]);
    if (arr[f]==0) {
      console.log("888888888888");
      let newArr = [...arr];
      newArr[f] =1
      // console.log(newArr,"-----------");
    setArr(newArr)
    console.log(arr[f]);
      // fetch('http://localhost:3001/')
      // .then(res => res.json())
      // .then(data =>
         dispatch({
            type: a,
            payload: {all, c}
          })
      // );
    } else if(arr[f]==1){
      console.log("9999999999");
      console.log(arr);
      let newArr = [...arr];
      newArr[f] =0
    setArr(newArr)

     dispatch({
        type: b,
        payload: c
        // payload: arrayToSend
      });
    }
    console.log(arr,"&&&&&&&&&&&&");

  }
  useEffect(() => {
    fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(data => setAll(data)
      // dispatch({
    //   type: 'INIT_ALL',
    //   payload: data
    // }))
    )
  },[])

  return (
    <div className={style.container}>
      <div className={style.category}>
        <div className={style.category__left}>
          <div className={style.category__img}>
            {/* настройки как для чекбокса */}
            <img
              src={moviePng}
              alt="favorites"
              className={style.icon}
              name="cat_movie"
              id="cat_movie"
              onClick={()=>{allFunc();}
                
              
              }
              // onClick="filterWideRelease('WIDERELEASE', 'DEL_WIDERELEASE', 'Ограниченный прокат', 1);
              //   filterWideRelease('WIDERELEASE', 'DEL_WIDERELEASE', 'Рок', 0);"
                
              
              

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
              // onClick={() => {filterWideRelease('WIDERELEASE', 'DEL_WIDERELEASE', 'Рок', state);    setState(!state);
              onClick={() => filterWideRelease('WIDERELEASE', 'DEL_WIDERELEASE', 'Рок', 0)
            }           
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
              // onClick={() => {filterWideRelease('WIDERELEASE', 'DEL_WIDERELEASE', 'Ограниченный прокат', state1);setState1(!state1)}}
              onClick={() => filterWideRelease('WIDERELEASE', 'DEL_WIDERELEASE', 'Ограниченный прокат', 1)}
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
