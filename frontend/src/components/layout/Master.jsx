import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../partials/Sidebar'
import Nav from '../partials/Nav'
import Footer from '../partials/Footer'

const Master = () => {
  return (
    <>
      <Nav/>
      <div id="layoutSidenav">
        <Sidebar/>
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid px-4">
                    <Outlet/>
                </div>
            </main>
            <Footer/>
        </div>
      </div>
    </>
  )
}

export default Master