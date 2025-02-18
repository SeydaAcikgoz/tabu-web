import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        flexDirection: "column",
        display: "flex",
        width: "500px",
        padding: 15,
        borderRadius: 10
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
        gap: 10
    },
    modalButtons: {
        justifyContent: "center",
        display: "flex"
    },
}, {
    classNamePrefix: "CreateTeam-Modal"
});

export default useStyles;