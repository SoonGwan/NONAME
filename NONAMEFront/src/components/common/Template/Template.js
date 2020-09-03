import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const Template = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Template;
