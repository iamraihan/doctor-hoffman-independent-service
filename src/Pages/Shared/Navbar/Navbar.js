import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import CustomLink from '../../CustomLInk/CustomLink';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [open, setOpen] = useState(false)

    const logout = () => {
        signOut(auth);
    };
    return (
        <div className=''>
            <div onClick={() => setOpen(!open)} className='w-6 h-6  md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <nav className={`md:flex md:justify-between bg-white  md:max-w-screen-xl md:h-20 items-center md:mx-auto absolute md:static  duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                <div>
                    <Link to='/'>Hoffman</Link>
                </div>
                <div className='flex '>
                    <CustomLink className='ml-5 pb-' to='/'>Home</CustomLink>
                    <CustomLink className='ml-5 pb-' to='/about-me'>About Me</CustomLink>

                    <CustomLink className='ml-5 pb-' to='/services'>Services</CustomLink>
                    <CustomLink className='ml-5 pb-' to='/blogs'>Blogs</CustomLink>
                    {
                        user ? <CustomLink to='/login'><button onClick={logout} className=" ml-5 px-7 py-1 bg-sky-500 text-white rounded-md hover:bg-sky-700">LogOut</button></CustomLink>
                            :
                            <CustomLink to='/login'><button className=" ml-5 px-7 py-1 bg-sky-500 text-white rounded-md hover:bg-sky-700">Login</button></CustomLink>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;