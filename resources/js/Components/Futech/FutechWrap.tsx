

import React from 'react';

const FutechWrap: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  return (
    <div className="mx-auto mb-8 mt-8 ">
      <div className="border-t-8 border-[#14151b] w-64 md:w-[90%]">
        <h3 className="text-xl md:text-3xl font-extrabold mb-2 mt-3">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base">{content}</p>
      </div>
    </div>
  );
};

export default FutechWrap;
