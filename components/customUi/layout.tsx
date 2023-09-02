import { ReactNode } from 'react';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className='mb-32'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
