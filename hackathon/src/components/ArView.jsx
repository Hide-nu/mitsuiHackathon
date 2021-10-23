import { useState, useEffect} from "react"

export const ArView = () => {
  const [accelerationX, setAccelerationX] = useState(0);
  const [accelerationY, setAccelerationY] = useState(0);
  const [accelerationZ, setAccelerationZ] = useState(0);

  useEffect(() => {
    window.addEventListener("devicemotion", (event) => {
      console.log(event)
      setAccelerationX(event.acceleration.x)
      setAccelerationY(event.acceleration.y)
      setAccelerationZ(event.acceleration.z)
    })
  },[])
  return (
    <div>
      <span>{accelerationX}</span>
      <span>{accelerationY}</span>
      <span>{accelerationZ}</span>
    </div>
  )
}
