import React, {ReactNode, useState} from 'react';

interface BorderHoverProps {
    children: ReactNode;
    defBorderColor?: string;
    hovBorderColor?: string;
}

const BorderHover: React.FC<BorderHoverProps> = ({children,defBorderColor=`bg-gray-300`, hovBorderColor=`bg-slate-800`}: BorderHoverProps) => {
    const [hoverColor, setHoverColor] = useState(hovBorderColor);
    const [defaultColor, setDefaultColor] = useState(defBorderColor);

    return (
        <span className="relative group w-fit z-10">
            <span className={`absolute left-0 bottom-0 w-full h-0.5 group-hover:w-0 transition-all duration-700 ` + defaultColor}></span>
            <span className={`absolute left-0 bottom-0 pt-px w-0 h-0.5 group-hover:w-full transition-all duration-700 ${hoverColor}`}></span>
            {children}
        </span>
    );
};

export default BorderHover;
