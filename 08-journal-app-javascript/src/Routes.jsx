import { Navigate, createBrowserRouter } from "react-router-dom";
import { JournalApp } from "./JournalApp";


export const getRoutes = () => createBrowserRouter([
    {
        path: "/*",
        element: <JournalApp />,
        errorElement: <Navigate to="/" replace  />,
        children: []
    }
])