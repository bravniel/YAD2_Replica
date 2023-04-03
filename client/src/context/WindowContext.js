import React, { createContext, useEffect, useState } from 'react';

export const WindowContext = createContext();

const WindowContextProvider = (props) => {
const [windowWidth, setVw] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setVw(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <WindowContext.Provider value={{ windowWidth }}>
      {props.children}
    </WindowContext.Provider>
  );
};

export default WindowContextProvider;