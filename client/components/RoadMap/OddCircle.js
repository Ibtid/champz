import React from 'react';

const OddCircle = () => {
  return (
    <div className='flex relative'>
      <div className='h-[2.25rem] w-[2.25rem] z-5 rounded-full bg-red text-white grid text-lg font-Inter place-content-center'>
        1
      </div>
      <div className='absolute top-[45%] right-[-8.5rem]  flex place-content-center'>
        <div className='h-[0.25rem] w-[1.5rem] bg-red '></div>
        <div className='h-[0.8rem] w-[0.8rem] rounded-full bg-red mt-[-0.28rem] ml-[-0.3rem] mr-[0.3rem]'></div>
        <div className='w-[6.5rem] bg-red text-white text-xs grid place-content-center p-2 mt-[-1rem] font-Roboto'>
          ChampionZ step into the Arena. All of the ChampionZ gain access to
          exclusive events, exclusive channels, dope merchandise, and much more.
        </div>
      </div>
    </div>
  );
};

export default OddCircle;
