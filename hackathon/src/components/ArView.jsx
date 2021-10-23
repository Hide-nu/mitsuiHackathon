import { useState, useEffect} from "react"

export const ArView = () => {
  const [alpha, setAlpha] = useState(0);
  const [beta, setBeta] = useState(0);
  const [gamma, setGamma] = useState(0);
  const deviceMotionRequest = () => {
    if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            window.addEventListener("deviceorientation", (event) => {
              if (!event.accelerationIncludingGravity) {
                alert('event.accelerationIncludingGravity is null');
                return;
              }
              setAlpha(event.alpha)
              setBeta(event.beta)
              setGamma(event.gamma)
            })
          }
        })
        .catch(console.error);
    } else {
      window.addEventListener("deviceorientation", (event) => {
        setAlpha(event.alpha)
        setBeta(event.beta)
        setGamma(event.gamma)
      })
  
    }
  }
  useEffect(() => {
    deviceMotionRequest()
  },[])
  return (
    <div>
      <div>{!DeviceMotionEvent.requestPermission}</div>
      <span>{alpha}</span>
      <span>{beta}</span>
      <span>{gamma}</span>
    </div>
  )
}
