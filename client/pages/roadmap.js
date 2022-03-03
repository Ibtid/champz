import React from 'react';
import OddCircle from '../components/RoadMap/OddCircle';

const RoadMap = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center justify-center bg-white'>
      <div className='font-Orbitron text-2xl mb-[2.5rem]'>Road Map</div>
      {/*component left*/}
      <OddCircle />
      {/*Join*/}
      <div className='h-[4.5rem] w-[0.25rem] bg-red'></div>
      {/*component right*/}
    </div>
  );
};

export default RoadMap;
