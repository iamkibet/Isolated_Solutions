import React, { ReactNode, useState } from 'react';

interface BorderHoverProps {
  children: ReactNode;
  defBorderColor?: string;
  hovBorderColor?: string;
  className?: string;
}

const BorderHover: React.FC<BorderHoverProps> = ({
  children,
  defBorderColor = 'bg-gray-300',
  hovBorderColor = 'bg-slate-800',
  className,
}: BorderHoverProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const borderColor = isHovered ? hovBorderColor : defBorderColor;

  return (
    <span
      className={`relative group w-fit z-10 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={`absolute left-0 bottom-0 w-full h-0.5 group-hover:w-0 transition-all duration-700 ${defBorderColor}`}
      ></span>
      <span
        className={`absolute left-0 bottom-0 pt-px w-0 h-0.5 group-hover:w-full transition-all duration-700 ${borderColor}`}
      ></span>
      {children}
    </span>
  );
};

export default BorderHover;
