import React from 'react';

const Layouting = (props) => {
    const { children, title } = props;
    return (
      <div className="flex justify-center items-center max-w-7xl mx-auto">
        <div className='border rounded-lg shadow-md'>
        <div className="w-full max-w-xs p-8">
        <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
      </div>
      </div>
      </div>
    );
};

export default Layouting;