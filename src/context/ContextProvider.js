// context Provider

import React, { createContext, useRef, useState } from 'react';

export const RakeenContext = createContext();

export const RakeenProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const [showdorpNav, setShowdorpNav] = useState(false);
  const toggleRef = useRef(null);


  const values= {showNav , setShowNav , showdorpNav , setShowdorpNav , toggleRef }

  return (
    <RakeenContext.Provider value={values}>
      {children}
    </RakeenContext.Provider>
  );
};