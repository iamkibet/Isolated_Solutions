import React, { useState } from 'react';
import { CardWrapProps } from '../../types/CardWrap';
import BorderHover from '../BorderHover';

const CardWrap: React.FC<CardWrapProps> = ({ title, content, image, list, isPotrait }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const handleMouseEnter = () => {
    if (!isListOpen) {
      setIsListOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isListOpen) {
      setIsListOpen(false);
    }
  };

  const handleToggleButtonClick = () => {
    if (isPotrait) {
      setIsListOpen((prevValue) => !prevValue);
    }
  };

  return (
    <div 
      className="relative rounded-xl overflow-hidden shadow-md mb-8 p-3 items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        {image}
        {isPotrait && (
          <div 
            className={`absolute inset-0 w-full h-full flex-col justify-between p-2 lg:p-6 text-left bg-cardul z-10 overflow-x-hidden`}
            style={{
              visibility: isListOpen ? 'visible' : 'hidden',
            }}
          >
            <ul 
              className={`lg:space-y-1 text-white transition-all duration-300 ${isListOpen ? 'max-h-96 opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'}`}
              style={{
                transform: `translateY(${isListOpen ? 0 : '100%'})`,
              }}
            >
              {list.map((item, index) => (
                <li key={index} className='group relative'>
                  <span className='text-lg mr-2'>▪ </span>
                  {typeof item === 'string' ? (
                    item
                  ) : (
                    <BorderHover 
                      defBorderColor="bg-gray-700" 
                      hovBorderColor='bg-white'
                    >
                      <a href={item.link} className="text-xs md:text-sm xl:text-base">
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
        {isPotrait && (
          <button 
            type="button" 
            onClick={handleToggleButtonClick} 
            className="text-black bg-white border-2 rounded-sm border-[#02789e] py-2 px-5 mt-2 block md:hidden"
          >
            {isListOpen ? 'Close' : 'Explore'}
          </button>
        )}
      </div>
    </div>
  );
};

export default CardWrap;
