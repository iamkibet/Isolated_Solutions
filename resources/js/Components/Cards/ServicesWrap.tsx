import ServiceWrap from "./Card";
import FutTech from "../Futech/FutTech";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

const Services = () => {
    return (
        <div className="mt-12 ">
            <h2 className="font-extrabold text-3xl md:text-4xl text-[#14151b] md:leading-normal box-border pb-3">
                Reshaping Dynamics of{" "}
                <span className="font-semibold text-red-500 text-2xl md:text-3xl">
                    {" "}
                    Modern~Age Business with Our Tech Solutions
                </span>
            </h2>
            <span className="text-base md:text-xl text-[#14151b]">
                Your doorway of assured growth through the commitmnent of
                qualitative delivery
            </span>
            <div className="border-b-2 border-black pt-8 md:py-12">
                <ServiceWrap />
            </div>
            <div className="mt-12">
                <FutTech />
            </div>
            <div className="relative">
                <Testimonials />
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    );
};

export default Services;
