import React from 'react'
import ProfilePicture from "../assets/Profile icon.png";
import textLogo from "../assets/AirisTextLogo.png";

export const Navbar = () => {
  return (
    <nav className='flex justify-between py-4 px-6 border'>
        <div className="logo">
            <figure>
                <img src={textLogo} alt="Logo-icon" />
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
                    <img src={ProfilePicture} alt="" />
                </figure>
            </div>
        </div>
    </nav>
  )
};