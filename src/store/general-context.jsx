import { createContext, useState } from "react";

export const GeneralContext = createContext({
  darkModeValue: false,
  toggleDarkMode: () => {},
});

export default function GeneralContextProvider({ children }) {
  const [darkMode, setdarkMode] = useState(false);

  const handleDarkMode = () => {
    setdarkMode(!darkMode);
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
