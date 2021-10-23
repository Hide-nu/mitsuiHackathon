import React, { useEffect, useState } from "react";
import { BroadcastChannel } from 'broadcast-channel';
import "./styles.css";

const Broadcast = () => {
  const [status, setStatus] = useState("");
  const channel = new BroadcastChannel("gps_sync");

  // GPSの変化に応じて関数実行
  const syncItUp = () => {
    // ここでGPSを送る
    channel.postMessage('');
    setStatus(`Sent "sync" message`);
  };

  useEffect(() => {
    // ここで GPS を受ける
    channel.onmessage = ev => {
      // ここでobject 生成
      setStatus(`Received "sync" message`);
    };

    return () => {
      channel.close();
    };
  }, [channel]);

  return (
    <div className="broad">
      <button className="btn" onClick={syncItUp}>
        Sync It Up!
      </button>
      <div>{status}</div>
    </div>
  );
};


export default Broadcast;