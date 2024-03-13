import { createContext, useState } from "react";

export const GeneralContext = createContext({
  darkModeValue: false,
  toggleDarkMode: () => {},
});

export default function GeneralContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // let icon = document.getElementById('toggle-darkMode');
  const handleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const generalCtx = {
    darkModeValue: darkMode,
    toggleDarkMode: handleDarkMode,
  };
  return (
    <GeneralContext.Provider value={generalCtx}>
      {children}
    </GeneralContext.Provider>
  );
}
