import React from 'react';
import bannerOne from '../../../Images/slider/415.jpg'

const Home = () => {
    return (
        <div className=" bg-gradient-to-r from-cyan-100 to-blue-500 grid md:grid-cols-2" style={{ height: 'calc(100vh - 80px)' }}>

            <div className='flex flex-col justify-center items-center order-2 md:order-1'>
                <h2 className='text-5xl '>Dr. Mark Hoffman</h2>
                <p className=' my-5'>Dr. Mark Hoffman’s dental clinic welcomes you!</p>
                <div>
                    <button className='bg-sky-800 text-white p-2'>Book Appointment</button>
                    <button className='bg-cyan-400 p-2 text-white ml-3'>Get Special Offer</button>
                </div>

            </div>
            <div className='bg-none flex items-center justify-center order-1 md:order-2'>
                <img className='rounded-full' src={bannerOne} alt="" />
            </div>
        </div>
    );
};

export default Home;