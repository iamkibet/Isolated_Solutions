import { ReactNode } from 'react';

interface NavCardProps {
    title?: string;
    children?: ReactNode
}

function NavCard({title, children} : NavCardProps) {
        
    return (
        <div className="flex flex-col h-fit bg-black text-slate-100">
            {title && (<h4 className="py-2 px-3 bg-black font-semibold">
                {title}
            </h4>)}
            {children && (
            <div className="relative h-full flex flex-col bg-white">
                <div className="absolute top-0 h-full bg-black w-1/2"></div>
                <div className="z-10 mx-1 mb-1 py-3 px-3 pb-4 flex flex-col gap-y-2 bg-white text-slate-800">{children}</div>
            </div>
            )}
        </div>
    )
}

export default NavCard;
