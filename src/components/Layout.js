import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

function Layout({children}) {
  return (
    <div className="bg-gray-light font-sans leading-normal tracking-normal">
      <Header/>
      <Container>
        {children}
      </Container>
      <Footer/>
    </div>
  )
}

export default Layout
