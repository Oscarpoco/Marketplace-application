import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { renderLoader, renderSign, renderSignUp } from '../../redux/actions/userInterFaceActions.js';
import { loginUser } from '../../redux/actions/authenticationAction.js';
// Import your signup action if you have one
// import { signUpUser } from '../../redux/actions/authenticationAction.js'; 

// STYLING
import '../styling/SignInForm.css';

// ICONS
import { FaOpencart } from "react-icons/fa";

export default function SignForm() {
    const dispatch = useDispatch();
    const signUp = useSelector((state) => state.userInterface.signUp);

    // State for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCloseForm = () => {
        dispatch(renderLoader(true));
        setTimeout(() => {
            dispatch(renderSign());
            dispatch(renderLoader(false));
        }, 3000);
    };

    const handleLogin = (e) => {
        e.preventDefault(); 
        dispatch(loginUser(email, password)); 
    };

    const handleSignUp = (e) => {
        e.preventDefault(); 
        // dispatch(signUpUser(email, password)); 
    };

    return (
        <div className='SignForm-layout'>
            <div className='sign-logo'>
                <div className='company-name' id='company-name'>m<span>Buy</span> <FaOpencart/></div>
                <div className=''><button className='btn-close' onClick={handleCloseForm}><span>+</span></button></div>
            </div>

            <div className='SignForm'>
                <h2 className='form-title'>{signUp ? 'Create an Account!' : 'Welcome Back!'}</h2>
                <form className='form' onSubmit={signUp ? handleSignUp : handleLogin}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input 
                            type='email' 
                            id='email' 
                            name='email' 
                            required 
                            placeholder='Enter your email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} // Update email state
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password:</label>
                        <input 
                            type='password' 
                            id='password' 
                            name='password' 
                            required 
                            placeholder='Enter your password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} // Update password state
                        />
                    </div>
                    <button type='submit' className='sign-btn'>{signUp ? 'Sign Up' : 'Sign In'}</button>
                </form>
                <div className='form-footer'>
                    <p>
                        {signUp 
                            ? "Already have an account? " 
                            : "Don't have an account? "} 
                        <span onClick={() => dispatch(renderSignUp())} className='sign-up-link'>
                            {signUp ? 'Sign In' : 'Sign Up'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
