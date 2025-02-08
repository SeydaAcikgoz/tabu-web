import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        flexDirection:"row",
        alignItems: "center",
        display: "flex"
    }
}, {
    classNamePrefix: "Header-Component"
});

export default useStyles;