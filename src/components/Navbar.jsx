import React from 'react'
import ProfilePicture from "../assets/Profile icon.png";
import textLogo from "../assets/AirisTextLogo.png";
import { NavLink } from 'react-router-dom';
import { AIRISDASHBOARD, BUDGET, HOME, PROJECTS, REPORTS } from '../routes/Routeconstants';

export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-4 px-10 border border-b-[#73777f30]'>
        <NavLink to={HOME} className="cursor-pointer">
            <figure>
                <img src={textLogo} alt="Logo-icon" />
            </figure>
        </NavLink>

        <div className="flex items-center gap-10">
            <ul className='flex gap-6'>
                <NavLink to={AIRISDASHBOARD}>
                    <li className=' hover:text-[#73777f] cursor-pointer '>Dashboard</li>
                </NavLink>
                <NavLink to={PROJECTS}>
                    <li className=' hover:text-[#73777f] cursor-pointer '>Projects</li>
                </NavLink>
                <NavLink to={REPORTS}>
                    <li className=' hover:text-[#73777f] cursor-pointer '>Reports</li>
                </NavLink>
                <NavLink to={BUDGET}>
                    <li className=' hover:text-[#73777f] cursor-pointer '>Budget</li>
                </NavLink>
            </ul>
            <div className="avatar cursor-pointer">
                <figure>
                    <img src={ProfilePicture} alt="" />
                </figure>
            </div>
        </div>
    </nav>
  )
};