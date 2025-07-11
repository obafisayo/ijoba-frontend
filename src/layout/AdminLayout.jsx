import React from 'react'
import { Outlet } from "react-router";
import { Navbar } from '../components/Navbar';


export const AdminLayout = () => {
  return (
    <main>
        <Navbar />
        <div className="container">
            <Outlet />
        </div>
    </main>
  )
};