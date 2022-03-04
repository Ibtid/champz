import React from 'react';

const OddCircle = (props) => {
  return (
    <div className='flex relative'>
      <div
        className={`h-[2.25rem] md:h-[4rem] w-[2.25rem] md:w-[4rem] z-10 rounded-full ${
          props.explored ? 'maps__explored' : 'maps__unexplored'
        } text-white grid text-lg md:text-xl font-Inter place-content-center`}>
        {props.number}
      </div>
      <div className='absolute top-[45%] right-[-8.5rem] md:right-[-27.5rem]  flex place-content-center'>
        <div className='h-[0.25rem] md:h-[0.3rem] w-[1.5rem] md:w-[8rem] bg-red '></div>
        <div className='h-[0.8rem] md:h-[1rem] w-[0.8rem] md:w-[1rem] rounded-full bg-red mt-[-0.28rem] md:mt-[-0.3rem] ml-[-0.3rem] mr-[0.3rem] md:mr-[1rem]'></div>
        <div className='w-[6.5rem] md:w-[18rem] bg-red text-white text-xs md:text-base grid place-content-center p-2 md:p-5 mt-[-1rem] font-Roboto'>
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default OddCircle;
