import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const NavItemsModals = (props) => {
  const [background, setBackground] = useState('bg-black text-white');
  const [shop, setShop] = useState('SHOP');
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
    <div className='flex justify-between flex-col bg-white h-[100vh] w-[60vw] fixed top-[0rem] right-[0rem] font-Roboto text-lg'>
      <div className='p-2 pt-5'>
        <div
          className='p-2 mb-2 mt-2 border-b-2'
          onClick={() => {
            router.push('/');
            props.close();
          }}>
          HOME
        </div>
        <div
          className='p-2 mb-2 mt-2 border-b-2'
          onClick={() => {
            router.push('/arena');
            props.close();
          }}>
          THE ARENA
        </div>
        <div
          className='p-2 mb-2 mt-2 border-b-2'
          onClick={() => {
            router.push('/fightclub');
            props.close();
          }}>
          FIGHT CLUB
        </div>
        <div
          className='p-2 mb-2 mt-2 border-b-2'
          onClick={() => {
            router.push('/roadmap');
            props.close();
          }}>
          ROADMAP
        </div>
        <div
          className='p-2 mb-2 mt-2 border-b-2'
          onClick={() => {
            router.push('/gallery');
            props.close();
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
          className='p-2 mb-2 mt-2 border-b-2'>
          {shop}
        </div>
      </div>
      <div className='flex justify-center items-center p-2 pb-5'>
        <div className='mr-3'>
          <Image
            src={'/assets/Logo/discordBlack.svg'}
            alt='discord-icon'
            height='20'
            width='20'
          />
        </div>
        <div className='ml-3 mr-3'>
          <Image
            src={'/assets/Logo/twitterBlack.svg'}
            alt='twitter-icon'
            height='20'
            width='20'
          />
        </div>
        <div className='ml-3 mr-3'>
          <Image
            src={'/assets/Logo/instagramBlack.svg'}
            alt='instagram-icon'
            height='20'
            width='20'
          />
        </div>
        <div className='ml-3'>
          <Image
            src={'/assets/Logo/BoatBlack.svg'}
            alt='boat-icon'
            height='20'
            width='20'
          />
        </div>
      </div>
    </div>
  );
};

export default NavItemsModals;
