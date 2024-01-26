import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {

    const error = useRouteError();

    return (
        <div className=' flex items-center justify-center min-h-screen'>
            <div className='p-5'>
            <h1 className='text-center text-7xl'>Oops!</h1>
            <p className='text-center text-3xl py-1'>Sorry error bro...</p>
            <p className='text-center text-xl'>{error.statusText || error.message}</p>
            </div>
        </div>
    );
};

export default Error;