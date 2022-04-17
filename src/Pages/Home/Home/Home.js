import React, { useEffect, useState } from 'react';
import bannerOne from '../../../Images/slider/415.jpg'
import Services from '../Services/Services';
import { FaHeartbeat, FaClock } from "react-icons/fa";

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
            <div className='text-center py-6 pt-12'>
                <h2 className='uppercase text-4xl'>Services</h2>
                <p>CHECK HERE HOW CAN I HELP YOU</p>
                <div className=' h-0.5	 w-16 bg-sky-500 text-center inline-block '></div>
                <div className='grid md:grid-cols-3 gap-5 max-w-screen-xl mx-auto mt-5'>
                    {
                        services.map(service => <Services key={service.id} service={service}></Services>)
                    }
                </div>
                <div className='max-w-screen-xl mx-auto bg-blue-600 grid md:grid-cols-2 text-white rounded-lg py-5'>
                    <div className='flex flex-col items-start ml-5 w-10/12	'>
                        <h2 className='text-3xl font-bold mb-4'> <FaHeartbeat className='text-3xl inline-block'></FaHeartbeat> Emergency Services</h2>
                        <p className='font-semibold flex justify-items-start my-5'>An emergency department (ED), also known as an accident & emergency  </p>
                        <p className='font-bold mt-3'>Call : +1-2345-3455-33</p>
                    </div>

                    <div className=' flex flex-col items-start ml-5 w-10/12	mt-5 md:mt-0'>
                        <h2 className='text-3xl font-bold mb-4'> <FaClock className='text-3xl inline-block'></FaClock> Opening hours</h2>
                        <p className='font-semibold flex justify-items-start my-3'>Far far away, behind the word mountains, far from the countries Vokalia
                        </p>
                        <div className=' w-full flex justify-between'>
                            <p>Mon - Fri</p><p>08:00 - 21:00</p>
                        </div>
                        <div className='bg-gray-400 h-px w-full mt-2'></div>
                        <div className=' w-full flex justify-between'>
                            <p>Sat - Sun</p><p>08:00 - 19:00
                            </p>
                        </div>
                        <div className='bg-gray-400 h-px w-full mt-2'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;