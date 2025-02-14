import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        textAlign: "center",
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
        height: "30px",
        width: "30px",
    }
}, {
    classNamePrefix: "Component-Button"
});

export default useStyles;