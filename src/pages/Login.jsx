import React from 'react';
import Layouting from '../components/layouts/Layouting';
import FormLogin from '../components/fragments/FormLogin';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Layouting title="Login">
            <FormLogin/>
            <p className=' text-center mt-5'>you don't have account?{" "}
            <Link to="/register" className=' font-semibold text-blue-500'>
                Register
            </Link>
            </p>
        </Layouting>
    );
};

export default Login;