import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getAllTripsForMap } from '../../data/trips';
import styles from './MyMap.module.css';
import LocationIcon from '../icons/LocationIcon';

const MyMap = () => {
  const [viewport, setViewport] = useState({
    latitude: -21.1307379,
    longitude: 55.5364801,
    zoom: 10,
  });

  const [chosenPopup, setChosenPopup] = useState(null);

  return (
    <ReactMapGL
      mapStyle={{
        version: 8,
        sources: {
          'raster-tiles': {
            type: 'raster',
            tiles: ['https://mapserver.mapy.cz/base-m/{z}-{x}-{y}'],
            tileSize: 256,
            attribution:
              'Mapové podklady od <a target="_top" rel="noopener" href="https://mapy.cz/">Seznam.cz</a> a <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>.',
          },
        },
        layers: [
          {
            id: 'simple-tiles',
            type: 'raster',
            source: 'raster-tiles',
            minzoom: 0,
            maxzoom: 20,
          },
        ],
      }}
      width="100%"
      height={1000}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <GeolocateControl
        style={{
          right: 10,
          top: 10,
        }}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      />
      {getAllTripsForMap().map((place) => (
        <React.Fragment key={place.id}>
          <Marker
            latitude={place.lat}
            longitude={place.long}
            offsetLeft={-25}
            offsetTop={-50}
          >
            <img
              src={place.icon}
              alt={place.title}
              className={styles.img}
              onClick={() => {
                setChosenPopup(place.id);
              }}
            />
          </Marker>
          {chosenPopup === place.id ? (
            <Popup
              className="popup"
              latitude={place.lat}
              longitude={place.long}
              offsetTop={-60}
              onClose={() => setChosenPopup(null)}
            >
              <p>{place.title}</p>
              <p>{place.about}</p>

              {/* <img src={place.featuredImage} className="imgPopup">
                {/* <Link href="/vylety"> </Link>     </img> */}

              {/* <Image src="/vercel.svg" alt="Vercel" width={50} height={50} /> */}
            </Popup>
          ) : null}
        </React.Fragment>
      ))}
    </ReactMapGL>
  );
};

export default MyMap;
