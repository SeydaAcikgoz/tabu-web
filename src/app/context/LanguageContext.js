import { createContext, useState, useEffect, useContext } from "react";
import tr from "../locales/variants/tr.json";  // Türkçe JSON dosyasını içe aktar
import en from "../locales/variants/en.json"; 

const languages = { tr, en };
const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(localStorage.getItem("language") || "tr");

    useEffect(() => {
        localStorage.setItem("language", language);
    });

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "tr" ? "en" : "tr"));
    };

    const values = {
        language: languages[language].code, 
            isRTL: languages[language].isRTL,
            toggleLanguage, 
            translation: languages[language].translations // Çeviri nesnesi
    };

    return <LanguageContext.Provider value={values}>
        {children}
    </LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext);