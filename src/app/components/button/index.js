import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import useStyles from "./stylesheet";

const Button = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();

    const classes = useStyles(theme.colors);
    return (
        <div
        className={classes.container}
            style={{
            }}
        >
            
        </div>
    );
};

export default Button;
