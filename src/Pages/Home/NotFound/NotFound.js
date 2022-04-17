import React from 'react';
import notFound404 from '../../../Images/not-found/404-error-page-not-found.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='w-screen  object-cover' style={{ height: 'calc(100vh - 80px)' }} src={notFound404} alt="" />
        </div>
    );
};

export default NotFound;