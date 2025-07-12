import React from "react";
import ProfilePicture from "../assets/Profile icon.png";
import textLogo from "../assets/AirisTextLogo.png";
import { NavLink } from "react-router-dom";
import {
  ABOUT,
  AIRISDASHBOARD,
  BUDGET,
  CONTACT,
  FEATURE,
  HOME,
  PROJECTS,
  REPORTS,
  SIGNUP,
} from "../routes/Routeconstants";
import AiRISAPIClient from "../api/api";

export const Navbar = () => {
  const loginStatus = AiRISAPIClient.auth.isLoggedIn();
  console.log(loginStatus);
  return (
    <nav className="flex justify-between items-center py-4 px-10 border border-b-[#73777f30]">
      <NavLink to={HOME} className="cursor-pointer">
        <figure>
          <img src={textLogo} alt="Logo-icon" />
        </figure>
      </NavLink>

      {!loginStatus ? (
        <div className="flex items-center gap-10">
          <ul className="flex gap-6">
            <NavLink to={AIRISDASHBOARD}>
              <li className=" hover:text-[#73777f] cursor-pointer ">
                Dashboard
              </li>
            </NavLink>
            <NavLink to={PROJECTS}>
              <li className=" hover:text-[#73777f] cursor-pointer ">
                Projects
              </li>
            </NavLink>
            <NavLink to={REPORTS}>
              <li className=" hover:text-[#73777f] cursor-pointer ">Reports</li>
            </NavLink>
            <NavLink to={BUDGET}>
              <li className=" hover:text-[#73777f] cursor-pointer ">Budget</li>
            </NavLink>
          </ul>
          <div className="avatar cursor-pointer">
            <figure>
              <img src={ProfilePicture} alt="" />
            </figure>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-10">
          <ul className="flex items-center gap-6">
            <NavLink to={ABOUT}>
              <li className=" hover:text-[#73777f] cursor-pointer ">about</li>
            </NavLink>
            <NavLink to={FEATURE}>
              <li className=" hover:text-[#73777f] cursor-pointer ">
                features
              </li>
            </NavLink>
            <NavLink to={CONTACT}>
              <li className=" hover:text-[#73777f] cursor-pointer ">contact</li>
            </NavLink>
            <NavLink to={SIGNUP}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Get Started
              </button>
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};
