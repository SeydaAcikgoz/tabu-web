import * as React from "react";

const Check = ({
    color = "#fff",
    size = 30,
    ...props
}) => {
    const pathScale = 30 / size;
    return <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        height={size}
        width={size}
        fill="none"
        {...props}
    >
        <path
            fill="#ffffff"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5 / pathScale}
            stroke={'#000000'}
        />
    </svg>
};
export default Check;