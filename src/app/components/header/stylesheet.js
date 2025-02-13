import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        background: "linear-gradient(to right, #E5E5E51A, #E5E5E51A)",
        fontFamily: "farsan-regular",
        flexDirection:"row",
        alignItems: "center",
        borderRadius: 10,
        display: "flex",
        margin: 10,
        gap: 20,
    },
    headerContainer: {
        textAlign: "center",
        padding: 10,
        margin: 15,
    },
    iconContainer: {
        flexDirection: "row",
        textAlign: "center",
        display: "flex",
        margin: 15,
        gap: 30
    },
    buttonContainer: {
        textAlign: "center",
        display: "flex",
        width: "50%",
        margin: 15,
    },
    icon: {
        height: "30px",
        width: "30px",
    }
}, {
    classNamePrefix: "Header-Component"
});

export default useStyles;