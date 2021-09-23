import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
  Clusterer,
} from "react-yandex-maps";
import { useState } from "react";
// import points from "./points";
import myIcon from "../../icons/iconsForYMaps/defaultIcon.png";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import style from './ymaps.module.css'

function YandexMap() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const events = useSelector((state) => state.eventsReducer.events);

  const eventsIdArr = [];
  events.map((el) => eventsIdArr.push(el.id));
  const eventsTitleArr = [];
  events.map((el) => eventsTitleArr.push(el.title));
  const eventsDescArr = [];
  events.map((el) => eventsDescArr.push(el.description));

  const eventsProperties = [];
  for (let i = 0; i < eventsIdArr.length; i += 1) {
    const a = eventsIdArr[i];
    const b = eventsTitleArr[i];
    const c = eventsDescArr[i];
    eventsProperties.push(a, b, c);
  }

  const locations = useSelector((state) => state.eventsReducer.locations);

  const coordsArrX = [];
  locations.map((el) => coordsArrX.push(el.coordX));
  const coordsArrY = [];
  locations.map((el) => coordsArrY.push(el.coordY));

  const coordsForMap = [];
  for (let i = 0; i < coordsArrX.length; i += 1) {
    const a = coordsArrX[i];
    const b = coordsArrY[i];
    coordsForMap.push(a, b);
  }

  // const h =['../iconsForYMaps/quests.png', '../iconsForYMaps/bars.png', '../iconsForYMaps/bars.png']


  const arr =[]
  events.map(el => 
    arr.push({
      id:el.id,
      title: el.title,
      desc: el.description,
      coordX: coordsForMap[el.LocationId*2-2],
      coordY: coordsForMap[el.LocationId*2-1]
    })
  )
    console.log(arr);
  const mapState = {
    center: [lat, lng],
    zoom: 11.5,
  };

  const getPointData = (title, desc, id) => {
    return {
      balloonContentHeader: title,
      balloonContentBody: desc,
      balloonContentFooter: `<a  style='color: violet, font-weight: 900' href='/events/${id}'> ${title} </a>`,
      clusterCaption: `<p style='color: voilet, font-weight: 900' >${title}</p>`,
    };
  };
  // Когда будеь готов сам компонент (из раздела со списком сообытий), можно попробовать его html прокинуть в baloonContentBody, стили все накинуть инлайново
  const getPointOptions = () => {
    return {
      preset: "islands#violetIcon",
      iconImageHref: myIcon,
      iconImageSize: [35, 45],
      iconLayout: "default#image",
    };
  };

  if ("geolocation" in navigator) {
    console.log("Geolocation available");
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  } else {
    console.log("Geolocation not available");
  }

  return (
    <>
      <YMaps query={{ lang: "ru_RU", load: "package.full" }}>
        <div className={style.ymap}>
          <Map state={mapState} className={style.ymap}>
            <ZoomControl options={{ float: "left" }} />
            <Placemark
              geometry={[lat, lng]}
              options={{
                preset: "islands#violetRunIcon",
                iconImageHref: "islands#violetRunIcon",
                iconImageSize: [5, 5]
              }}
            />
            <Clusterer
              options={{
                preset: "islands#invertedVioletClusterIcons",
                groupByCoordinates: false,
                clusterDisableClickZoom: true,
                clusterHideIconOnBalloonOpen: false,
                geoObjectHideIconOnBalloonOpen: false,
              }}
            >
              {arr.map((el) => (
                <Placemark
                  key={el.id}
                  geometry={[el.coordX, el.coordY]}
                  properties={getPointData(
                    el.title,
                    el.desc,
                    el.id
                  )}
                  options={getPointOptions()}
                />
              ))}
            </Clusterer>
          </Map>
        </div>
      </YMaps>
    </>
  );
}

export default YandexMap;
