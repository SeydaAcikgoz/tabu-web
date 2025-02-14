import useStyles from "./stylesheet";
import { useTheme } from "../../context/ThemeContext";

const ScoreList = ({
    winnerTeam,
    teamsName,
    score,
    id
}) => {
    const { theme } = useTheme();
    const classes = useStyles(theme);

    return <div
        className={classes.container}
        style={{
            background:theme.colors.cardBackground
        }}
    >
        <div
            className={classes.roundNumber}
            style={{
                background: theme.colors.attention,
                ...theme.typography.header3
            }}
        >
            {id}
        </div>
        <div 
            className={classes.teamInfo}
            style={{
                background: theme.colors.gray40,
                ...theme.typography.header3
            }}
        >
            {teamsName}
        </div>
        <div
            className={classes.info}
        >
            <div 
            className={classes.infoBox}
            style={{
                background: theme.colors.gray0,
                ...theme.typography.header3
            }}
        >
            Kazanan: {winnerTeam}
        </div>
        <div 
            className={classes.infoBox}
            style={{
                background: theme.colors.gray0,
                ...theme.typography.header3
            }}
        >
            Skor: {score}
        </div>
        </div>
    </div>
};
export default ScoreList;