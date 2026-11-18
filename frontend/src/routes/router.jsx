import { createBrowserRouter, Navigate } from "react-router-dom";
import MessagesPage from "../pages/messages/MessagesPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/messages" replace />,
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: "/messages",
                element: <MessagesPage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
])

export default router