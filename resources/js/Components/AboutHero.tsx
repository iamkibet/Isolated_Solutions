import React from 'react';
import { Head } from "@inertiajs/react";
import { FaCommentDollar } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { TbHealthRecognition } from 'react-icons/tb';

const AboutHero = () => {

    const bgHero: React.CSSProperties = {
        backgroundImage: 'url("https://www.sparxitsolutions.com/assets-style/images/csr.jpg")',
        backgroundAttachment: "fixed",
        backgroundSize: "100% auto",
    };
    return (
        <section>
            <Head title="About" /> 
            <div className="bg-cover bg-center h-screen overflow-hidden" style={bgHero}>
                <div className="mx-auto gap-y-6 z-10 flex flex-col justify-center h-full px-6 lg:px-8 lg:w-3/4">
                    <h1 className='text-2xl lg:text-5xl font-extrabold text-white w-3/4'>Persuading Quality Through Optimum Work-Culture Standards</h1>
                    <p className='text-lg md:text-2xl text-white md:w-3/4'>
                        As an experienced service provider, we reconcile the package of conventional and future-oriented organizational trends to fabricate assorted and sophisticated service solutions even during challenging times.
                    </p>
                </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row flex-grow-0 flex-shrink-0 justify-between p-3 gap-x-4">
                <div className='border-gray-200 rounded-lg shadow-lg p-8 mt-[-8%] bg-white max-w-lg'>
                    <h1 className='flex gap-5 items-center text-lg md:text-xl lg:text-3xl font-semibold mb-5'>
                        <span> <FaCommentDollar className='text-red-500'/> </span>
                        Startup Care Fund
                    </h1>
                    <p className='text-sm md:text-base'>
                        In the initial days of lockdown due to COVID-19, many organizations could not get the chance to counter the challenge of maintaining their business productivity by taking actionable steps. When the entire world would be in their homes, we launched Startup Care Fund, an initiative to help small to medium-scale businesses by providing them free of cost digital marketing services from the allocated budget of $100K. <br /> <br />
                        Our team outreached many companies and also received responses from many organizations in the market to avail the benefits of this initiative.
                    </p>
                </div>
                <div className='border-gray-200 rounded-lg shadow-lg p-8 mt-[-8%] bg-white max-w-lg'>
                    <h1 className='flex gap-5 items-center text-lg md:text-xl lg:text-3xl font-semibold mb-5'>
                        <span><FaPeopleGroup className='text-red-500'/></span>
                        Support For Former Employees
                    </h1>
                    <p className='text-sm md:text-base'>
                        In the initial days of lockdown due to COVID-19, many organizations could not get the chance to counter the challenge of maintaining their business productivity by taking actionable steps. When the entire world would be in their homes, we launched Startup Care Fund, an initiative to help small to medium-scale businesses by providing them free of cost digital marketing services from the allocated budget of $100K. <br /> <br />
                        Our team outreached many companies and also received responses from many organizations in the market to avail the benefits of this initiative.
                    </p>
                </div>
                <div className='border-gray-200 rounded-lg shadow-lg p-8 mt-[-8%] bg-white max-w-lg'>
                    <h1 className='flex gap-5 items-center text-lg md:text-xl lg:text-3xl font-semibold mb-5'>
                        <span><TbHealthRecognition className='text-red-500'/></span>
                        Health Cover
                    </h1>
                    <p className='text-sm md:text-base'>
                        In the initial days of lockdown due to COVID-19, many organizations could not get the chance to counter the challenge of maintaining their business productivity by taking actionable steps. When the entire world would be in their homes, we launched Startup Care Fund, an initiative to help small to medium-scale businesses by providing them free of cost digital marketing services from the allocated budget of $100K. <br /> <br /> Our team outreached many companies and also received responses from many organizations in the market to avail the benefits of this initiative.
                    </p>
                </div>
            </div>
        </section>
     );
}
 
export default AboutHero;