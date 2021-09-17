import React from 'react';
import { YMaps, Map, Placemark, ZoomControl, Clusterer } from 'react-yandex-maps';
import { useState } from 'react';
import points from './points.json';

function YandexMap() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const mapState = {
    center: [lat, lng],
    zoom: 13
  }

  const getPointData = index => {
    return {
      balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
      clusterCaption: "placemark <strong>" + index + "</strong>"
    };
  };

  const getPointOptions = () => {
    return {
      preset: "islands#violetIcon"
    };
  };

  if ('geolocation' in navigator) {
    console.log('Geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
      setLat(position.coords.latitude)
      setLng(position.coords.longitude)
    });
  } else {
    console.log('Geolocation not available');
  }

  return (
    <>
    <div>
    <p> Latitude: <span id='latitude'>{lat}</span><br /> 
    Longitude: <span id='longitude'>{lng}</span></p>
    </div>
    <YMaps>
      <div>
      <Map state={mapState} >
      <ZoomControl options={{ float: 'left' }} />
      <Placemark  geometry={[lat, lng]} />
      <Clusterer
            options={{
              preset: "islands#invertedVioletClusterIcons",
              groupByCoordinates: false,
              clusterDisableClickZoom: true,
              clusterHideIconOnBalloonOpen: false,
              geoObjectHideIconOnBalloonOpen: false
            }}
          >
          {points.map((coordinates, idx) => (
              <Placemark
                key={idx}
                geometry={ coordinates }
                properties={getPointData(idx)}
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
