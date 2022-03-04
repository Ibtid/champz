import React from 'react';
import Image from 'next/image';
import srcpic from '../../public/assets/icons/infographic-elements 1.svg';

const FilterItems = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex items-center justify-center mr-20'>
        <div className='h-[1rem] w-[1rem] mr-2'>
          <Image src={srcpic} layout='responsive' />
        </div>
        <div>ELEMENT</div>
      </div>
      <div className='h-[1rem] w-[1rem]'>
        <Image src={srcpic} layout='responsive' />
      </div>
    </div>
  );
};

export default FilterItems;
