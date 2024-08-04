"use client";
import { createContext, useContext, useState } from "react";
import { NextIntlProvider } from "next-intl";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <LanguageContext.Provider
      value={{ selectedLanguage, handleLanguageChange }}
    >
      <NextIntlProvider
        locale={selectedLanguage}
        messages={require(`../locales/${selectedLanguage}.json`)}
      >
        {children}
      </NextIntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
