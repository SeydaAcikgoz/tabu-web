import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    "@global": {
        "fontFamily": "farsan-regular",
        "src": "url('/assets/fonts/Farsan-Regular.ttf')"
    }
}, {
    classNamePrefix: "Global"
});

export default useStyles;