import React from "react";
import injectSheet from "react-jss";
import styles from "./style";

const Modal = ({
    isVisible,
    children,
    classes,
    onClose,
    index,
    style
}) => {
    
    if(!isVisible){
        return;
    }
    
    return <div
        className={classes.container}
        style={{
            zIndex: 999 + index,
        }}
        onClick={() => {
            onClose();
        }}
    >
        <div
            onClick={(e) => {
                e.stopPropagation();
            }}
            style={style}
            className={classes.childrenContainer}
        >
            {children}
        </div>
    </div>;
};
export default injectSheet(styles)(Modal);