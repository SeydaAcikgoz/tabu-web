import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        boxShadow: (props) => `0px 10px 20px ${props.colors.gray80}`,
        justifyContent: "space-between",
        fontFamily: "farsan-regular",
        alignItems: "center",
        flexDirection:"row",
        border: "3px solid",
        borderRadius: 10,
        display: "flex",
        padding: 15,
        margin: 10,
        gap: 30
    },
    roundContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        display: "flex",
        height: "30px",
        width: "30px",
        padding: 10,
    },
    teamContainer: {
        borderRadius: 10,
        padding: 10,
    },
    infoContainer: {
        whiteSpace: "nowrap",
        display: "flex",
        gap: 30
    },
    infoContent: {
        borderRadius: 10,
        padding: 10,
    },
}, {
    classNamePrefix: "ScoreList-Component"
});

export default useStyles;