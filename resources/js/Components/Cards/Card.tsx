
import React from "react";
import CardWrap from "./CardWrap";
import PotraitCard from "./PotraitCard";


const ServiceWrap = () => {

    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                < CardWrap
                    title="Cuptivating Design Services"
                    content="A good design is thefirst impression you would make on your customers."
                    image={<img className="h-full w-full" src="https://www.sparxitsolutions.com/assets-style/images/captivating-designs.jpg" alt="Services"/>}
                    list={[
                        {text: 'web design', link: '#'},
                        {text: 'eCommerce Website Design', link: '#'},
                        {text: 'Logo design', link: '#'},
                        {text: 'Corporate Website Design', link: '#'},
                        {text: 'B2B Website Design', link: '#'},
                    ]} 
                    isPotrait={true}
                />

                < PotraitCard 
                title="Web and Mobile App Development"
                content="Begin your journey to create revenue-generating digital solutions for your business."
                mobileImage="https://vtechpk.com/wp-content/uploads/2022/02/Custom-Mobile-App-Development.jpg"
                image="https://www.sparxitsolutions.com/assets-style/images/web-app.jpg"
                list={[
                        {text: 'Mobile App Development', link: '#'},
                        {text: 'Android App Development', link: '#'},
                        {text: 'Hybrid App development', link: '#'},
                        {text: 'Flutter App development', link: '#'},
                        {text: 'PhP App Development', link: '#'},
                        {text: 'Python App Development', link: '#'},
                        {text: 'React Native App Development', link: '#'},
                        {text: 'Java Development', link: '#'},
                        {text: 'iOS App Development', link: '#'},
                        {text: 'ReactJS Development', link: '#'},
                    ]}
                    isPotrait={true}
                />
            < CardWrap
                title="Outcome DriveneCommerce Development"
                content="Expand the community of the fastest-growing insustry domains in the age of digitalisation"
                image={<img className="h-full w-full" src="https://www.sparxitsolutions.com/assets-style/images/outcome-driven.jpg" alt="Services"/>}
                list={[
                        {text: 'WooCommerce Development', link: '#'},
                        {text: 'eCommerce Development', link: '#'},
                        {text: 'B2B eCommerce', link: '#'},
                        {text: 'Wordpress Development', link: '#'},
                        {text: 'Shopify Development', link: '#'},
                        {text: 'Magento Development', link: '#'},
                        {text: 'BigCommerce Development', link: '#'},
                    ]}
                    isPotrait={true}
            />
            < CardWrap
                title="Blockchain Development Services"
                content="We create secure blockchain networks with increased traceability of data and transactions"
                image={<img className="h-full w-full" src="https://www.sparxitsolutions.com/assets-style/images/blockchain-development-services.jpg" alt="Services"/>}
                list={[
                        {text: 'Blockchain Development', link: '#'},
                        {text: 'Enterprise Blockchain Development', link: '#'},
                        {text: 'NFT Marketplace Development', link: '#'},
                        {text: 'Cryptocurrency Wallet Development', link: '#'},
                        {text: 'Cryptocurrency Exchange Development', link: '#'},
                        {text: 'Smart Contract Development', link: '#'},
                    ]}
                    isPotrait={true}
            />
            < CardWrap
                title="Cloud Integration Services"
                content="Intergrating cloud technology to provide your business resources a wider and safer space"
                image={<img className="h-full w-full" src="https://www.sparxitsolutions.com/assets-style/images/cloud-integration.jpg" alt="Services"/>}
                list={[
                        {text: 'Salesforce', link: '#'},
                        {text: 'AWS', link: '#'},
                        {text: 'Azure', link: '#'},
                        {text: 'Google Cloud', link: '#'},

                    ]}
                    isPotrait={true}
            />
        </div>
    )
}

export default ServiceWrap;
