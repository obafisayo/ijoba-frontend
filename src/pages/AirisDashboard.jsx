import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import { SIDEBAR_MAX_WIDTH } from "../helpers/utils";

const AirisDashboard = () => {
  const [sidebarWidth, setSidebarWidth] = useState(SIDEBAR_MAX_WIDTH);
  const [isResizing, setIsResizing] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Fixed Sidebar */}
      <div 
        className="fixed left-0 top-0 h-full z-10"
        style={{ width: sidebarWidth }}
      >
        <Sidebar
          sidebarWidth={sidebarWidth}
          setSidebarWidth={setSidebarWidth}
          isResizing={isResizing}
          setIsResizing={setIsResizing}
        />
      </div>
      
      {/* Scrollable Dashboard */}
      <div 
        className="flex-1 h-full overflow-y-auto"
        style={{ marginLeft: sidebarWidth }}
      >
        <Dashboard />
      </div>
    </div>
  );
};

AirisDashboard.propTypes = {};

export default AirisDashboard;
