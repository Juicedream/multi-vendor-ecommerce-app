import { createElement, lazy } from "react";

const Login = lazy(() => import("../../views/auth/Login"));
const Register = lazy(() => import("../../views/auth/Register"));
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin"));

const publicRoutes = [
    {
        path: '/login',
        element: createElement(Login)
    },
    {
        path: '/register',
        element: createElement(Register)
    },
    {
        path: '/admin/login',
        element: createElement(AdminLogin)
    },
];

export default publicRoutes;