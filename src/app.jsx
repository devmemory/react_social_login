import React from 'react'
import LoginIndex from 'routes/auth/login'
import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NaverIndex from 'routes/auth/naver'

function App() {
    const routes = [
        { path: '/', element: <LoginIndex /> },
        { path: '/app/auth/naver', element: <NaverIndex /> },
    ]

    return (
        <div className='div_main'>
            <BrowserRouter>
                <Routes>
                    {routes.map((e) => <Route key={`path - ${e.path}`} path={e.path} element={e.element} />)}
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App