import useStyles from "./stylesheet";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
const ScoreList = ({
    winnerTeam,
    teamsName,
    score,
    id
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
            className={classes.roundContainer}
            style={{
                background: theme.colors.attention,
                ...theme.typography.header3
            }}
        >
            {id}
        </div>
        <div 
            className={classes.teamContainer}
            style={{
                background: theme.colors.gray40,
                ...theme.typography.header3
            }}
        >
            {teamsName}
        </div>
        <div
            className={classes.infoContainer}
        >
            <div 
            className={classes.infoContent}
            style={{
                background: theme.colors.gray0,
                ...theme.typography.header3
            }}
        >
            {translation.winner} {winnerTeam}
        </div>
        <div 
            className={classes.infoContent}
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
export default ScoreList;