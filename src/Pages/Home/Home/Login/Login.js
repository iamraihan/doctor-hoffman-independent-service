import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <div className='mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl mx-auto'>
            <p className='text-center'>Sign in with</p>
            <div className='text-center flex justify-center mt-2'>
                <button className='flex items-center mr-3 bg-indigo-500 px-5 py-1 rounded-md text-gray-100 hover:bg-indigo-600'> <FaGoogle className='mr-1'></FaGoogle> Google</button>
                <button className='flex items-center mr-3 bg-indigo-500 px-5 py-1 rounded-md text-gray-100 hover:bg-indigo-600'> <FaGoogle className='mr-1'></FaGoogle> Github</button>
            </div>

            <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold mb-14">Log in
            </h2>
            <form>
                <div>
                    <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                    <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" name='email' type="" placeholder="johndoe@email.com" />
                </div>
                <div className="mt-8">
                    <div className="flex justify-between items-center">
                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                            Password
                        </div>
                        <div>
                            <Link to='/' className='text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer'>Forgot Password?</Link>
                        </div>
                    </div>
                    <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" name='password' type="" placeholder="Enter your password" />
                </div>
                <div className="mt-10">
                    <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg">
                        Log In
                    </button>
                </div>
            </form>
            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                Don't have an account ? <Link to='/' className='cursor-pointer text-indigo-600 hover:text-indigo-800'>Sign Up</Link>
            </div>
        </div>
    );
};

export default Login;