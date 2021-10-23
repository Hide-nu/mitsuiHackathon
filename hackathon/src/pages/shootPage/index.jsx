import 'aframe';
import { useState, useEffect } from 'react';

const ShootPage = () => {
  const [lat, setLat] = useState(0.00);
  const [lon, setLon] = useState(0.00);
  useEffect(() => {
    window.AFRAME.registerComponent('gpsPosition', {
      init: function(){
        console.log("called");
      },
      update: function(){
        const gpsPosition = this.el;
        gpsPosition.addEventListener('gps-camera-update-positon', (event) => {
          setLat(event.detail.position.latitude)
          setLon(event.detail.position.longtitude)
        });
      }
    })
  },[])
  console.log(lat)
  return (
    <div>
      <div>{lat} {lon} </div>
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
    >
      <a-box
        material="color: red"
        gps-entity-place="latitude: <add-your-latitude>; longitude: <add-your-longitude>;"
        scale="15 15 15"
      ></a-box>
      <a-text
        gpsPosition
        value={lat+lon}
        look-at="[gps-camera]"
        scale="30 30 30"
        position="0 55 0"
        gps-entity-place="latitude: <add-your-latitude>; longitude: <add-your-longitude>;"
      ></a-text>
      <a-camera gps-camera rotation-reader> </a-camera>
    </a-scene>
    </div>
  )
}

export default ShootPage;