import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        background: "linear-gradient(to right, #E5E5E51A, #E5E5E51A)",
        fontFamily: "farsan-regular",
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
        display: "flex",
        margin: 10,
        gap: 20,
    },
    headerContainer: {
        padding: 10,
        margin: 15,
    },
    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
        display: "flex",
        margin: 15,
    },
    iconContainer: {
        flexDirection: "row",
        textAlign: "center",
        display: "flex",
        margin: 15,
        gap: 30
    },
    icon: {
        height: "30px",
        width: "30px",
    },
    buttonContainer: {
        textAlign: "center",
        display: "flex",
        margin: 15,
    },
}, {
    classNamePrefix: "Header-Component"
});

export default useStyles;