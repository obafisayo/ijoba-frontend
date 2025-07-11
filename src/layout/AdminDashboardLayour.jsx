import React from 'react'
import { Outlet } from "react-router";


export const AdminDashboardLayout = () => {
  return (
    <main>
        <div className="container">
            <Outlet />
        </div>
    </main>
  )
};