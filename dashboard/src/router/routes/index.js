import { privateRoutes } from "./privateRoutes";
import MainLayout from "../../layout/MainLayout";
import { createElement } from "react";

export const getRoutes = () => {
    return {
        path: '/',
        element: createElement(MainLayout),
        children: privateRoutes
    }
}