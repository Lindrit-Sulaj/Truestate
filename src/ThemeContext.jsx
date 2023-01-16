import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [currentSection, setCurrentSection] = useState('Home');
  
  return (
    <ThemeContext.Provider value={{
      currentSection,
      setCurrentSection
    }}>
      { children }
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)