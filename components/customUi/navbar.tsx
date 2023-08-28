'use client';

import { ToggleTheme } from './toggleTheme';

const Navbar = () => {
  return (
    <div className='fixed top-0 flex w-full items-center justify-between bg-amber-600 px-4'>
      Home
      <ToggleTheme />
    </div>
  );
};
export default Navbar;
