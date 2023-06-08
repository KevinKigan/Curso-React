import React from 'react'
import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPage, MarvelPage } from '../pages'
import { HeroPage } from '../pages/HeroPage'
import { SearchPage } from '../pages/SearchPage'

export const HeroesRutes = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='container'>
                <Routes>
                    <Route path="marvel" element={<MarvelPage />}></Route>
                    <Route path="dc" element={<DcPage />}></Route>
                    <Route path="search" element={<SearchPage />}></Route>
                    <Route path="hero/:id" element={<HeroPage />}></Route>
                    <Route path="/*" element={<Navigate to="/marvel" replace />}></Route>
                </Routes>
            </div>
        </>
    )
}
