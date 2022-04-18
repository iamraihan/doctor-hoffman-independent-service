import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { async } from '@firebase/util';
import Loading from '../../../Shared/Loading/Loading';


const Login = () => {
    const emailRef = useRef()

    const navigate = useNavigate()
    const location = useLocation()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user || sending) {
        <Loading></Loading>
    }

    // google user 
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    if (googleUser) {
        navigate('/')
    }

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-red-400'>{error.message}</p>
    }
    const submitHandler = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Please enter your email!!')
        }
    }


    return (
        <div className='mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl mx-auto'>
            <p className='text-center text-gray-500'>Login in with</p>
            <div className='text-center flex justify-center mt-5'>
                <button onClick={() => { signInWithGoogle() }} className='flex items-center mr-5 bg-indigo-500 px-5 py-1 rounded-md text-gray-100 hover:bg-indigo-600'> <FaGoogle className='mr-1'></FaGoogle> Google</button>
                <button className='flex items-center mr-3 bg-indigo-500 px-5 py-1 rounded-md text-gray-100 hover:bg-indigo-600'> <FaGithub className='mr-1'></FaGithub> Github</button>
            </div>

            <div className='flex justify-center mt-5'>
                <div className='bg-gray-500 h-px w-80 '></div>
            </div>

            <div className='mb-5'>
                <p className='text-center mt-5 text-gray-500'>Or login in with credentials</p>
            </div>

            {/* <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold mb-14">Log in
            </h2> */}
            <form onSubmit={submitHandler}>
                <div>
                    <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                    <input ref={emailRef} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" name='email' type="email" placeholder="johndoe@email.com" required />
                </div>
                <div className="mt-8">
                    <div className="flex justify-between items-center">
                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                            Password
                        </div>
                        {/* <div>
                            <button onClick={resetPassword} className='text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer'>Forgot Password?</button>
                        </div> */}
                    </div>
                    <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" name='password' type="password" placeholder="Enter your password" required />
                </div>
                {errorElement}
                <div className="mt-10">
                    <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg">
                        Log In
                    </button>
                </div>
            </form>
            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                Don't have an account ? <Link to='/sign-up' className='cursor-pointer text-indigo-600 hover:text-indigo-800'>Sign Up</Link>
            </div>
            <div className='text-center'>
                <button onClick={resetPassword} className=' mt-5 font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer'>Forgot Password?</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;