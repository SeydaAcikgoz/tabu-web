import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        textAlign: "center",
        padding: 20,
        gap: 108,
        display: "flex",
    },
    button: {
        alignItems: "center",
        whiteSpace: "nowrap",
        cursor: "pointer",
        borderRadius: 10,
        display: "flex",
        border: "none",
        padding: 15,
        gap: 10,
        // '&:hover': {
        //     backgroundColor: "#0056b3"
        // }
    },
    icon: {
        height: "20px",
        width: "20px",
    }
}, {
    classNamePrefix: "Component-Button"
});

export default useStyles;