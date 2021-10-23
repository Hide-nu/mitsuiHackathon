import 'aframe';
import { useState, useEffect, useRef, useCallback } from 'react';
import Button from '@mui/material/Button';

const ShootPage = () => {
  const [lat, setLat] = useState(0.00);
  const [lon, setLon] = useState(0.00);
  const success = useCallback((pos) => {
    console.log(pos)
    setLat(pos.coords.latitude)
    setLon(pos.coords.longtitude)
  }, [lat, lon])
  const error = useCallback((e) => console.error(e),[]);

  useEffect(() => {
    window.AFRAME.registerComponent('gpsPosition', {
      init: function(){
        navigator.geolocation.getCurrentPosition(success, error)
        console.log("called");
        const gpsPosition = this.el.sceneEl;
        gpsPosition.addEventListener('gps-camera-update-positon', (event) => {
          setLat(event.detail.position.latitude)
          setLon(event.detail.position.longtitude)
        });
      },
      update: function(){
        console.log("called update");
        const gpsPosition = this.el.sceneEl;
        gpsPosition.addEventListener('gps-camera-update-positon', (event) => {
          setLat(event.detail.position.latitude)
          setLon(event.detail.position.longtitude)
        });
      }
    });
    document.querySelector('a-entity').setAttribute('gpsPosition', '');
  },[])
  console.log(lon)
  return (
    <div>
      <Button color="primary" size="large">{lat} {lon}</Button>
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
    >
       <a-box
        material="color: red"
        gps-entity-place={`latitude: ${lat}; longitude: ${lon};`}
        scale="30 30 30"
      ></a-box>
      <a-entity
        scale="300 300 300"
        position="0 55 0"
        gps-entity-place={`latitude: ${lat}; longitude: ${lon};`}
      />
      <a-camera gps-camera rotation-reader> </a-camera>
    </a-scene>
    </div>
  )
}

export default ShootPage;