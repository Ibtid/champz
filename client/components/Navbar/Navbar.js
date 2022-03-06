import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import logo from '../../public/assets/Logo/Steve_kim_champz_logo_with_black_bg (2) 1.svg';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [background, setBackground] = useState('bg-black text-white');

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      setBackground('bg-black text-white');
    } else if (router.pathname === '/arena') {
      setBackground('bg-blue text-white');
    } else if (router.pathname === '/fightclub') {
      setBackground('bg-[rgba(0,0,0,0)]');
    } else {
      setBackground('bg-white text-black');
    }
  }, [router.pathname]);

  return (
    <div
      className={`${background} w-screen h-[5rem] z-20 flex items-center justify-between fixed top-0 left-0`}>
      <div className='ml-[3vw] w-[6.5rem] mt-6 2xl:w-[8rem] md:ml-[3vw]'>
        {/*<img
          className='h-[4rem] w-[5rem] md:h-[5rem] md:w-[6.5rem]'
          src='https://i.ibb.co/NF4n961/Steve-kim-champz-logo-with-black-bg-2-1.png'
          alt='Steve-kim-champz-logo-with-black-bg-2-1'
        />*/}
        <Image src={logo} layout='responsive' />
      </div>
      <div className='mr-[6vw] md:hidden'>
        <div className='h-[0.25rem] w-[2.25rem] bg-red rounded-sm'></div>
        <div className='h-[0.25rem] w-[2.25rem] bg-red mt-[0.25rem] mb-[0.25rem] rounded-sm'></div>
        <div className='h-[0.25rem] w-[2.25rem] bg-red rounded-sm'></div>
      </div>
      <div className='hidden md:flex mr-[3vw] items-center font-Roboto xl:text-base 2xl:text-lg '>
        <div
          className={`ml-8 cursor-pointer ${
            router.pathname === '/' ? 'font-bold' : ''
          }`}
          onClick={() => {
            router.push('/');
          }}>
          HOME
        </div>
        <div
          className={`ml-8 cursor-pointer ${
            router.pathname === '/arena' ? 'font-bold' : ''
          }`}
          onClick={() => {
            router.push('/arena');
          }}>
          THE ARENA
        </div>
        <div
          className={`ml-8 cursor-pointer ${
            router.pathname === '/fightclub' ? 'font-bold' : ''
          }`}
          onClick={() => {
            router.push('/fightclub');
          }}>
          FIGHT CLUB
        </div>
        <div
          className={`ml-8 cursor-pointer ${
            router.pathname === '/roadmap' ? 'font-bold' : ''
          }`}
          onClick={() => {
            router.push('/roadmap');
          }}>
          ROADMAP
        </div>
        <div
          className={`ml-8 cursor-pointer ${
            router.pathname === '/gallery' ? 'font-bold' : ''
          }`}
          onClick={() => {
            router.push('/gallery');
          }}>
          GALLERY
        </div>
        <div className='ml-8 cursor-pointer'>SHOP</div>
      </div>
    </div>
  );
};

export default Navbar;
