import useStyles from "./stylesheet";
import {
    MENU
} from "../../constants"
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import {
    LightThemeIcon,
    DarkThemeIcon,
    LanguageIcon
} from '../../assets/icons';
import Button from "../../../app/components/button";

const Header = () => {
    const navigate = useNavigate();
    
    const { toggleLanguage, translation } = useLanguage();
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
                    icon={LanguageIcon}
                    color="gray40"
                    className={classes.icon}
                />
                <Button
                    onClick={toggleTheme}
                    icon={theme.key === "light" ? LightThemeIcon  : DarkThemeIcon}
                    color="gray40"
                    className={classes.icon}
                />
            </div>
            <div
                className={classes.buttonContainer}
            >
                <Button title={translation.login} color="red" onClick={() => alert("Clicked!")} />
            </div>
        </div>
    </div>
};
export default Header;