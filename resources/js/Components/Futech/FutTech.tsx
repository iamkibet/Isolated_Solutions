import React from "react";
import FutechWrap from "./FutechWrap";
import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";

const Futech: React.FC = () => {
    return (
        <div className="w-full mb-8 border-b-2 border-black ">
            <MaxWidthWrapper>
                <div className=" text-center">
                    <h3 className="text-3xl md:text-5xl font-extrabold mb-4 relative inline-block">
                        The Stakeholders of{" "}
                        <span className="text-red-500">
                            Futuristic Technology Solutions
                        </span>
                    </h3>
                    <span className="text-lg md:text-xl text-gray-600">
                        Your Ideas, Our Expertise = Maximum Customer Success
                    </span>
                </div>
                <div className="pb-4 mt-3">
                    <div className="flex flex-nowrap overflow-x-scroll md:overflow-x-hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        <FutechWrap
                            title="Blockchain Development"
                            content="Enhancing and securing the ways to store and modify data of transactions with Blockchain-powered solutions for banking, finance, healthcare, and other industries."
                        />
                        <FutechWrap
                            title="IoT"
                            content="Unfold the incredible abilities of the internet-of-things to transfer data without human intervention. A well-architectured IoT ecosystem transforms the business."
                        />
                        <FutechWrap
                            title="Augmented Reality"
                            content="Mingle technology and real-world with supreme Augmented reality solutions to increase the emotional interaction and appeal of your brand."
                        />
                        <FutechWrap
                            title="Data Intelligence"
                            content="Analyze your business roadmap and possible outcomes more sophisticatedly using the power of data."
                        />
                        <FutechWrap
                            title="Artificial Intelligence"
                            content="Automate your business operations and processes with AI-powered solutions to reduce human intervention and increase efficiency."
                        />
                        <FutechWrap
                            title="Virtual reality"
                            content="Create your own world of possibilities using our advanced VR solutions focusing on varying enterprise needs."
                        />
                    </div>
                </div>
                <button
                    type="button"
                    className="border-2 hover:border-[#02789e] px-8 py-5 font-medium text-white hover:text-[#14151b] bg-[#02789e] hover:bg-white rounded-lg text-center cursor-pointer mb-8"
                >
                    Share Your Product Idea
                </button>
            </MaxWidthWrapper>
        </div>
    );
};

export default Futech;
