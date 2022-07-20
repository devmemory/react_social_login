import React from 'react'
import LeftDesign from '../left_design'
import LoginForm from './login_form'
import './index.css'

const LoginIndex = () => {
    return (
        <div className='div_login_card'>
            <LeftDesign />
            <LoginForm />
        </div>
    )
}

export default LoginIndex