import React from "react";
import { useRef, useEffect } from "react";
import {
  SIDEBAR_MIN_WIDTH,
  SIDEBAR_MAX_WIDTH,
} from "../helpers/utils.js";
import { NavLink } from "react-router-dom";
import {
  AIRISDASHBOARD,
  BUDGET,
  PROJECTS,
  REPORTS,
} from "../routes/Routeconstants.js";
import {
  budgets,
  home,
  Logo,
  projects,
  report,
  TextLogo,
} from "../assets/index.js";

const Sidebar = ({
  sidebarWidth,
  setSidebarWidth,
  isResizing,
  setIsResizing,
}) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing) return;
      const newWidth = Math.min(
        Math.max(e.clientX, SIDEBAR_MIN_WIDTH),
        SIDEBAR_MAX_WIDTH
      );
      setSidebarWidth(newWidth);
    };
    const handleMouseUp = () => setIsResizing(false);

    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing, setSidebarWidth, setIsResizing]);

  const toggleSidebar = () => {
    setSidebarWidth(
      sidebarWidth === SIDEBAR_MIN_WIDTH ? SIDEBAR_MAX_WIDTH : SIDEBAR_MIN_WIDTH
    );
  };

  const navLinks = [
    {
      text: "Dashboard",
      icon: home,
      link: AIRISDASHBOARD,
    },
    {
      text: "Projects",
      icon: projects,
      link: PROJECTS,
    },
    {
      text: "Budgets",
      icon: budgets,
      link: BUDGET,
    },
    {
      text: "Reports",
      icon: report,
      link: REPORTS,
    },
  ];

  return (
    <div
      ref={sidebarRef}
      style={{
        width: sidebarWidth,
        height: "100vh",
        minWidth: SIDEBAR_MIN_WIDTH,
        maxWidth: SIDEBAR_MAX_WIDTH,
        background: "#fff",
        color: "#000000",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #222e3a",
        transition: isResizing ? "none" : "width 0.2s",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        style={{
          padding: "20px 4px 10px 4px",
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: 1,
          display: "flex",
          alignItems: "center",
          justifyContent:
            sidebarWidth === SIDEBAR_MIN_WIDTH ? "center" : "flex-start",
          cursor: "pointer",
          userSelect: "none",
        }}
        onClick={toggleSidebar}
        title="Toggle sidebar"
      >
        {sidebarWidth === SIDEBAR_MIN_WIDTH ? (
          <figure className="w-12 h-10 mt-14 mb-10">
            <img className="" src={Logo} alt="logo-icon" />
          </figure>
        ) : (
          <figure className="h-10 pl-10 mt-14">
            <img src={TextLogo} alt="text-logo-icon" />
          </figure>
        )}
      </div>

      {sidebarWidth !== SIDEBAR_MIN_WIDTH && (
        <div className="ml-10 pr-8" style={{ flex: 1, overflowY: "auto" }}>
          <p className="text-gray-500 mb-4">Admin</p>
          <div className="flex flex-col gap-2">
            {navLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className="px-4 py-2 flex gap-2 rounded-md hover:bg-[#F0F2F5] cursor-pointer"
              >
                <img src={item.icon} alt="dashboard" /> <p>{item.text}</p>
              </NavLink>
            ))}
          </div>
        </div>
      )}
      {sidebarWidth === SIDEBAR_MIN_WIDTH && (
        <div className="flex flex-col gap-2">
          {navLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className="px-4 py-2 flex gap-2 rounded-md hover:bg-[#F0F2F5] cursor-pointer"
            >
              <img src={item.icon} alt="dashboard" />
            </NavLink>
          ))}
        </div>
      )}

      {/* Sidebar resizer */}
      <div
        onMouseDown={() => setIsResizing(true)}
        style={{
          width: 6,
          cursor: "col-resize",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 10,
          background: "rgba(0,0,0,0.05)",
        }}
      />
    </div>
  );
};

export default Sidebar;
