import React from 'react';

const Services = ({ service }) => {
    console.log(service);
    const { name, price, description, img, id } = service
    return (
        <div className='pb-20'>
            <div className="card w-96 bg-base-100 rounded-lg shadow-xl pb-3">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl">{name}</h2>
                    <h2 className='text-xl mt-3'>${price}</h2>
                    <p className='my-3'>{description.slice(0, 50)}...</p>
                    <div className="card-actions justify-end">
                        <button className="px-7 py-1 bg-sky-500 text-white rounded-md hover:bg-sky-700">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;