import { QrScan } from "../../components/QrScan";

const QrCodePage = () => {
  return (
    <div className="w-11/12 mx-auto">
    <h1 className="text-lg fonr-bold text-blue-800">ミヤシタパーク内のQRコードを探せ！</h1>
    <div className=""></div>
    <QrScan />
    </div>
  )
}

export default QrCodePage;