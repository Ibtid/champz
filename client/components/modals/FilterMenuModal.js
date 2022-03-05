import React, { useState, useRef, useEffect } from 'react';
import FilterMenu from '../FilterMenu/FilterMenu';
import ReactDOM from 'react-dom';

const FilterMenuModal = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div className='h-screen w-screen relative top-[0rem] mt-[-100vh] z-50 bg-[rgba(0,0,0,0.5)]'>
        <FilterMenu />
      </div>,
      document.getElementById('modal-filter-menu')
    );
  } else {
    return null;
  }
};

export default FilterMenuModal;
