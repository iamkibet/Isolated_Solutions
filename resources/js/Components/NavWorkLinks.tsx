import { ReactNode } from 'react';
import NavCard from './NavCard';
import BorderHover from './BorderHover';

interface WorkLinksProps {
    children?: ReactNode;
}

function WorkLinks({children}: WorkLinksProps) {
    return (
        <div className="max-w-3xl grid p-4">
            <div className="p-4 grid gap-y-3 text-xs font-medium">
                <NavCard>
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover defBorderColor="bg-slate-200" hovBorderColor="bg-black">
                            <a href="#" className="py-1 hover:text-black">Portfolio</a>
                        </BorderHover>
                        <BorderHover defBorderColor="bg-slate-200" hovBorderColor="bg-black">
                            <a href="#" className="py-1 hover:text-black">Case Studies</a>
                        </BorderHover>
                    </div>
                </NavCard>
                </div>
        </div>
    );
}

export default WorkLinks;
