import * as React from "react";

const Play = ({
    color = "#fff",
    size = 30,
    ...props
}) => {
    const pathScale = 30 / size;
    return <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        height={size}
        width={size}
        fill="none"
        {...props}
    >
        <path
            fill="#ffffff"
            d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5 / pathScale}
            stroke={'#000000'}
        />
    </svg>
};
export default Play;