import React from 'react';

const GrowBusiness = () => {
    return ( 
        <div className="flex flex-nowrap overflow-x-scroll md:overflow-x-hidden md:flex-row w-full md:h-150 md:justify-center items-center bg-[#14151b] p-5 md:p-10">
            <div>
                <div className="flex flex-col md:flex-row gap-x-5 my-10 md:mx-10 w-72 md:w-auto">
                    <img className="hidden md:block" src="https://www.sparxitsolutions.com/assets-style/images/grow-business.jpg" alt="Grow Business" />
                    <div className="flex flex-col">
                        <h1 className="flex flex-col font-bold text-2xl md:text-3xl text-slate-50">Grow Your Business <span className="text-sm md:text-base font-normal">Raise Your Business Our Digital Solutions</span></h1>
                        <a href="#" className="relative group inline-flex items-center px-1 w-48 md:px-2 py-3 text-xs md:text-sm md:w-3/4 font-normal md:font-medium text-center border border-[#02789e] bg-[#02789e] hover:bg-[#14151b] text-slate-50 mt-8">
                            Request Free Consultation
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:border-dashed md:border-l-2 md:border-gray-700">
                <div className="flex flex-col md:flex-row gap-x-5  my-10 mx-2 md:mx-10 w-72 md:w-auto">
                    <img className="hidden md:block" src="https://www.sparxitsolutions.com/assets-style/images/career-seekers.jpg" alt="Grow Business" />
                    <div className="flex flex-col">
                        <h1 className="flex flex-col font-bold text-2xl md:text-3xl text-slate-50">For Career Seekers <span className="text-sm md:text-base font-normal">We Need You to be Our Growth Partner</span></h1>
                        <a href="#" className="relative group inline-flex items-center px-1 md:px-4 py-3 text-xs md:text-sm w-36 md:w-3/4 font-normal md:font-medium text-center border border-[#02789e] bg-[#02789e] hover:bg-[#14151b] text-slate-50 mt-8">
                            Share Your Profile
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default GrowBusiness;