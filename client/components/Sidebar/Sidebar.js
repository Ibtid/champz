import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// import boat from '/assets/Logo/boat.svg';

function Sidebar() {
  const router = useRouter();
  return (
    <div className='hidden bg-[rgba(245,245,245,0)] fixed top-1/3 pt-14 right-[1.25vw] overflow-hidden cursor-pointer md:flex flex-col space-y-4 z-20 ...'>
      <div>
        <Image
          src={
            router.pathname === '/' || router.pathname === '/arena'
              ? '/assets/Logo/discord.svg'
              : '/assets/Logo/discordBlack.svg'
          }
          alt='discord-icon'
          height='20'
          width='20'
        />
      </div>
      <div>
        <Image
          src={
            router.pathname === '/' || router.pathname === '/arena'
              ? '/assets/Logo/twitter.svg'
              : '/assets/Logo/twitterBlack.svg'
          }
          alt='twitter-icon'
          height='20'
          width='20'
        />
      </div>
      <div>
        <Image
          src={
            router.pathname === '/' || router.pathname === '/arena'
              ? '/assets/Logo/instagram.svg'
              : '/assets/Logo/instagramBlack.svg'
          }
          alt='instagram-icon'
          height='20'
          width='20'
        />
      </div>
      <div>
        <Image
          src={
            router.pathname === '/' || router.pathname === '/arena'
              ? '/assets/Logo/boat.svg'
              : '/assets/Logo/BoatBlack.svg'
          }
          alt='boat-icon'
          height='20'
          width='20'
          layout='responsive'
        />
      </div>
    </div>
  );
}

export default Sidebar;
