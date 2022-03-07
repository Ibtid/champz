import React from "react";

import Image from "next/image";

// import boat from '/assets/Logo/boat.svg';

function Sidebar() {
  return (
    <div className="hidden bg-[rgba(245,245,245,0)] fixed top-1/3 pt-14 right-10 overflow-hidden cursor-pointer md:flex flex-col space-y-4 ...">
      <div>
        <Image
          
          src="/assets/Logo/boat.svg"
          alt="boat-icon"
          height="20"
          width="20"
        />
      </div>
      <div >
        <Image
          
          src="/assets/Logo/discord.svg"
          alt="discord-icon"
          height="20"
          width="20"
        />
      </div>
      <div >
        <Image
         
          src="/assets/Logo/instagram.svg"
          alt="instagram-icon"
          height="20"
          width="20"
        />
      </div>
      <div >
        <Image
          
          src="/assets/Logo/twitter.svg"
          alt="twitter-icon"
          height="20"
          width="20"
        />
      </div>
    </div>
  );
}

export default Sidebar;
