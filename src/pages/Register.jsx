import React from 'react';
import Layouting from '../components/layouts/Layouting';
import FormRegister from '../components/fragments/FormRegister';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Layouting title="Register">
            <FormRegister/>
            <p className=' text-center mt-5'>you have account?{" "}
            <Link to="/login" className=' font-semibold text-blue-500'>
                Login
            </Link>
            </p>
        </Layouting>
    );
};

export default Register;