import React, { useEffect, useState } from 'react';
import bannerOne from '../../../Images/slider/415.jpg'
import Services from '../Services/Services';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
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

            {/* services section  */}
            <div className='text-center py-6'>
                <h2 className='uppercase text-4xl'>Services</h2>
                <p>CHECK HERE HOW CAN I HELP YOU</p>
                <div className=' h-0.5	 w-16 bg-sky-500 text-center inline-block '></div>
                <div className='grid md:grid-cols-3 gap-5 max-w-screen-xl mx-auto mt-5'>
                    {
                        services.map(service => <Services key={service.id} service={service}></Services>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;