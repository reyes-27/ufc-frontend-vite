import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import Root from '../routes/root'
import 'bootstrap/dist/css/bootstrap.css';

const Layout = ({children}) => {
  return (
    <div className='container'>
      <Root />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
