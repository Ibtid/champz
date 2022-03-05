import React from 'react';
import FilterItems from './FilterItems';
import elementIcon from '../../public/assets/icons/infographic-elements 1.svg';
import hair from '../../public/assets/icons/female-hairs 1.svg';
import shirt from '../../public/assets/icons/shirt 1.svg';
import sword from '../../public/assets/icons/swords 1.svg';
import cap from '../../public/assets/icons/cap 1.svg';
import skin from '../../public/assets/icons/skin-care 1.svg';
import necklace from '../../public/assets/icons/necklace 1.svg';
import eyeglasses from '../../public/assets/icons/eyeglasses 1.svg';
import lips from '../../public/assets/icons/lips 1.svg';
import earings from '../../public/assets/icons/earings 1.svg';
import search from '../../public/assets/icons/IMAGE.svg';
import invertedLogo from '../../public/assets/Logo/Steve_kim_champz_logo_with_black_bg (2) 1 (1).svg';
import Image from 'next/image';

const FilterMenu = () => {
  return (
    <div className='scale-[0.8] md:scale-[0.725] md:top-[-3rem] md:2xl:scale-[1] pt-8 pb-8 pr-4 pl-4 absolute top-[-2rem] left-[-12.5rem] md:left-[-8rem] 2xl:top-[2.5rem] bg-white shadow-lg rounded-md font-Roboto'>
      {/*item */}
      <div className='flex items-center justify-between p-2  border-b-[1px] border-gray'>
        <div className='flex items-center justify-center mr-20'>
          <div className='h-[1.5rem] w-[1.25rem] relative mr-2  mb-2 '>
            <Image
              src={invertedLogo}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              className=''
            />
          </div>
          <div className='text-red '>RARE CHAMPZ</div>
        </div>
        <div className='w-[2rem] h-[0.8rem] rounded-lg bg-galleryButton relative'>
          <div className='absolute h-[1.25rem] w-[1.25rem] rounded-full bg-[#ffffff] shadow-lg top-[-25%] left-0'></div>
        </div>
      </div>
      <FilterItems srcpic={search} content='' />
      <FilterItems srcpic={elementIcon} content='ELEMENT' />
      <FilterItems srcpic={sword} content='WEAPON' />
      <FilterItems srcpic={shirt} content='CLOTHING' />
      <FilterItems srcpic={hair} content='HAIR' />
      <FilterItems srcpic={cap} content='HEADGEAR' />
      <FilterItems srcpic={skin} content='FACE' />
      <FilterItems srcpic={necklace} content='NECK' />
      <FilterItems srcpic={eyeglasses} content='EYES' />
      <FilterItems srcpic={lips} content='MOUTH' />
      <FilterItems srcpic={earings} content='EAR' />
      <div className='flex items-center p-2'>
        <div className='h-[0.8rem] w-[0.8rem] border-[2px] rounded-sm border-black mr-2'></div>
        <div>BACKGROUND</div>
      </div>
    </div>
  );
};

export default FilterMenu;
