import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import logo from '../../public/assets/Logo/Steve_kim_champz_logo_with_black_bg (2) 1.svg';
import { useRouter } from 'next/router';
import NavModal from '../modals/NavModal';

const Navbar = () => {
  const [background, setBackground] = useState('bg-black text-white');
  const [hamburger, setHamburger] = useState('bg-white');
  const [shop, setShop] = useState('SHOP');
  const [open, setOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      setBackground('bg-[rgba(0,0,0,0)] text-white');
      setHamburger('bg-white');
    } else if (router.pathname === '/arena') {
      setBackground('bg-blue text-white');
      setHamburger('bg-white');
    } else if (router.pathname === '/fightclub') {
      setBackground('bg-[rgba(0,0,0,0)]');
      setHamburger('bg-black');
    } else {
      setBackground('bg-white text-black');
      setHamburger('bg-black');
    }
  }, [router.pathname]);

  return (
    <div
      className={`${background} w-screen h-[5rem] z-20 flex items-center justify-between fixed top-0 left-0`}>
      {open && (
        <NavModal
          close={() => {
            setOpen(false);
          }}
        />
      )}
      <div className='ml-[3vw] w-[4rem] md:w-[5rem] mt-0 2xl:w-[8rem] md:ml-[3vw]'>
        <img
          src='https://i.ibb.co/yyncg9D/Steve-kim-champz-logo-with-black-bg-2-1.png'
          alt='Steve-kim-champz-logo-with-black-bg-2-1'
          border='0'
        />
        {/*<Image src={logo} layout='responsive' />*/}
      </div>
      <div
        className='mr-[6vw] md:hidden'
        onClick={() => {
          setOpen(true);
        }}>
        <div className={`h-[0.25rem] w-[2rem] ${hamburger} rounded-sm`}></div>
        <div
          className={`h-[0.25rem] w-[2rem] ${hamburger} mt-[0.25rem] mb-[0.25rem] rounded-sm`}></div>
        <div className={`h-[0.25rem] w-[2rem] ${hamburger} rounded-sm`}></div>
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
        <div
          onMouseEnter={() => {
            setShop('COMING SOON');
          }}
          onMouseLeave={() => {
            setShop('SHOP');
          }}
          className='ml-8 cursor-pointer'>
          {shop}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
