import React from "react";
import ProfilePicture from "../assets/Profile icon.png";
import textLogo from "../assets/AirisTextLogo.png";
import { NavLink } from "react-router-dom";
import {
  AIRISDASHBOARD,
  BUDGET,
  PROJECTS,
  REPORTS,
} from "../routes/Routeconstants";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-10   bg-white shadow-sm">
      <div className="cursor-pointer">
        <figure>
          <img src={textLogo} alt="Logo-icon" />
        </figure>
      </div>

      <div className="flex items-center gap-10">
        <ul className="flex gap-2 md:gap-6">
          {[
            { to: AIRISDASHBOARD, label: "Dashboard" },
            { to: PROJECTS, label: "Projects" },
            { to: REPORTS, label: "Reports" },
            { to: BUDGET, label: "Budget" },
          ].map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer
                ${
                  isActive
                    ? "bg-[#19a1e5] text-white shadow"
                    : "text-[#111518] hover:bg-[#f2f6fa] hover:text-[#19a1e5] hover:shadow-md"
                }`
              }
            >
              <li className="list-none">{item.label}</li>
            </NavLink>
          ))}
        </ul>
        <div className="avatar cursor-pointer ml-4">
          <figure>
            <img
              src={ProfilePicture}
              alt="Profile"
              className="w-10 h-10 rounded-full border border-[#dce2e5] object-cover"
            />
          </figure>
        </div>
      </div>
    </nav>
  );
};
