import React, { useState, useRef, useEffect } from 'react';
import FilterMenu from '../FilterMenu/FilterMenu';
import ReactDOM from 'react-dom';

const FilterMenuModal = (props) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const ref = useRef();
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (showForm && ref.current && !ref.current.contains(e.target)) {
        setShowForm(false);
        props.close();
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [showForm]);

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div
        className='filterMenuModal'
        onClick={() => {
          setShowForm(true);
        }}>
        <div ref={ref}>{showForm && <FilterMenu />}</div>
      </div>,
      document.getElementById('modal-filter-menu')
    );
  } else {
    return null;
  }
};

export default FilterMenuModal;
