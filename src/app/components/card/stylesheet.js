import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        boxShadow: (props) => `0px 10px 20px ${props.colors.gray80}`,
        fontFamily: "farsan-regular",
        backgroundSize: "cover",
        border: "3px solid",
        borderRadius: 10,
        width: "250px",
    },
    headerContainer: {
        textAlign: "center",
        fontSize: "18px",
        padding: 10,
    },
    contentContainer: {
        flexDirection: "column",
        textAlign: "center",
        display: "flex",
        padding: 10,
    },
    word: {
        margin: 5,
    },
}, {
    classNamePrefix: "Card-Component"
});

export default useStyles;