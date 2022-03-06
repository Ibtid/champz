import React from 'react';

const fightclub = () => {
  return (
    <div className='h-screen w-screen overflow-hidden bg-white flex items-center justify-center relative'>
      <img
        className='mb-[12.5rem] md:mb-[0rem] w-[100rem] md:w-[80rem] 2xl:w-[110rem] '
        src='https://i.ibb.co/jVbjN5z/Fightclub.png'
        alt='Fightclub'
        border='0'></img>
      <div className='font-Orbitron text-bg font-bold absolute top-[25vh]  md:top-[22vh] left-[20vw] md:left-[26vw] text-2xl md:text-5xl 2xl:text-7xl'>
        FIGHT
      </div>
      <div className='font-Orbitron  text-red text-bg font-bold absolute top-[25vh] md:top-[22vh] right-[20vw] md:right-[26vw] text-2xl md:text-5xl 2xl:text-7xl'>
        CLUB
      </div>
      <div className='absolute top-[45vh] md:top-[48vh] flex flex-wrap items-center justify-center'>
        <div className='flex items-center justify-center'>
          <div className='font-Orbitron text-6xl md:text-9xl text-gray mr-5'>
            1
          </div>
          <div className='w-[10rem] md:w-[13rem] text-xs md:text-base font-Roboto text-black'>
            We are all ChampionZ in life
          </div>
        </div>
        <div className='flex items-center justify-center mr-3 ml-3 mt-5 mb-5'>
          <div className='font-Orbitron text-6xl md:text-9xl text-gray mr-5'>
            2
          </div>
          <div className='w-[10rem] md:w-[13rem] text-xs md:text-base font-Roboto text-black'>
            No ChampionZ can make the journey on their own. We surround
            ourselves with other ChampionZ
          </div>
        </div>
        <div className='flex items-center justify-center m-3'>
          <div className='font-Orbitron text-6xl md:text-9xl text-gray mr-5'>
            3
          </div>
          <div className='w-[10rem] md:w-[13rem] text-xs md:text-base font-Roboto text-black'>
            We fight till the end. Don't quit and live the rest of your lives as
            ChampionZ. #WAGMI
          </div>
        </div>
      </div>
    </div>
  );
};

export default fightclub;
