// react icons
import { createElement } from "react";
import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUsers, FaUserTimes } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { MdPayment } from "react-icons/md";


export const allNav = [
    {
        id: 1,
        title: "Dashboard",
        icon: createElement(AiOutlineDashboard),
        role: "admin",
        path: "/admin/dashboard"
    },
    {
        id: 2,
        title: "Orders",
        icon: createElement(AiOutlineShoppingCart),
        role: "admin",
        path: "/admin/dashboard/orders"
    },
    {
        id: 3,
        title: "Category",
        icon: createElement(BiCategory),
        role: "admin",
        path: "/admin/dashboard/category"
    },
    {
        id: 4,
        title: "Sellers",
        icon: createElement(FaUsers),
        role: "admin",
        path: "/admin/dashboard/sellers"
    },
    {
        id: 5,
        title: "Payment Request",
        icon: createElement(MdPayment),
        role: "admin",
        path: "/admin/dashboard/payment-request"
    },
    {
        id: 6,
        title: "Deactivate Sellers",
        icon: createElement(FaUserTimes),
        role: "admin",
        path: "/admin/dashboard/deactivate-sellers"
    },
    {
        id: 7,
        title: "Sellers Request",
        icon: createElement(FaCodePullRequest),
        role: "admin",
        path: "/admin/dashboard/sellers-request"
    },
    {
        id: 8,
        title: "Live Chat",
        icon: createElement(IoIosChatbubbles),
        role: "admin",
        path: "/admin/dashboard/chat-seller"
    },
    
]