import useStyles from "./stylesheet";
import {
    MENU
} from "../../constants"
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import Language from "../../assets/icons/world-svgrepo-com.svg"
import LightTheme from "../../assets/icons/sun-light-theme-svgrepo-com.svg"
import DarkTheme from "../../assets/icons/moon-dark-theme-svgrepo-com.svg"
import Button from "../../../app/components/button";

const Header = () => {
    const navigate = useNavigate();
    
    const { language, toggleLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const classes = useStyles(theme);

    return <div
        className={classes.container}
    >
        {/* <div
        >
            {
                MENU.map((item) => {
                    return <button
                        onClick={() => {
                            navigate(item.path)
                        }}
                    >
                        {item.key}
                    </button>
                })
            }
        </div> */}
        <div
            className={classes.headerContainer}
            style={{
                color: theme.colors.gray100,
                ...theme.typography.header1
            }}
        >
            TABOOOOOOOOOOOO
        </div>
        <div
            className={classes.contentContainer}
            style={{
                color: theme.colors.gray100,
                ...theme.typography.header1
            }}
        >
            <div
                className={classes.iconContainer}
            >
                <Button
                    onClick={toggleLanguage}
                    icon={Language}
                    color="gray0"
                    className={classes.icon}
                />
                <Button
                    onClick={toggleTheme}
                    icon={theme.key === "light" ? LightTheme : DarkTheme}
                    color="gray0"
                    className={classes.icon}
                />
            </div>
            <div
                className={classes.buttonContainer}
            >
                <Button title="Giriş Yap" color="red" onClick={() => alert("Clicked!")} />
            </div>
        </div>
    </div>
};
export default Header;