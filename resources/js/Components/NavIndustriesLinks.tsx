import { ReactNode } from 'react';
import NavCard from './NavCard';
import BorderHover from './BorderHover';

interface IndustriesLinksProps {
    children?: ReactNode;
}

function IndustriesLinks({children}: IndustriesLinksProps) {
    return (
        <div className="max-w-3xl grid p-4">
            <div className="grid text-xs font-medium">
                <NavCard>
                    <div className="w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover defBorderColor='bg-slate-200' hovBorderColor='bg-black'>
                            <a href="#" className="py-1 hover:text-black">eCommerce</a>
                        </BorderHover>
                        <BorderHover defBorderColor='bg-slate-200' hovBorderColor='bg-black'>
                            <a href="#" className="py-1 hover:text-black">SaaS</a>
                        </BorderHover>
                        <BorderHover defBorderColor='bg-slate-200' hovBorderColor='bg-black'>
                            <a href="#" className="py-1 hover:text-black">FinTech</a>
                        </BorderHover>
                        <BorderHover defBorderColor='bg-slate-200' hovBorderColor='bg-black'>
                            <a href="#" className="py-1 hover:text-black">EdTech</a>
                        </BorderHover>
                        <BorderHover defBorderColor='bg-slate-200' hovBorderColor='bg-black'>
                            <a href="#" className="py-1 hover:text-black">Wellness</a>
                        </BorderHover>
                        <BorderHover defBorderColor='bg-slate-200' hovBorderColor='bg-black'>
                            <a href="#" className="py-1 hover:text-black">AgriTech</a>
                        </BorderHover>
                        <BorderHover defBorderColor='bg-slate-200' hovBorderColor='bg-black'>
                            <a href="#" className="py-1 hover:text-black">Insurance</a>
                        </BorderHover>
                        <BorderHover defBorderColor='bg-slate-200' hovBorderColor='bg-black'>
                            <a href="#" className="py-1 hover:text-black">Government</a>
                        </BorderHover>
                    </div>
                </NavCard>
                </div>
        </div>
    );
}

export default IndustriesLinks;
