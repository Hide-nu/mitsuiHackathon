import 'aframe';
import {Entity, Scene} from 'aframe-react';
import { useEffect } from 'react';

const ShootPage = () => {
  useEffect(() => {
    console.log("called useEffect")
    const text = document.getElementById('text');
        text.addEventListener('gps-entity-place-update-positon', (event) => {
          console.log("called textevent")
          document.getElementById('debug').textContent = `あと${event.detail.distance}m`;
          text.setAttribute('value', text.getAttribute('distanceMsg') + ' left');
        });

  },[])
  return (
    <div>
    <div id="debug" className="fixed z-50 bg-white p-4 top-0 left-0 block"/>
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
        id="text"
        value=""
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