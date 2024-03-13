import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../../components/Header';
import Aside from '../../components/Sidebar';
import Footer from '../../components/Footer';

const Layout = () => {
  return (
    <div className='flex items-start w-full'>
      {/* <header>
            <Header/>
        </header> */}
      <aside className='w-[12%]'>
        <Aside />
      </aside>
      <main className=' py-20 w-[100%]'>
        <Outlet />
      </main>
      {/* <footer>
            <Footer/>
        </footer> */}
    </div>
  );
};

export default Layout;
