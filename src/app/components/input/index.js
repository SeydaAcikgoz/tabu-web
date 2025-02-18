import { useState } from "react";
import useStyles from "./stylesheet";
import { useTheme } from "../../context/ThemeContext";

const Input = ({
    onValueChange,
    value,
    label
}) => {
    const [inputValue, setInputValue] = useState(value || "");
    const { theme, toggleTheme } = useTheme();
    const classes = useStyles(theme.colors);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        onValueChange(e.target.value);
    };

    return (
        <div
            className={classes.container}
        >
            {label &&
                <label
                    className={classes.labelContent}
                    style={{
                        backgroundColor: theme.colors.gray50,
                        ...theme.typography.header3
                    }}
                >
                    {label}
                </label>
            }
            <input
                onChange={handleChange}
                value={inputValue}
                type="text"
                className={classes.content}
                style={{
                    backgroundColor: theme.colors.gray0,
                    ...theme.typography.header3
                }}
            />
        </div>
    );
};

export default Input;
