import { Navigate, createBrowserRouter } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, MainApp } from "./08-useContext";
// import { ErrorPage } from "./ErrorPage";
 
 
export const getRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <MainApp />,
        errorElement: <Navigate to="/about" replace  />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            
        ]
    }
]);