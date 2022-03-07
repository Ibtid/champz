import React from 'react';
import Image from 'next/image';
import add from '../../public/assets/icons/add.svg';

const FilterItems = (props) => {
  return (
    <div className='flex items-center justify-between p-2  border-b-[1px] border-gray'>
      <div className='flex items-center justify-center mr-20'>
        <div className='h-[1rem] w-[1rem] mr-2'>
          <Image src={props.srcpic} layout='responsive' />
        </div>
        <div>{props.content}</div>
      </div>
      <div className='h-[0.8rem] w-[0.8rem]'>
        <Image src={add} layout='responsive' />
      </div>
    </div>
  );
};

export default FilterItems;
