import React, { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  // useEffect(()=>{
  //   const lingua = localStorage.getItem('language');
  //   if(lingua){
  //     setLanguage(lingua);
  //   }
  // },[]);

  const changeLanguage = () => {
    if (language == 'pt') {
      setLanguage('en');
      // localStorage.setItem('language', 'en');
    } else {
      setLanguage('pt');
      // localStorage.setItem('language', 'pt');
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
