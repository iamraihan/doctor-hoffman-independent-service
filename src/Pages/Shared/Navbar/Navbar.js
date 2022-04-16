import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='md:flex justify-between max-w-screen-xl h-20 items-center	 mx-auto'>
            <div>
                <Link to='/'>Hoffman</Link>
            </div>
            <div className='md:flex'>
                <Link className='ml-5 list-none' to='/'><li>Home</li></Link>
                <Link className='ml-5 list-none' to='/services'><li>Services</li></Link>
                <Link className='ml-5 list-none' to='/blogs'><li>Blogs</li></Link>
                <Link className='ml-5 list-none' to='/about-me'><li>About Me</li></Link>
            </div>
        </nav>
    );
};

export default Navbar;