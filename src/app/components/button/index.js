import { useTheme } from "../../context/ThemeContext";
import useStyles from "./stylesheet";

const Button = ({ 
    onClick,
    title,
    color,
    icon: Icon, // String veya SVGR bileşeni olabilir
}) => {
    const { theme } = useTheme();
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
                {Icon ? (
                    typeof Icon === "string" ? (
                        <img src={Icon} alt="icon" className={classes.icon} />
                    ) : (
                        <Icon className={classes.icon} />
                    ))
                    : null
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
