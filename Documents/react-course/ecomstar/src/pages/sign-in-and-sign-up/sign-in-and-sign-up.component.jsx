import React from 'react';
import './sign-in-and-sign-up.style.scss';
import SignIn from '../../components/signin/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.style.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;