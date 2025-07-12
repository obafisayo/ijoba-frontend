import React from 'react';
import { useRoutes } from "react-router-dom"
import { AdminLayout } from "../layout/AdminLayout"
import { AIRISDASHBOARD, HOME, PROJECTDETAILS, PROJECTS } from "./Routeconstants"
import AirisDashboard from '../pages/AirisDashboard';
import { AdminDashboardLayout } from '../layout/AdminDashboardLayour';
import Projects from '../pages/Projects';
import { ProjectDetails } from '../pages/ProjectDetails';

export const Router = () => {
    const routes = [
        {
            path: HOME,
            element: <AdminLayout />,
            children: [
                { path: PROJECTS, element: <Projects /> },
                { path: PROJECTDETAILS, element: <ProjectDetails /> },
                { path: "*", element: <h1>Page Not Found</h1> },
            ],
        },
        {
            path: AIRISDASHBOARD,
            element: <AdminDashboardLayout />,
            children: [
                { path: AIRISDASHBOARD, element: <AirisDashboard /> },
                { path: "*", element: <h1>Page Not Found</h1> },
            ],
        },
        { path: "*", element: <h1>Page Not Found</h1>},
    ]
    return useRoutes(routes)
}
