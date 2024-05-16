import NavBar from "../appComponents/Dashboard/Navbar/NavBar";
import SideBar from "../appComponents/Dashboard/SideBar/SideBar";
import styles from "../appComponents/Dashboard/Dashboard.module.css"
import Footer from "../appComponents/Dashboard/Footer/Footer";

import React from 'react'

function Layout({children} : {
    children : React.ReactNode
}) {
  return (
    <div className={styles.container}>
    <div className={styles.menu}>
      <SideBar/>
    </div>
    <div className={styles.content}>
      <NavBar/>
      {children}
      <Footer/>
    </div>
  </div>
  )
}

export default Layout
