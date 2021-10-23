import { useState, useEffect} from "react"

export const ArView = () => {
  const [accelerationX, setAccelerationX] = useState(0);
  const [accelerationY, setAccelerationY] = useState(0);
  const [accelerationZ, setAccelerationZ] = useState(0);
  console.log(!DeviceMotionEvent.requestPermission)
  const deviceMotionRequest = () => {
    if (DeviceMotionEvent.requestPermission) {
      DeviceMotionEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            window.addEventListener("devicemotion", (event) => {
              if (!event.accelerationIncludingGravity) {
                alert('event.accelerationIncludingGravity is null');
                return;
              }
              setAccelerationX(event.accelerationIncludingGravity.x)
              setAccelerationY(event.accelerationIncludingGravity.y)
              setAccelerationZ(event.accelerationIncludingGravity.z)
            })
          }
        })
        .catch(console.error);
    } else {
      alert('DeviceMotionEvent.requestPermission is not found')
    }
  }
  useEffect(() => {
    deviceMotionRequest()
  },[])
  return (
    <div>
      <div>{!DeviceMotionEvent.requestPermission}</div>
      <span>{accelerationX}</span>
      <span>{accelerationY}</span>
      <span>{accelerationZ}</span>
    </div>
  )
}
