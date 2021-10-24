import 'aframe';
import { useState, useEffect, useRef, useCallback } from 'react';
import Button from '@mui/material/Button';

const ShootPage = () => {
  const [lat, setLat] = useState(0.00);
  const [lon, setLon] = useState(0.00);
  const [distance, setDistance] = useState(0)
  const success = (pos) => {
    console.log(pos)
    setLat(pos.coords.latitude)
    setLon(pos.coords.longitude)
  }
  const error = useCallback((e) => console.error(e),[]);
  // navigator.geolocation.getCurrentPosition(success, error);
  // window.AFRAME.registerComponent('gps-position', {
  //   init: function(){
  //     console.log("called");
  //     const gpsPosition = this.el;
  //     gpsPosition.addEventListener('gps-entity-place-update-positon', (event) => {
  //       console.log(`あと${event.detail.distance}m`)
  //       document.getElementById('debug').textContent = `あと${event.detail.distance}m`;
  //       gpsPosition.setAttribute('value', gpsPosition.getAttribute('distanceMsg') + ' left');
  //       setLat(event.detail.position.latitude)
  //       setLon(event.detail.position.longitude)
  //     });
  //     document.querySelector('a-text').setAttribute('gps-position', '');
  //   }});

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(success, error);
  //   window.AFRAME.registerComponent('gps-position', {
  //     init: function(){
  //       console.log("called");
  //       const gpsPosition = this.el;
  //       gpsPosition.addEventListener('gps-entity-place-update-positon', (event) => {
  //         console.log(`あと${event.detail.distance}m`)
  //         setDistance(event.detail.distance)
  //         setLat(event.detail.position.latitude)
  //         setLon(event.detail.position.longitude)
  //       });
  //     }
  //   });
  //   document.querySelector('a-text').setAttribute('gps-position', '');

  // },[])
  console.log(lon)
  return (
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
    >
      <a-box
        material="color: red"
        gps-entity-place="latitude: 35.6877892; longitude: 139.7723572"
        scale="15 15 15"
      ></a-box>
      <a-camera gps-camera rotation-reader> </a-camera>
    </a-scene>
  )
}

export default ShootPage;