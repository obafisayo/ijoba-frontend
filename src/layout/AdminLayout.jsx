import React from 'react'
import { Outlet } from "react-router";
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';


export const AdminLayout = () => {
  return (
    <main>
        <Navbar />
        <div className=" w-full">
            <Outlet />
        </div>
        <Footer />
    </main>
  )
};