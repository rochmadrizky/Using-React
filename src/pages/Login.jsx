import React from 'react';
import Layouting from '../components/layouts/Layouting';
import FormLogin from '../components/fragments/FormLogin';

const Login = () => {
    return (
        <Layouting title="Login">
            <FormLogin/>
        </Layouting>
    );
};

export default Login;