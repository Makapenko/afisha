import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './PlaceInfo.module.css';
import mapSvg from '../../icons/navigation/map.svg';

function PlaceInfo(props) {
  const { id } = useParams();
  const { locations } = useSelector((store) => store.eventsReducer);
  const location = locations.find(el => el.id === +id)
  console.log("location", location.LocationPhotos[0].url);
  const history = useHistory();

  return (

    <div className={style.globalContainer}>
      <div className={style.cardContainer}>
        <div onClick={() => history.goBack()} className={style.closeButton}>
          &#215;
        </div>
        <div className={style.cardImageDiv}>
          <img className={style.cardImage} src={`http://localhost:3001${location.LocationPhotos[0].url}`} alt={location.title} />
          {/* <img src={favoritesCardSvg} className={style.icon} alt="favorites" /> */}
          {/* Это сердечко для лайка на картинке. Реализацию временно отложили. Пусть полежит здесь, чтобы не забыть. */}
        </div>
        <div className={style.subMenuContainer}>
          <div className={style.infoBlock}>
            <div className={style.infoBlock__locationTitle}>«{location.title}»</div>
            <div className={style.infoBlock__locationType}>{location.type}</div>
            <div className={style.infoBlock__locationAddress}>{location.address}</div>
          </div>
          <div className={style.buttonsBlock}>

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
            О месте
          </div>
          <div className={style.eventInfoContainer__description}>
            {location.description}
          </div>
        </div>
      </div>
    </div>




    // <div className="flex column jus-center align-center" >
    //   <h2>{location.title}</h2>
    //   <p>{location.title}</p>
    //   <p>{location.address}</p>
    //   <p>{location.type}</p>
    //   <img src={location.urlImg1} alt="" />
    //   <button onClick={() => history.goBack()} className="margin2 padding2">Назад</button>
    // </div>
  );
}

export default PlaceInfo;
