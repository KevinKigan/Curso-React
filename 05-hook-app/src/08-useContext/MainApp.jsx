import { Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
    return (
        <UserProvider>
            <h1>MainApp</h1>
            <hr></hr>

            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="about" element={<AboutPage />}></Route>
                <Route path="login" element={<LoginPage />}></Route>
            </Routes>
        </UserProvider>
    )
}
