import React from 'react';
import Label from './Label';
import Input from './Input';

const FormIndex = (props) => {
    const { label, name, type, placeholder } = props;

    return (
        <div className="mb-6">
            <Label htmlFor={name} className="text-slate-700 text-sm font-bold mb-2">
                {label}
            </Label>
            <Input name={name} type={type} placeholder={placeholder} />
        </div>
    );
};

export default FormIndex;
