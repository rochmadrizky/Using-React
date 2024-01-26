import { IconEye, IconEyeOff } from '@tabler/icons-react';
import React, { useState } from 'react';

const Input = (props) => {
    const { type, placeholder, name } = props;
    const [tampilkanPassword, setTampilkanPassword] = useState(false);

    const tombolBukaTutupPassword = () => {
        setTampilkanPassword(!tampilkanPassword);
    };

    return (
        <div className="relative">
            <input
                type={tampilkanPassword ? 'text' : type}
                className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder-opacity-50 my-2"
                placeholder={placeholder}
                name={name}
            />
            {type === 'password' && (
                <button
                    type="button"
                    className="absolute inset-y-0 right-0 px-3 py-2 opacity-50"
                    onClick={tombolBukaTutupPassword}
                >
                    {tampilkanPassword ? <IconEyeOff/> : <IconEye/>}
                </button>
            )}
        </div>
    );
};

export default Input;
