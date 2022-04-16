import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='md:flex justify-between max-w-screen-xl	 mx-auto'>
            <div>
                <Link to='/'>Hoffman</Link>
            </div>
            <div className='md:flex'>
                <Link className='ml-5' to='/'>Home</Link>
                <Link className='ml-5' to='/services'>Services</Link>
                <Link className='ml-5' to='/blogs'>Blogs</Link>
                <Link className='ml-5' to='/about-me'>About Me</Link>
            </div>
        </nav>
    );
};

export default Navbar;