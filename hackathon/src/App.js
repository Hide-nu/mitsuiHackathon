import './App.css';
import Webcam from "react-webcam";
import 'aframe';
import {Entity, Scene} from 'aframe-react';

function App() {
  const videoConstraints = {
    facingMode: { exact: "environment" }
  };
  return (
    <div className="relative w-full h-screen">
      <Webcam className="absolute w-full h-screen top-0 left-0"/>
      <Scene>
        <Entity
          geometry={{ primitive: 'box' }}
          material={{ color: 'red' }}
          position={{ x: 0, y: 0, z: -5 }}
          rotation={{ x: 0, y: 45, z: 45 }}
          scale={{ x: 2, y: 2, z: 2 }}
          className="bg-transparent"
        />
      </Scene>
    </div>
  );
}

export default App;
