import useStyles from "./stylesheet";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";

const ScorBoard = ({
    correctCount,
    tabooCount,
    teamName,
    score,
}) => {
    const { theme } = useTheme();
    const classes = useStyles(theme);
    const { translation } = useLanguage();
    
    return <div
        className={classes.container}
        style={{
            background:theme.colors.cardBackground
        }}
    >
        <div
            className={classes.headerContainer}
            style={{
                background: theme.colors.success,
                color: theme.colors.gray0,
                ...theme.typography.header3
            }}
        >
            {teamName}
        </div>
        <div
            className={classes.contentContainer}
        >
            <div 
                className={classes.statBox}
                    style={{
                    background: theme.colors.gray0,
                    ...theme.typography.header3
                }}
            >
                {translation.correctCount} {correctCount}
            </div>
            <div 
                className={classes.statBox}
                style={{
                    background: theme.colors.gray0,
                    ...theme.typography.header3
                }}
            >
                {translation.tabooCount} {tabooCount}
            </div>
            <div 
                className={classes.statBox}
                style={{
                    background: theme.colors.gray0,
                    ...theme.typography.header3
                }}
            >
                {translation.score} {score}
            </div>
        </div>
    </div>
};
export default ScorBoard;