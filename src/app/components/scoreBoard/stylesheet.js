import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        background: "linear-gradient(to right, #E5E5E51A, #E5E5E51A)",
        boxShadow: (props) => `0px 10px 20px ${props.colors.gray80}`,
        fontFamily: "farsan-regular",
        flexDirection:"column",
        alignItems: "center",
        border: "3px solid",
        borderRadius: 10,
        display: "flex",
        width: "40%",
    },
    headerContainer: {
        textAlign: "center",
        borderRadius: 10,
        width: "50%",
        padding: 10,
        margin: 15,
    },
    contentContainer: {
        flexDirection: "column",
        textAlign: "center",
        display: "flex",
        width: "50%",
        margin: 15,
        gap: 15
    },
    statBox: {
        borderRadius: 10,
        padding: 5,
    },
}, {
    classNamePrefix: "ScoreList-Component"
});

export default useStyles;