import React from "react";
import useStyles from "./stylesheet";
import { useTheme } from "../../context/ThemeContext";

const Card = ({
    forbiddenWords,
    mainWord
}) => {
    const { theme } = useTheme();
    const classes = useStyles(theme);

    return <div
        className={classes.container}
    >
        <div
            className={classes.headerContainer}
            style={{
                backgroundImage: theme.colors.linear,
                color: theme.colors.gray0,
                ...theme.typography.header3
            }}
        >
            {mainWord.toUpperCase()}
        </div>
        <div
            className={classes.contentContainer}
        >
            {forbiddenWords.map((word, index) => (
                <p
                    className={classes.word}
                    style={{
                        ...theme.typography.header5
                    }}
                    key={index}
                >
                    {word.toUpperCase()}
                </p>
            ))}
        </div>
    </div>
};
export default Card;