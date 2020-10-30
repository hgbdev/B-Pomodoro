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
          'url("https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
        width: windowDimensions.width,
        height: windowDimensions.height,
      }}
    >
      <HomeScreen />
    </div>
  );
}

export default App;
