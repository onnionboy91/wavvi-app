// CallComponent.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Замените на адрес вашего сервера

const CallComponent = () => {
  const [calling, setCalling] = useState(false);
  const [callAccepted, setCallAccepted] = useState(false);

  useEffect(() => {
    socket.on('call', () => {
      setCalling(true);
    });

    socket.on('callAccepted', () => {
      setCallAccepted(true);
    });

    return () => {
      socket.off('call');
      socket.off('callAccepted');
    };
  }, []);

  const handleCall = () => {
    socket.emit('call');
    setCalling(true);
  };

  const handleAcceptCall = () => {
    socket.emit('acceptCall');
    setCallAccepted(true);
  };

  return (
    <div>
      {!calling && !callAccepted && (
        <button onClick={handleCall}>Call</button>
      )}

      {calling && !callAccepted && (
        <div>
          <p>Incoming call...</p>
          <button onClick={handleAcceptCall}>Accept</button>
        </div>
      )}

      {callAccepted && (
        <p>Call accepted!</p>
      )}
    </div>
  );
};

export default CallComponent;
