import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function Container() {
  return (
    <div>
      <Navbar />

    {/* the Outlet is used load to the child component */}
    <Outlet />
    </div>
  )
}

export default Container
