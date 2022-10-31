import React from 'react'
import Home from '../component/Home'
import RecentTasks from '../component/RecentTasks'
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
    <Home/>
    <Outlet/>
    </>
  )
}

export default Layout