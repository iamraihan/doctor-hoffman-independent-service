import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto border p-5 mt-5'>
                <h2 className='text-4xl font-bold mb-8'>Difference between authorization and authentication?</h2>
                <p className='text-2xl'>authentication means checking someone who is it means verifying someone. authorization means which data file is used from the application. first of all authentication check the user who is then when the user access on website authorization which type of user it is. and what gives them access.
                    Authentication works through passwords, one-time pins, biometric information, and other information provided by the user.
                    and authorization is maintained by the organization or application owner which means who maintains the application.
                    for example, an organization has a variety of employee there is someone working as a manager some people working as field officers,s, etc but both users have authentication to access the website but everyone has different authorization managers have different kinds of accessibility for applications and another worker also have other accessibility. </p>
            </div>
            <div className='max-w-screen-xl mx-auto border p-5 mt-5'>
                <h2 className='text-4xl font-bold mb-8'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className='text-2xl'> firebase has authentication and also a database.
                    we can save time to build an authentication and much easier than other systems available. moreover, we get security from companies like google. For a little developer like me very difficult to build a database more secure than google.
                    it is not only for websites it's also available for mobile applications.
                    we can implement social media login very easily also email passwords even mobile number login availavle on firebase.
                    so it's amazing we get everything in one place. also, give us google analytics where we can see who visited our website how much time they invest and where invested if we say this in one word it's amazing.
                    It makes developer life easy.</p>
            </div>
            <div className='max-w-screen-xl mx-auto border p-5 mt-5'>
                <h2 className='text-4xl font-bold mb-8'>What other services does firebase provide other than authentication</h2>
                <p className='text-2xl'> Firebase is originally developed by Firebase inc and later acquired by Google. It provides website authentication and mobile app authentication.
                    other service firebases provide hosting, we can easily host a website. cloud messaging, google analytics where we can see visitor status,
                    cloud storage, dynamic links,
                    The good news is firebase most of the services are free.
                    they charge for some services but those are very reasonable.</p>
            </div>
        </div>
    );
};

export default Blogs;