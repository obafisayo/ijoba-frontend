import React from 'react'
import Logo from "../assets/react.svg";

export const Navbar = () => {
  return (
    <nav className='flex justify-between py-4 px-6 border'>
        <div className="logo">
            <figure>
                <img src={Logo} alt="Logo-icon" />
            </figure>
        </div>
        <div className="flex gap-4">
            <ul className='inline-flex gap-4'>
                <li>Dashboard</li>
                <li>Projects</li>
                <li>Reports</li>
                <li>Budget</li>
            </ul>
            <div className="avatar">
                <figure>
                    <img src="avatar.svg" alt="avatar-icon" />
                </figure>
            </div>
        </div>
    </nav>
  )
};