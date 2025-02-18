import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        display: "flex",
    },
    labelContent: {
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: "40%"
    },
    content: {
        borderRadius: 10,
        outline: "none",
        border: "none",
        padding: 10,
        margin: 10,
        width: "40%"
    },
}, {
    classNamePrefix: "Input-Component",
});

export default useStyles;
