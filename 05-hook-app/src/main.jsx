import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/styles.css'
import { HooksApp } from './HooksApp'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook'
import { MultipleCustomHooks } from './03-example/MultipleCustomHooks'
import { FocuesScreen } from './04-useRef/FocuesScreen'
import { Memorize } from './05-memos/Memorize'
import { MemoHook } from './05-memos/MemoHook'
import { CallbackHook } from './05-memos/CallbackHook'
import { Padre } from './06-tarea-memo/Padre'
import './07-useReducer/intro-reducer'
import { TodoApp } from './07-useReducer/TodoApp'
import { MainApp } from './08-useContext/MainApp'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { getRoutes } from './Routes';
 
 
const router = getRoutes();
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)

