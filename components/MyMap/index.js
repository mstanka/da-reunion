import React, { useState } from 'react';
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
  WebMercatorViewport,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './MyMap.module.css';
import Link from 'next/link';
import Image from 'next/image';

const applyToArray = (func, array) => func.apply(Math, array);

const getBounds = (markers) => {
  const lat = markers.map((marker) => marker.lat ?? 0);
  const lng = markers.map((marker) => marker.long ?? 0);

  const cornersLngLat = [
    [applyToArray(Math.min, lng), applyToArray(Math.min, lat)],
    [applyToArray(Math.max, lng), applyToArray(Math.max, lat)],
  ];

  const viewport = new WebMercatorViewport({
    width: 800,
    height: 600,
  }).fitBounds(cornersLngLat, { padding: 200 });

  const { longitude, latitude, zoom } = viewport;
  return { longitude, latitude, zoom: zoom + 2 };
};

const MyMap = ({ trips }) => {
  // console.log(trips);
  const [viewport, setViewport] = useState(getBounds(trips));
  // latitude: -21.1307379,
  // longitude: 55.5364801,
  // zoom: 10,
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
      <NavigationControl className={styles.navigation} />
      <GeolocateControl
        className={styles.navigation_geo}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      />

      {trips.map((place) => (
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
              className={styles.marker}
              onClick={() => {
                setChosenPopup(place.id);
              }}
            />
          </Marker>
          {chosenPopup === place.id ? (
            <Popup
              className={styles.popup}
              latitude={place.lat}
              longitude={place.long}
              offsetTop={-60}
              onClose={() => setChosenPopup(null)}
              closeOnClick={false}
            >
              <div className={styles.popup_content}>
                <Link href={`/vylety/${place.id}`}>
                  <a>
                    <div>
                      <h2>{place.title}</h2>
                      <p>{place.about}</p>
                    </div>
                    <Image
                      src={place.featuredImage}
                      className={styles.imgPopup}
                      width={150}
                      height={100}
                    />
                  </a>
                </Link>
              </div>
            </Popup>
          ) : null}
        </React.Fragment>
      ))}
    </ReactMapGL>
  );
};

export default MyMap;
