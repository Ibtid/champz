import React from 'react';
import FilterItems from './FilterItems';

const FilterMenu = () => {
  return (
    <div className='absolute bottom-[-1.5rem] bg-white shadow-md'>
      {/*item */}
      <FilterItems />
    </div>
  );
};

export default FilterMenu;
