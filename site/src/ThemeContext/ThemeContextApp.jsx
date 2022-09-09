import React, { useState, useContext, useRef } from "react";

const ThemeContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};



const ThemeContextApp = ({ children }) => {
  const [scroll, setScroll] = useState(false);
  const [theme, setTheme] = useState("light");
 


  return (
    <ThemeContext.Provider
      value={{
        scroll: [scroll, setScroll],
        theme: [theme, setTheme],
        
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextApp;
