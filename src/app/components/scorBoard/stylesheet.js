import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        alignItems: "center",
        flexDirection:"row",
        display: "flex"
    }
}, {
    classNamePrefix: "Header-Component"
});

export default useStyles;