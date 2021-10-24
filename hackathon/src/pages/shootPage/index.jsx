import 'aframe';
import { useState, useEffect, useRef } from 'react';
// import { io } from 'socket.io-client';
// import { auth } from '../../firebase';
// import { onAuthStateChanged } from "firebase/auth";

const ShootPage = () => {
  const [lat, setLat] = useState(0.00);
  const [lon, setLon] = useState(0.00);
  // const [userId, setUserId] = useState('');

  // const socketRef = useRef();

  // const [message, setMessage] = useState({
  //     type: "dynamic", userId: userId, lat: lat, lon: lon
  // });


  useEffect(() => {
    // socketRef.current = io(process.env.REACT_APP_WS_URL);
    window.AFRAME.registerComponent('gpsPosition', {
      init: function(){
        console.log("called");
        // setMessage({
        //   type: "dynamic",
        //   userId: userId,
        //   lat: lat,
        //   lon: lon
        // });
        // socketRef.current.emit('send', message);
      },
      update: function(){
        const gpsPosition = this.el;
        gpsPosition.addEventListener('gps-camera-update-positon', (event) => {
          setLat(event.detail.position.latitude)
          setLon(event.detail.position.longtitude)

          // serverにsend
          // setMessage({
          //   type: "dynamic",
          //   userId: userId,
          //   lat: lat,
          //   lon: lon
          // });
          // socketRef.current.emit('send', message);
        });
      }
    })

    // user_id
    // const unsubscribed = onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     setUserId(user.id);
    //   };
    // });


    ////////////////////////////
    // socketio
    console.log('Connectinng..');

    // server から broadcastを受ける
    // socketRef.current.on('broadcast', payload => {
    //   console.log('Recieved: ' + payload);
    //   // ここで, payload を使って ARオブジェクトを生成または変更

    // });
    // return () => {
    //   unsubscribed();
    //   console.log('Disconnecting..');
    //   socketRef.current.disconnect();
    // };
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
