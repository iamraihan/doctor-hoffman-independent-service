import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import raihan from '../../Images/about/raihan-ali.jpg'

const AboutMe = () => {
    return (
        <div className='grid md:grid-cols-5 max-w-screen-xl mx-auto shadow-2xl border-1 p-3 rounded-lg'>
            <div className='col-span-2 shadow-2xl '>
                <img className='rounded-full p-3 ' src={raihan} alt="" />
            </div>
            <div className='col-span-1 mb-10 md:mb-0 p-3'></div>
            <div className='col-span-2 flex items-start  flex-col justify-center shadow-lg pl-4'>
                <h2 className='text-4xl text-gray-500 font-bold'>Raihan Ali</h2>
                <p className='my-4 font-semibold text-gray-500'>I want to be web fullstack developer</p>
                <p className='text-gray-500'>
                    I have already learned HTML, CSS, and Basic javascript. I also introduce myself with react.
                    Currently, I want to be a mern stack developer.
                    and already came a step toward success in this challenge.
                    my sir says that you need hard work for more than one month than you can call a front-end developer.
                    and my biggest hobby is be a blockchain developer and I'm working hard toward this.
                </p>
                <div className='flex mt-4'>
                    <FaFacebook className='text-2xl cursor-pointer text-gray-500 hover:scale-150  duration-300 mr-3 '></FaFacebook>
                    <FaTwitter className='text-2xl cursor-pointer text-gray-500 hover:scale-150  duration-300 mr-3 '></FaTwitter>
                    <FaInstagram className='text-2xl cursor-pointer text-gray-500 hover:scale-150  duration-300 mr-3 '></FaInstagram>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;