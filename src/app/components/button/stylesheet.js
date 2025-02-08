import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        backgroundColor: (props) =>props.primary,
                color: (props) =>props.success,
                padding: "20px",
                textAlign: "center",
    }
}, {
    classNamePrefix: "Component-Button"
});

export default useStyles;