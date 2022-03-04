import React from 'react';
import EvenCircle from '../components/RoadMap/EvenCircle';
import OddCircle from '../components/RoadMap/OddCircle';

const RoadMap = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center justify-center bg-white overflow-hidden'>
      <div className='font-Orbitron text-2xl md:text-3xl 2xl:text-[3rem] mb-[2.5rem] mt-[7rem] md:mt-[10rem] 2xl:mt-[14rem] 2xl:mb-[7rem]'>
        Road Map
      </div>
      {/*component left*/}
      <OddCircle
        number='1'
        content='Build a community. We are here for the long run.
'
      />
      {/*Join*/}
      <div className='h-[4.5rem] w-[0.25rem] bg-red'></div>
      {/*component right*/}
      <EvenCircle
        number='2'
        content='Become a Champion. Live as a Champion. Bond with the Champions.'
      />
      <div className='h-[4.5rem] w-[0.25rem] bg-red'></div>
      <OddCircle
        number='3'
        content='ChampionZ step into the Arena. All of the ChampionZ gain access to exclusive events, exclusive channels, dope merchandise, and much more. '
      />
      <div className='h-[4.5rem] w-[0.25rem] bg-red'></div>
      {/*component right*/}
      <EvenCircle
        number='4'
        content='We give back as ChampionZ. Continous and transparent charity donations throughout the journey.'
      />
      <div className='h-[4.5rem] w-[0.25rem] bg-red'></div>
      <OddCircle
        number='5'
        content='ChampionZ armor up with all kinds of merchandise.'
      />
      <div className='h-[4.5rem] w-[0.25rem] bg-red'></div>
      {/*component right*/}
      <EvenCircle number='6' content='ChampionZ come to life - TBD' />
      <div className='h-[4.5rem] w-[0.25rem] bg-red'></div>
      <OddCircle number='7' content='What can you bring to the Arena?' />
      <div className='h-[8rem] w-screen '></div>
    </div>
  );
};

export default RoadMap;
