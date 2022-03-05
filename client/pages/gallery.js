import React, { useState, useRef, useEffect } from 'react';

import filterIcon from '../public/assets/icons/filter.svg';
import myCollections from '../public/assets/icons/myCollection.svg';
import shuffle from '../public/assets/icons/shuffle.svg';

import Image from 'next/image';
import GalleryCard from '../components/GalleryCard/GalleryCard';
import FilterMenu from '../components/FilterMenu/FilterMenu';
import FilterMenuModal from '../components/modals/FilterMenuModal';

const gallery = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7];

  return (
    <div className='min-w-screen min-h-screen bg-white pt-[6rem] md:pt-[7rem]'>
      <FilterMenuModal />
      {/*====================================================== Gallery and buttons ========================================================*/}
      <div className='bg-white ml-[3vw] flex mr-[3vw] items-center justify-between pb-2 md:pb-5 border-b-[1px] border-gray sticky top-20 z-10'>
        <div className='font-Orbitron md:text-[1.75rem] 2xl:text-[2rem]'>
          GALLERY
        </div>
        <div className='flex'>
          <div
            className='md:w-[10rem] p-1 2xl:p-2 bg-galleryButton flex place-content-center rounded-md cursor-pointer relative'
            onClick={() => {
              setOpenFilter(!openFilter);
            }}>
            <div className='h-[1rem] w-[1rem] md:mt-1 '>
              <Image src={filterIcon} layout='responsive' />
            </div>
            <div className='ml-[1rem] hidden md:flex place-content-center'>
              FILTER
            </div>
            {openFilter && <FilterMenu />}
          </div>
          <div className='md:w-[10rem] ml-4 mr-4 md:ml-8 md:mr-8 p-1 2xl:p-2 bg-galleryButton flex place-content-center rounded-md cursor-pointer'>
            <div className='h-[1rem] w-[1rem] md:mt-1.5 '>
              <Image src={myCollections} layout='responsive' />
            </div>
            <div className='ml-[0.75rem] hidden md:flex place-content-center'>
              MY CHAMPZ
            </div>
          </div>
          <div className='md:w-[10rem] p-1 2xl:p-2 bg-galleryButton flex place-content-center rounded-md cursor-pointer'>
            <div className='h-[1rem] w-[1rem] md:mt-1 '>
              <Image src={shuffle} layout='responsive' />
            </div>
            <div className='ml-[1rem] hidden md:flex place-content-center'>
              SHUFFLE
            </div>
          </div>
        </div>
      </div>
      {/*====================================================== Gallery and buttons ========================================================*/}
      <div className='mt-5 w-[94vw] ml-[3vw] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7'>
        {cardArray.map((card, index) => (
          <div className='mb-[2rem]' key={index}>
            <GalleryCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default gallery;
