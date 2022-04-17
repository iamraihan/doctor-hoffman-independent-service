import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
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
                {
                    user ? <Link to='/login'><button onClick={logout} className=" ml-5 px-7 py-1 bg-sky-500 text-white rounded-md hover:bg-sky-700">LogOut</button></Link>
                        :
                        <Link to='/login'><button className=" ml-5 px-7 py-1 bg-sky-500 text-white rounded-md hover:bg-sky-700">Login</button></Link>
                }
            </div>
        </nav>
    );
};

export default Navbar;