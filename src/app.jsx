import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routeUtil from 'util/route_util'
import './app.css'

const App = () => {
    return (
        <div className='div_main'>
            <Suspense fallback={<div />}>
                <BrowserRouter>
                    <Routes>
                        {routeUtil.map((e) => <Route key={`path - ${e.path}`} path={e.path} element={e.element} />)}
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    )
};

export default App;