import React from 'react';
import Layouting from '../components/layouts/Layouting';
import FormRegister from '../components/fragments/FormRegister';
import { Link } from 'react-router-dom';
import { IconPlayerTrackPrev } from '@tabler/icons-react';

const Register = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='py-24 pl-16 flex items-center gap-2'>
                <IconPlayerTrackPrev className='text-blue-500'/>
                <h1 className='font-bold text-blue-500'>
                    <Link to="/">
                        Go back home
                    </Link>
                </h1>
            </div>

            <Layouting title="Register">
                <FormRegister/>
                <p className=' text-center mt-5'>
                    you have account?{" "}
                    <Link to="/login" className=' font-semibold text-blue-500'>
                        Login
                    </Link>
                </p>
            </Layouting>
        </div>
    );
};

export default Register;