import React from "react"

const LoginIndex = React.lazy(() => import('routes/auth/login'))
const NaverIndex = React.lazy(() => import('routes/auth/naver'))

const routeUtil = [
    { path: '/', element: <LoginIndex /> },
    { path: '/app/auth/naver', element: <NaverIndex /> },
]

export default routeUtil