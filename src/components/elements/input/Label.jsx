import React from 'react';

const Label = (props) => {
    const { htmlFor, children } = props;

    return (
        <label id={htmlFor} className="text-base font-bold">
           {children}
        </label>
    );
};

export default Label;
