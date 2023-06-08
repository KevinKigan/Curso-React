import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { getRoutes } from './Routes'
import { LoginPage } from '../auth'
import { HeroesRutes } from '../heroes/routes/HeroesRutes'
import { PrivateRoute } from './PrivateRoute'
import { HeroesApp } from '../HeroesApp'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {

    const router = getRoutes();

    return (
        <>
            <Routes>
                <Route path='login' element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>}>
                </Route>
                
                <Route path='/*' element={
                    <PrivateRoute>
                        <HeroesRutes></HeroesRutes>
                    </PrivateRoute>}>
                </Route>
                {/* <Route path="/*" element={<HeroesRutes />}></Route> */}
            </Routes>
        </>
    )
}
