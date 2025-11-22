import { createElement, lazy } from "react";

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"))

export const adminRoutes = [
    {
        path: "admin/dashboard",
        element: createElement(AdminDashboard),
        role: "admin"
    }
]