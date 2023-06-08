import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { RouterProvider } from 'react-router-dom'
import { getRoutes } from './router/Routes'
import { AppRouter } from './router/AppRouter'

const router = getRoutes();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
