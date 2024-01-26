import React from 'react';
import FormIndex from '../elements/input'
import Button from '../button/Button'

const FormRegister = () => {
    return (
        <form action="">
            <FormIndex label="Fullname" type="text" placeholder="inser your name here ..." name="fullname"/>

            <FormIndex label="Email" type="email" placeholder="coba@gmail.com" name="email"/>

            <FormIndex label="Password" type="password" placeholder="*****" name="password"/>

            <FormIndex label="Confirm Password" type="password" placeholder="*****" name="confirmpassword"/>
          
          <Button variant="bg-blue-600 w-full">Register</Button>
        </form>
    );
};

export default FormRegister;