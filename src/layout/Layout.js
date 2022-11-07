import React from 'react'
import AppFrame from './Frame'
import RecentTasks from '../pages/RecentTasks'
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
    <AppFrame/>
    <Outlet/>
    </>
  )
}

export default Layout