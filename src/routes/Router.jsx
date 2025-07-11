import React from 'react';
import { useRoutes } from "react-router-dom"
import { AdminLayout } from "../layout/AdminLayout"
import { AIRISDASHBOARD } from "./Routeconstants"
import AirisDashboard from "../components/AirisDashboard"

export const Router = () => {
    const routes = [
        {
            path: AIRISDASHBOARD,
            element: <AdminLayout />,
            children: [
                { path: AIRISDASHBOARD, element: <AirisDashboard /> },
                { path: "*", element: <h1>Page Not Found</h1> },
            ],
        },
        { path: "*", element: <h1>Page Not Found</h1>},
    ]
    return useRoutes(routes)
}
