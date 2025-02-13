import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import useStyles from "./stylesheet";

const Button = ({ 
    onClick,
    title,
    icon,
    color
}) => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage,} = useLanguage();

    const classes = useStyles(theme.colors);
    return (
        <div
        className={classes.container}
        >
            <button 
                className={classes.button}
                style={{
                    backgroundColor: theme.colors[color],
                    ...theme.typography.header3
                }}
                onClick={onClick}
            >
                {icon &&
                    <img src={icon} alt="icon"
                    className={classes.icon}
                    />
                }
                {title &&
                    <span 
                        style={{
                            color: theme.colors.gray0,
                            ...theme.typography.header3
                        }}
                    >
                        {title}
                    </span>
                }
            </button>
        </div>
    );
};

export default Button;
