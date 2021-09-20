import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
  Clusterer,
} from "react-yandex-maps";
import { useState } from "react";
import points from "./points";
import myIcon2 from "../iconsForYMaps/quests.png";

function YandexMap() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const mapState = {
    center: [lat, lng],
    zoom: 11.5,
  };
  
  const getPointData = (title, desc, id) => {
    return {
      balloonContentHeader: title,
      balloonContentBody: desc,
      balloonContentFooter: `<a  style='color: green' href='/events/${id}'> go </a>`,
      clusterCaption: title,
    };
  };
// Когда будеь готов сам компонент (из раздела со списком сообытий), можно попробовать его html прокинуть в baloonContentBody, стили все накинуть инлайново
  const getPointOptions = () => {
    return {
      preset: "islands#violetIcon",
      iconImageHref: myIcon2,
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
      <div>
        <p>
          {" "}
          Latitude: <span id="latitude">{lat}</span>
          <br />
          Longitude: <span id="longitude">{lng}</span>
        </p>
      </div>
      <YMaps query={{ lang: "ru_RU", load: "package.full" }}>
        <div>
          <Map state={mapState} width={500} heigth={400}>
            <ZoomControl options={{ float: "left" }} />
            <Placemark
              geometry={[lat, lng]}
              options={{
                preset: "islands#violetRunIcon",
                iconImageHref: "islands#violetRunIcon",
                iconImageSize: [5, 5],
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
              {points.map((coordinates) => (
                <Placemark
                  key={coordinates.id}
                  geometry={coordinates.coords}
                  properties={getPointData(coordinates.desc, coordinates.title, coordinates.id)}
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
