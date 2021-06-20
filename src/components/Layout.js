import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Container from './Container';


function Layout({children, allPostsData}) {
  return (
    <div className="bg-blue-grey-200 font-serif leading-normal tracking-normal">
      <Header/>
        {children}
      <Footer/>
    </div>
  )
}

export default Layout;   