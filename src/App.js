import React, { useState, useEffect, useContext } from 'react';
import HomeScreen from './UI_Components/HomeScreen';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from './Context/context';
import { getValueFomName } from './Utils/helpers';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function App() {
  const [state, dispatch] = useContext(Context);
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
        backgroundImage: `url("${getValueFomName(
          state.settings,
          'background'
        )}")`,
        width: windowDimensions.width,
        height: windowDimensions.height,
      }}
    >
      <HomeScreen />
    </div>
  );
}

export default App;
