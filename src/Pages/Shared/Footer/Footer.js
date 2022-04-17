import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className='relative py-5'>
            <div className=''>
                <p className='bg-clip-text text-9xl text-center text-gray-100'>Follow Me</p>


            </div>
            <div className='text-center absolute right-80  top-20 left-0 right-0'>
                <button className='m-5 bg-sky-300 rounded-full p-5 text-4xl text-white hover:bg-white shadow-lg text-black  hover:-translate-y-1 hover:scale-110  duration-300'><FaFacebookF></FaFacebookF></button>
                <button className='m-5 bg-sky-300 rounded-full p-5 text-4xl text-white hover:bg-white shadow-lg text-black  hover:-translate-y-1 hover:scale-110  duration-300'><FaTwitter></FaTwitter></button>
                <button className='m-5 bg-sky-300 rounded-full p-5 text-4xl text-white hover:bg-white shadow-lg text-black  hover:-translate-y-1 hover:scale-110  duration-300'><FaInstagram></FaInstagram></button>
            </div>
            <div><p className='text-center mt-16'>&copy; All Copyright reserved by Hoffman {new Date().getFullYear()}</p></div>
        </footer>
    );
};

export default Footer;