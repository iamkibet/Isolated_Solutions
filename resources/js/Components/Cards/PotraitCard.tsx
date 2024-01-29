import React, { useState } from 'react';
import { CardWrapProps } from '../../types/CardWrap';
import BorderHover from '../BorderHover';

const PotraitCard: React.FC<CardWrapProps> = ({ title, content, image, list, isPotrait, mobileImage }) => {
  const [isHovered, setIsHovered] = useState(false);
  let imgTag = <img className="h-full w-full" src={typeof image === 'string' ? image : ''} alt="Services"/>;
  let imgTagMobile = <img className=" mx-auto h-full w-full" src={mobileImage} alt="Services"/>;
  const handleHover = () => {
    setIsHovered(!isHovered);
  };


  return (
    <div
      className="md:col-span-2 grid md:grid-cols-3 items-center relative rounded-xl overflow-hidden shadow-md mb-8 md:bg-[#fbac94]"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="relative col-span-1 md:hidden">
        {imgTagMobile}
      {isPotrait && (
        <div
          className={`absolute inset-0 justify-between p-4 text-left transition-opacity ${
            isHovered ? 'opacity-90' : 'opacity-0'
          } bg-cardul z-10`}
        >
          <ul className='max-w-md space-y-1 text-gray-500'>
            {list.map((item, index) => (
              <li key={index} className='group relative overflow-hidden'>
                <span className='group-hover:text-white text-lg mr-2'>▪ </span>
                {typeof item === 'string' ? (
                  item
                ) : (
                  <BorderHover defBorderColor="bg-gray-700" hovBorderColor='bg-white'>
                    <a href={item.link} className="text-white relative overflow-hidden">
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
      <div className="p-4 col-span-2">
        <h3 className="text-2xl box-border text-[#14151b] font-extrabold mb-2">{title}</h3>
        <p className=" text-[#14151b]">{content}</p>
      </div>
      <div className="relative col-span-1 hidden md:block">
        {imgTag}
      {isPotrait && (
        <div
          className={`absolute inset-0 justify-between p-4 text-left transition-opacity ${
            isHovered ? 'opacity-90' : 'opacity-0'
          } bg-cardul z-10`}
          style={{
              transform: `translate(${isHovered ? 0 : '90%'}, ${isHovered ? 0 : '-90%'})`, // Slide in from right and top if hovered, otherwise hide off-screen
              transition: 'transform 0.3s ease-in-out', // Apply transition to transform property
              visibility: isHovered ? 'visible' : 'hidden', // Show/hide the element based on hover state
            }}
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
    </div>
  );
};

export default PotraitCard;
