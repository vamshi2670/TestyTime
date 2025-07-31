import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout() {
  return (
    <>
    <Navbar/>
      
      <main style={{ minHeight: '80vh' }} className="container py-4">
      
        <Outlet /> {/* This is where child routes render */}
      </main>
      <Footer/>
      </>
  )
}

export default Layout