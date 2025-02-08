import React from "react";
import useStyles from "./stylesheet";
import { useTheme } from "../../context/ThemeContext";

const Header = ({
    forbiddenWords,
    mainWord
}) => {
    const { theme } = useTheme();
    const classes = useStyles(theme);

    return <div
        className={classes.container}
    >
        <div
            className={classes.header}
        >
        {mainWord.toUpperCase()}
        </div>
        <div
            className={classes.wordList}
        >
            {forbiddenWords.map((word, index) => (
                <p key={index}
                    className={classes.word}
                >
                    {word.toUpperCase()}
                </p>
            ))}
        </div>
    </div>
};
export default Header;