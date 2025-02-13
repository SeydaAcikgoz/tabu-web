import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        background: "linear-gradient(to right, #E5E5E51A, #E5E5E51A)",
        boxShadow: (props) => `0px 10px 20px ${props.colors.gray80}`,
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
    roundNumber: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        display: "flex",
        height: "30px",
        width: "30px",
        padding: 10,
    },
    teamInfo: {
        borderRadius: 10,
        padding: 10,
    },
    infoBox: {
        borderRadius: 10,
        padding: 10,
    },
}, {
    classNamePrefix: "ScoreList-Component"
});

export default useStyles;