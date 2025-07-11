import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import { SIDEBAR_MAX_WIDTH } from '../helpers/utils';
const AirisDashboard = () => {
    const [sidebarWidth, setSidebarWidth] = useState(SIDEBAR_MAX_WIDTH);
    const [isResizing, setIsResizing] = useState(false);
  return (
    <div className='flex w-100vw'>
        <Sidebar
				sidebarWidth={sidebarWidth}
				setSidebarWidth={setSidebarWidth}
				isResizing={isResizing}
				setIsResizing={setIsResizing}
			/>
        <Dashboard />
    </div>
  )
}

AirisDashboard.propTypes = {}

export default AirisDashboard;
