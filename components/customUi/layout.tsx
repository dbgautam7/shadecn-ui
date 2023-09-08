import { ReactNode } from 'react';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className='mx-4 mb-56 mt-16 overflow-y-auto'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
