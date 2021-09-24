import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import styles from './AddEvent.module.css';

function AddEvent() {
  const dispatch = useDispatch()
  const renderNav = useSelector(store => store.navigationReducer.renderNav)
  const [locations, setLocations] = useState([]);
  const [sessionUserId, setsessionUserId] = useState(null);

  useEffect(() => {
    dispatch({ type: 'DEL_NAV' })
    fetch(`${process.env.REACT_APP_SERVER_URL}/getLocation`, {
      credentials: 'include',
    })
      .then((response) => response.json())
      .then(data => {
        setLocations(data.location);
        setsessionUserId(data.userId);
      })
      .catch((err) => err.message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addEventHandler(e) {
    e.preventDefault();

    const body = {
      LocationId: e.target.locationSelect.value,
      AdminId: sessionUserId,
      title: e.target.title.value,
      description: e.target.description.value,
      subcategory: e.target.subcategory.value,
      price: e.target.price.value,
      startTime: e.target.startTime.value,
      endTime: e.target.endTime.value,
      doorsOpen: e.target.doorsOpen.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      linkToRegister: e.target.linkToRegister.value,
      linkToBuy: e.target.linkToBuy.value,
      linkToEvent: e.target.linkToEvent.value,
      url: [
        e.target.url1.value,
        e.target.url2.value,
        e.target.url3.value,
        e.target.url4.value,
        e.target.url5.value,
        e.target.url6.value,
      ],
    };

    // console.log('body', body);

    fetch(`${process.env.REACT_APP_SERVER_URL}/addEvent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ body }),
    })
      .then((response) => response.json())
      .then(data => alert(data.message))
      .catch((err) => err.message);
  };

  return (
    <div className={styles.allwrapper}>
      <form onSubmit={addEventHandler}>
        <h2>AddEvent</h2>
        <div className={styles.wrapper}>
          <div className={styles.wrapp}>

            <b>Выбор места проведения события</b><br />
            <select name='locationSelect'>
              <option
                key={'default'}
                defaultChecked={true}
              >
                Название места
              </option>
              {
                locations && locations.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                  >
                    {item.title} - {item.type}
                  </option>
                ))
              }
            </select><br /><br />
            <b>Название события (title):</b>
            <input type='text' name='title' placeholder='Северный флот'/> <br />
            Описание события (description):
            <textarea name='description' placeholder='Описание'></textarea> <br />
            Подкатегория (subcategory):
            <select name='subcategory'>
              <option value='Лекции'>Обучение - Лекции</option>
              <option value='Другое'>Обучение - Другое</option>
              <option value='Мастер-классы'>Обучение - Мастер-классы</option>
              <option value='Танцевальные'>Вечеринки - Танцевальные</option>
              <option value='Концерты'>Вечеринки - Концерты</option>
              <option value='18 +'>Вечеринки - 18 +</option>
              <option value='Кинопоказы'>Бары - Кинопоказы</option>
              <option value='Лекции'>Бары - Лекции</option>
              <option value='Дегустации'>Бары - Дегустации</option>
            </select>{' '}
            <br />
            Цена события (price):
            <input type='text' name='price'  placeholder='от 1700 рублей ли "бесплатно"'/> <br />
            </div>
            <div className={styles.wrapp}>

              Время начала (startTime):
              <input type='text' name='startTime'  placeholder=''/> <br />
              Время окончания (endTime):
              <input type='text' name='endTime' /> <br />
              Двери открыты до (для концертов) (doorsOpen):
              <input type='text' name='doorsOpen' /> <br />
              Дата начала (startDate):
              <input type='text' name='startDate'  placeholder='2021-09-24'/> <br />
              Дата окончания (endDate):
              <input type='text' name='endDate' placeholder='2021-09-24' /> <br />
              Ссылка на регистрацию (linkToRegister):
              <input type='text' name='linkToRegister' /> <br />
              Ссылка на покупку билета (linkToBuy):
              <input type='text' name='linkToBuy' /> <br />
              Ссылка на событие (linkToEvent):
              <input type='text' name='linkToEvent' /> <br />
            
          </div>
          <div className={styles.multer}>
            {/* фото: ТУТ БУДЕТ МУЛЬТЕР <br /> */}
            Фото: <br />
            <input type='text' name='url1' />
            <input type='text' name='url2' />
            <input type='text' name='url3' />
            <input type='text' name='url4' />
            <input type='text' name='url5' />
            <input type='text' name='url6' />
            {/* <p>
              ТУТ БУДУТ ВСЕ СОБЫТИЯ В ЭТОМ МЕСТЕ, ЧТОБЫ НЕ ОШИБИТЬСЯ И НЕ ДОБАВИТЬ ДВА
              ОДИНАКОВЫХ СОБЫТИЯ
            </p> */}
            <br />
          </div>
        </div>
        <button> Сохранить </button>
      </form>
    </div>
  );
}

export default AddEvent;
