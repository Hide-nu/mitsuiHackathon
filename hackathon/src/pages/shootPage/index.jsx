import Webcam from "react-webcam";
import 'aframe';
import {Entity, Scene} from 'aframe-react';
import { ArView } from "../../components/ArView";

const Shoot = () => {

  const videoConstraints = {
    facingMode: { exact: "environment" }
  };
  return (
    <div className="relative w-full h-screen">
      <ArView />
      <Webcam className="absolute w-full h-full top-0 left-0"/>
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
  )
}

export default Shoot;