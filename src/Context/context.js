import React, { createContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';

export const Context = createContext();

const Provider = ({ children }) => {
  const contextValue = useReducer(reducer, initialState);
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Provider;
