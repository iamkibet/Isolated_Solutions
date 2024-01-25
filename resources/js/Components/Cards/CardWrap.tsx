import React, { useState } from 'react';
import { CardWrapProps } from '../../types/CardWrap';
import BorderHover from '../BorderHover';

const CardWrap: React.FC<CardWrapProps> = ({ title, content, image, list, isPotrait }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-md mb-8 p-3 items-center"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="relative">
        {image}
        {isPotrait && (
          <div
            className={`absolute inset-0 w-full h-full flex flex-col justify-between p-6 text-left transition-opacity ${
              isHovered ? 'opacity-90' : 'opacity-0'
            } bg-cardul z-10`}
          >
            <ul className='max-w-md space-y-1 text-white hover:text-gray-500 w-fit'>
              {list.map((item, index) => (
                <li key={index} className='group relative overflow-hidden'>
                  <span className='group-hover:text-white text-lg mr-2'>▪ </span>
                  {typeof item === 'string' ? (
                    item
                  ) : (
                    <BorderHover defBorderColor="bg-gray-700" hovBorderColor='bg-white'>
                      <a href={item.link} className="hover:text-white relative overflow-hidden">
                      {item.text}
                      </a>
                    </BorderHover>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-2xl box-border text-[#14151b] font-extrabold mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default CardWrap;
