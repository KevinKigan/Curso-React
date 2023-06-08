import { Navigate, createBrowserRouter } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { DcPage } from "../heroes/pages/DcPage";
import { SearchPage } from "../heroes/pages/SearchPage";
import { HeroPage } from "../heroes/pages/HeroPage";
 
 
export const getRoutes = () => createBrowserRouter([
    {
        path: "/*",
        element: <HeroesApp />,
        errorElement: <Navigate to="/" replace  />,
        children: [
            {
                path: "/*",
                element: <MarvelPage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "dc",
                element: <DcPage />,
            },
            {
                path: "marvel",
                element: <MarvelPage />,
            },
            {
                path: "search",
                element: <SearchPage />,
            },
            {
                path: "hero",
                element: <HeroPage />,
            },
            {
                path: "hero/:id",
                element: <HeroPage />,
            },
            
        ]
    }
]);