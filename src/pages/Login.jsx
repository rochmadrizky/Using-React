import React from 'react';
import Layouting from '../components/layouts/Layouting';
import FormLogin from '../components/fragments/FormLogin';
import { Link } from 'react-router-dom';
import { IconPlayerTrackPrev } from '@tabler/icons-react';

const Login = () => {
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
            
            <Layouting title="Login">
                <FormLogin/>
                    <p className=' text-center mt-5'>you don't have account?{" "}
                        <Link to="/register" className=' font-semibold text-blue-500'>
                            Register
                        </Link>
                    </p>
            </Layouting>
        </div>
    );
};

export default Login;