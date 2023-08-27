'use client';

import { ToggleTheme } from './toggleTheme';

const CustomNavbar = () => {
  return (
    <div className='fixed top-0 flex w-full items-center justify-between bg-amber-600 px-2'>
      My navbar
      <ToggleTheme />
    </div>
  );
};
export default CustomNavbar;
