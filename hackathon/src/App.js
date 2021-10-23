import './App.css';
import Webcam from "react-webcam"

function App() {
  const videoConstraints = {
    facingMode: { exact: "environment" }
  };
  return (
    <div>
      <Webcam videoConstraints={videoConstraints}/>
    </div>
  );
}

export default App;
