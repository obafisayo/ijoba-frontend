import React from 'react';
import { useRoutes } from "react-router-dom"
import { AdminLayout } from "../layout/AdminLayout"
import { AIRISDASHBOARD, HOME, PROJECTDETAILS, PROJECTS, BUDGET, SIGNIN, SIGNUP, ABOUT, CONTACT, FEATURE } from "./Routeconstants"
import AirisDashboard from '../pages/AirisDashboard';
import { AdminDashboardLayout } from '../layout/AdminDashboardLayour';
import Projects from '../pages/Projects';
import { ProjectDetails } from '../pages/ProjectDetails';
import Budget from '../pages/Budget';
import AirisLandingPage from '../pages/AirisLandingPage';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import AirisFeaturesPage from '../pages/AirisFeaturesPage';
import AirisContactPage from '../pages/AirisContactPage';
import AirisAboutPage from '../pages/AirisAboutPage';

export const Router = () => {
    const routes = [
        {
            path: HOME,
            element: <AdminLayout />,
            children: [
                { path: HOME, element: <AirisLandingPage /> },
                { path: ABOUT, element: <AirisAboutPage /> },
                { path: CONTACT, element: <AirisContactPage /> },
                { path: FEATURE, element: <AirisFeaturesPage /> },
                { path: PROJECTS, element: <Projects /> },
                { path: PROJECTDETAILS, element: <ProjectDetails /> },
                { path: BUDGET, element: <Budget /> },
                 { path: SIGNIN, element: <SignIn /> },
                { path: SIGNUP, element: <SignUp /> },
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

    ]
    return useRoutes(routes)
}
