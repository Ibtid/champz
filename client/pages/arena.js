import React from 'react';

const arena = () => {
  return (
    <div className='arena_screen'>
      <div className='main_arena_container'>
        <div className='left_arena_container'>
          <div>
            <div className='arena_heading_white'>We step into the</div>
            <div className='arena_heading_red'>Arena.</div>
          </div>
          <div className='arena_body_text font-Roboto'>
            <div className=' md:text-lg 2xl:text-2xl mb-1 md:mb-3 2xl:mb-6'>
              We fight till the end.{' '}
            </div>
            <div className='md:text-lg 2xl:text-2xl mb-1 md:mb-3 2xl:mb-6'>
              We rise as ChampZ.{' '}
            </div>
            <div className='md:text-lg 2xl:text-2xl mb-1 md:mb-3 2xl:mb-6'>
              10,000 ChampionZ come together to conquer the world.
            </div>
            <div className='md:text-lg  2xl:text-2xl mb-1 md:mb-3 2xl:mb-6 '>
              {' '}
              We bond with one another and we build the community together.{' '}
            </div>

            <div className='md:text-lg 2xl:text-2xl'>
              The Arena gives all the ChampionZ access to special events,{' '}
            </div>
            <div className='md:text-lg 2xl:text-2xl mb-1 md:mb-3 2xl:mb-6 '>
              secret channels, dope merchandise, and much more.
            </div>
          </div>

          <div className=' arena_end_text_white'>
            <div> Do you have what it takes to</div>
            <div>
              {' '}
              be a <span className=' arena_end_text_red'>Champion? </span>
            </div>
          </div>
        </div>
        <div className='arena_right_container'></div>
      </div>
    </div>
  );
};

export default arena;
