import React from 'react';
import Button from '../components/button/Button';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='p-8'>
                <h1 className='text-4xl text-center'>
                    Hi there, Welcome!!
                </h1>
                <p className='text-center pt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam velit earum hic id aperiam!
                </p>
                <p className='text-center pb-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div className='flex items-center justify-center gap-2'>
                    <Button variant="bg-blue-600">
                        <Link to="/login">
                            Login
                        </Link>
                    </Button>
                    <h1>or</h1>
                    <Button variant="bg-blue-600">
                        <Link to="/register">
                            Register
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Home;