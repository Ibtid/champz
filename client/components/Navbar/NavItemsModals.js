import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const NavItemsModals = (props) => {
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
    <div className='bg-white h-[100vh] w-[60vw] fixed top-[0rem] right-[0rem] font-Roboto text-lg'>
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
        <div className='p-2 mb-2 mt-2 border-b-2'>SHOP</div>
      </div>
    </div>
  );
};

export default NavItemsModals;
