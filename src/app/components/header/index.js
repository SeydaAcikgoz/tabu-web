import useStyles from "./stylesheet";
import {
    MENU
} from "../../constants"
import { Navigate, useNavigate } from "react-router-dom";

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return <div
        className={classes.container}
    >
        {
            MENU.map((item) => {
                return <button
                    onClick={() => {
                        navigate(item.path)
                    }}
                >
                    {item.key}
                </button>
            })
        }
    </div>
};
export default Header;