import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        flexDirection: "column",
        borderRadius: 10,
        display: "flex",
        width: "600px",
        padding: 15,
    },
    modalHeader :{
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex'
    },
    inputField: {
        flexDirection: "column",
        display: "flex",
        margin: 10,
        gap: 5,
    },
    modalButtons: {
        justifyContent: "center",
        display: "flex"
    },
}, {
    classNamePrefix: "UpdateCart-Modal"
});

export default useStyles;