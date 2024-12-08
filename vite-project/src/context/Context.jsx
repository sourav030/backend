import React, { createContext, useEffect, useState } from 'react';

// Create a context
export const MyContext = createContext("");

// Create a provider component
const Context = ({ children }) => {
  const [token , setToken]=useState('')

  return (
    <MyContext.Provider value={{token , setToken}}>
      {children} {/* Render child components */}
    </MyContext.Provider>
  );
};

export default Context;

