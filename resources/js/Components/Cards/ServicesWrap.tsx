import ServiceWrap from "./Card";
import FutTech from "../Futech/FutTech";
import Testimonials from "../Testimonials";
import Footer from "../Footer";

const Services = () => {


    return ( 
        <div className="space-y-6">
            <h2 className="font-extrabold text-4xl text-[#14151b] box-border">
                Reshaping Dynamics of Modern-Age <br /> Business with Our Business Solutions
            </h2>
            <span className="text-xl font-bold text-[#14151b]">
                Your doorway of assured growth through the commitmnent of qualitative delivery
            </span>
            <div className="border-b-2 border-black">
                < ServiceWrap />
            </div>
            <div>
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
}
 
export default Services;