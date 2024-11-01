import React, { Children } from 'react'
import Footer from './Footer'
import Header from './Navbar'
import { useTheme } from '../context/ThemeContext';

const Layout = ({children}) => {
    const { darkMode } = useTheme();
  return (
    <>
    <Header/>
    <main className={darkMode ? 'dark-mode' : ''}>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout