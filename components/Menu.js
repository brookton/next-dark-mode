import React from 'react';
import Toggle from './Toggle';

const Menu = ({ checked, onChange, setDarkMode }) => {
  return (
    <div className='navbar'>
      <Toggle checked={checked} onChange={onChange} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Menu;
