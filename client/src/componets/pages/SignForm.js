import React, { useState } from 'react';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { renderLoader, renderSign, renderSignUp } from '../../redux/actions/userInterFaceActions.js';
import { loginUser } from '../../redux/actions/authenticationAction.js';
import { signUpUser } from '../../redux/actions/authenticationAction.js'; 

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
    const [isAdmin, setIsAdmin] = useState(false);

    // CLOSE FORM
    const handleCloseForm = () => {
        dispatch(renderLoader(true));
        setTimeout(() => {
            dispatch(renderSign());
            dispatch(renderLoader(false));
        }, 3000);
    };
    // ENDS

    // LOGIN
    const handleLogin = (e) => {
        dispatch(renderLoader(true));

        e.preventDefault(); 
        setTimeout(() => {
            dispatch(loginUser(email, password)); 
            dispatch(renderSign());
            dispatch(renderLoader(false));
        }, 3000);
    };
    // ENDS

    // SIGN UP
    const handleSignUp = (e) => {
        dispatch(renderLoader(true));

        e.preventDefault(); 
        setTimeout(() => {
            const role = isAdmin ? 'admin' : 'user';
            dispatch(signUpUser(email, password, role)); 
            dispatch(renderSign());
            dispatch(renderLoader(false));
        }, 3000);
    };
    // ENDS



    return (
        <div className='SignForm-layout'>
            <div className='sign-logo'>
                <div className='company-name' id='company-name'>m<span>Buy</span> <FaOpencart/></div>
                <div className='floating-btn'><button className='btn-close' onClick={handleCloseForm}><span>+</span></button></div>
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

                    {signUp && (
                        <div className='form-group' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',gap: '.1em', width: '100%'}}>
                            <label style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',gap: '.1em', width: '100%', marginBottom: 0}}>

                                <p style={{width: '100%'}}>As a Seller ?</p>
                                <input 
                                    type='checkbox' 
                                    checked={isAdmin} 
                                    onChange={() => setIsAdmin(!isAdmin)} 
                                    style={{margin: 0, padding: 0, cursor: 'pointer'}}
                                />
                                
                            </label>
                        </div>
                    )}
                    
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
