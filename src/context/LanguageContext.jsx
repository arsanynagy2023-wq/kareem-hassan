import { createContext, useState } from "react";

export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {

  const [language, setLanguage] = useState("ar");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}