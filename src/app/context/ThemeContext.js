import { createContext, useState, useEffect, useContext } from "react";
import lightTheme from "../themes/variants/light";
import darkTheme from "../themes/variants/dark";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || lightTheme);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedThemeName = localStorage.getItem("theme");
        if (storedThemeName) {
            // Apply the theme based on the stored name
            setTheme(storedThemeName === "dark" ? darkTheme : lightTheme);
        } else {
            setTheme(lightTheme); // Default theme if nothing is stored
        }
        setIsLoading(false); // Set loading state to false once the theme is loaded
    }, []);

    useEffect(() => {
        if (!isLoading) {
            // Store only the theme name in localStorage
            localStorage.setItem("theme", theme === darkTheme ? "dark" : "light");
        }
    }, [theme, isLoading]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    const values = {
        theme,
        toggleTheme
    };

    return <ThemeContext.Provider value={values}>
        {isLoading ? <div>Loading...</div> : children}
    </ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext);