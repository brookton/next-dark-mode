import React from 'react';

const Toggle = ({ checked, onChange, setDarkMode }) => {
  return (
    <div className='dark-mode-toggle'>
      <button
        type='button'
        onClick={() => {
          setDarkMode(true);
        }}
      >
        ☀
      </button>
      <span className='toggle-control'>
        <input
          className='dmcheck'
          type='checkbox'
          checked={checked}
          onChange={onChange}
          id='dmcheck'
        />
        <label htmlFor='dmcheck' />
      </span>
      <button
        type='button'
        onClick={() => {
          setDarkMode(false);
        }}
      >
        ☾
      </button>
    </div>
  );
};

export default Toggle;
