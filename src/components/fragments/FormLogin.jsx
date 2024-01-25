import React from 'react';
import FormIndex from '../elements/input'
import Button from '../button/Button'

const FormLogin = () => {
    return (
        <form action="">
            <FormIndex label="Email" type="email" placeholder="coba@gmail.com" name="email"/>

            <FormIndex label="Password" type="password" placeholder="*****" name="password"/>
          
          <Button variant="bg-blue-600 w-full">Login</Button>
        </form>
    );
};

export default FormLogin;