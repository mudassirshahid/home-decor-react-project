import React from 'react'
import { Outlet } from 'react-router-dom' 
import Header from './header'
import CartTab from './cartTab' 
import { useSelector } from 'react-redux'
import Footer from './footer'

const Layout = () => {
    const statusTabCart = useSelector(store => store.cart.statusTab);
  return (
    <div className='bg-zinc-200'>
        <main className={` max-w-full m-auto transform transition-transform duration-500
        ${statusTabCart === false ? "" : "-translate-x-56" }`}>
            <Header />
            <Outlet />
            <Footer />
        </main>
        <CartTab />
    </div>
  )
}

export default Layout