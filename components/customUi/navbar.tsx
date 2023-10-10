'use client';

import { useRouter } from 'next/navigation';
import { ToggleTheme } from './toggleTheme';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Quiz', path: '/quiz' },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <div className='fixed top-0 z-10 flex w-full items-center justify-between bg-amber-600 px-4'>
      {navItems.map((item, id) => {
        return (
          <div onClick={() => router.push(item.path)} key={id}>
            {item.name}
          </div>
        );
      })}
      <ToggleTheme />
    </div>
  );
};
export default Navbar;
