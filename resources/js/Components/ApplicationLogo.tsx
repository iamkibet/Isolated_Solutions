
import LogoICon from "../assets/images/LogoIcon.png";

const ApplicationLogo = () => {
    return (
        <div className={`flex gap-3 text-center items-center justify-center`}>
            <img src={LogoICon} alt="Logo Icon" className="w-9 h-8 hidden md:block"/>
                <h1 className="text-sm xl:text-xl font-bold text-[#02789e]">Isolated <span className="text-red-500 italic">Solutions</span></h1>
        </div>
    )
}

export default ApplicationLogo;