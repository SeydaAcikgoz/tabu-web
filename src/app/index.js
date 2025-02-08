import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import themes from "./themes";
import locales from "./locales";
import useStyles from "./stylesheet";
import Navigation from "./navigation";
import {
    Header
} from "./components"

const App = () => {
    useStyles();
    
    return <ThemeProvider 
        values = {{
            themes,
            locales
        }}>
        <LanguageProvider>
            <Header/>
            <Navigation/>
        </LanguageProvider>
      </ThemeProvider>
}
export default App;
