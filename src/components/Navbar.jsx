import React from 'react'
import ProfilePicture from "../assets/Profile icon.png";
import textLogo from "../assets/AirisTextLogo.png";

export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-4 px-10 border border-b-[#73777f30]'>
        <div className="cursor-pointer">
            <figure>
                <img src={textLogo} alt="Logo-icon" />
            </figure>
        </div>

        <div className="flex items-center gap-10">
            <ul className='flex gap-6'>
                <li className=' hover:text-[#73777f] cursor-pointer '>Dashboard</li>
                <li className=' hover:text-[#73777f] cursor-pointer '>Projects</li>
                <li className=' hover:text-[#73777f] cursor-pointer '>Reports</li>
                <li className=' hover:text-[#73777f] cursor-pointer '>Budget</li>
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