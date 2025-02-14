import useStyles from "./stylesheet";
import {
    MENU
} from "../../constants"
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import Language from "../../assets/icons/world-svgrepo-com.svg"
import LightTheme from "../../assets/icons/sun-light-theme-svgrepo-com.svg"
import DarkTheme from "../../assets/icons/moon-dark-theme-svgrepo-com.svg"
import Button from "../../../app/components/button";

const Header = () => {
    const navigate = useNavigate();
    
    const { theme } = useTheme();
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
                <img src={Language} alt="icon"
                    className={classes.icon}
                />
                <img src={DarkTheme} alt="icon"
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