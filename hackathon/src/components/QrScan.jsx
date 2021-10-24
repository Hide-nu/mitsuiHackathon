import { useState } from "react";
import QrReader from "react-qr-reader";

export const QrScan = () => {
  const [ result, setResult] = useState("")
  const handleScan = (data) => {
    if(data) {
      setResult(data)
    }
  }
  const handleError = (err) => {
    console.error(err)
  }
  return (
    <>
    <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <p>{result}</p>
    </>
  )
}
