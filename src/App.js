import React, { useState, useEffect } from 'react';
import './index.css';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function App() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/564x/3f/a5/78/3fa57893038a432b098c632a82fef1bb.jpg")',
        backgroundSize: '100%',
        backgroundPosition: 'center',
        margin: 0,
        padding: 0,
        width: windowDimensions.width,
        height: windowDimensions.height,
      }}
    >
      Hello World
    </div>
  );
}

export default App;
