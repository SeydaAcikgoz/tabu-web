import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
        border: "3px solid #000",
        borderRadius: 10,
        width: 250,
    },
    header: {
        //background: "linear-gradient(90deg, #474747 0%, #616161 25%, #7A7A7A 50%, #474747 100%)",
        backgroundColor: (props) =>props.colors.gray100,
        color: (props) =>props.colors.gray0,
        textAlign: "center",
        padding: "10px",
        fontSize: "18px",
        fontWeight: "bold",
    },
    wordList: {
        display: "flex",
        flexDirection: "column",
        padding: "15px",
        textAlign: "center",
    },
    word: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#444",
        margin: "5px 0",
    },
}, {
    classNamePrefix: "Card-Component"
});

export default useStyles;