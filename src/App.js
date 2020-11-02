import React, { useState, useEffect } from 'react';
import HomeScreen from './UI_Components/HomeScreen';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      className="main-container"
      style={{
        fontFamily: 'Lobster',
        backgroundImage:
          'url("https://i.pinimg.com/originals/85/76/e7/8576e72412abae39b4d2cfb74f81d999.gif")',
        width: windowDimensions.width,
        height: windowDimensions.height,
      }}
    >
      <HomeScreen />
    </div>
  );
}

export default App;
