import 'aframe';
import { useState, useEffect, useRef, useCallback } from 'react';
import Button from '@mui/material/Button';

const ShootPage = () => {
  // const [lat, setLat] = useState(0.00);
  // const [lon, setLon] = useState(0.00);
  // const success = (pos) => {
  //   console.log(pos)
  //   setLat(pos.coords.latitude)
  //   setLon(pos.coords.longitude)
  // }
  // const error = useCallback((e) => console.error(e),[]);

  // useEffect(() => {
  //   window.AFRAME.registerComponent('gpsPosition', {
  //     init: function(){
  //       navigator.geolocation.getCurrentPosition(success, error);
  //       console.log("called");
  //       const gpsPosition = this.el.sceneEl;
  //       gpsPosition.addEventListener('ggps-entity-place-update-positon', (event) => {
  //         console.log("called gps init")
  //         setLat(event.detail.position.latitude)
  //         setLon(event.detail.position.longitude)
  //       });
  //     }
  //   });
  //   document.querySelector('a-text').setAttribute('gpsPosition', true);
  // },[])
  // console.log(lon)
  return (
     <div>
        {/*<Button color="primary" size="large">{lon} {lon}</Button>
      <div>
      <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;"
      >
         <a-box
          material="color: red"
          gps-entity-place="latitude: 35.687977; longitude: 139.7723483;"
          scale="30 30 30"
        ></a-box>
        <a-box
          material="color: red"
          gps-entity-place={`latitude: ${lat}; longitude: ${lon};`}
          scale="30 30 30"
        ></a-box>
        <a-text
        value="This content will always face you."
        look-at="[gps-camera]"
        scale="50 50 50"
        position="0 50 0"
        gps-entity-place={`latitude: ${lat}; longitude: ${lon};`}
      ></a-text>
        <a-camera gps-camera="minDistance:30; maxDistance:100 zoom:0.5" rotation-reader> </a-camera>
      </a-scene>
  </div>*/}
     </div>
  )
}

export default ShootPage;