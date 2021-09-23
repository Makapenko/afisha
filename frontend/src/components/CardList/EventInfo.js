import React from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './EventInfo.module.css';
// import favoritesCardSvg from '../../icons/favoritesCard.png';
import mapSvg from '../../icons/navigation/map.svg';
function EventInfo(props) {
  const { id } = useParams();
  const { events } = useSelector((store) => store.eventsReducer);
  const { locations } = useSelector((store) => store.eventsReducer);
  const event = events[id - 1]
  console.log(event,'aaa');
  console.log(event.LocationId, 'bbb');
  const location = locations.find(el => el.id === +event.LocationId)
  
  const history = useHistory();
  return (
    <div className={style.globalContainer}>
      <div className={style.cardContainer}>
        <div onClick={() => history.goBack()} className={style.closeButton}>
          &#215;
        </div>
        <div className={style.cardImageDiv}>
        <img className={style.cardImage} src='http://localhost:3001/img/eventsPic/todd.jpg' alt='TODD' />
        {/* <img src={favoritesCardSvg} className={style.icon} alt="favorites" /> */}
        {/* Это сердечко для лайка на картинке. Реализацию временно отложили. Пусть полежит здесь, чтобы не забыть. */}
        </div>
        <div className={style.subMenuContainer}>
          <div className={style.infoBlock}>
            <div className={style.infoBlock__eventTitle}>{event.title}</div>
            <div className={style.infoBlock__eventLocation}>{location.title}</div>
            <div>{event.startDate || "24 сентября"} {event.startTime || "17:00"}</div>
          </div>
          <div className={style.buttonsBlock}>
            <div className={style.buttonsBlock__buttonTickets}>
              Билеты от 1700 &#8381;
              {/* пока стоит заглушка с фиксированной ценой для соответствия макету,
              так как в {event.price} вместо символа рубля &#8381 выводится слово "рублей" */}
            </div>
            <div className={style.buttonsBlock__buttonsRouteContainer}>
            <img src={mapSvg} className={style.buttonsBlock__locationIcon} alt="location icon" />
              <div className={style.buttonsBlock__buttonRoute}>
                Построить маршрут
              </div>
            </div>
          </div>
        </div>
        <div className={style.eventInfoContainer}>
          <div className={style.eventInfoContainer__header}>
            О концерте
          </div>
          <div className={style.eventInfoContainer__description}>
          {event.description}
          </div>
        </div>
        {/* <Link to={`place/${idPlace}`}>{place.title}</Link> */}
        {/* это уже было закомменчено до меня (Алексея) */}
        <p className="padding-2"></p>
        {/* <img className="margin-1" src={event.urlImg1} alt="" />
        <img className="margin-1" src={event.urlImg2} alt="" /> */}
        {/* <button onClick={() => history.goBack()} className="margin2 padding2">Назад</button> */}
        {/* это тоже было закомменчено еще до меня (Алексея)*/}
      </div>
    </div>
  );
}
export default EventInfo;
