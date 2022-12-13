import React from 'react'
import './index.css'
import LeftDesign from 'components/common/left_design'
import LoginForm from 'components/login/login_form'

const LoginIndex = () => {
    return (
        <div className='div_login_card'>
            <LeftDesign />
            <LoginForm />
        </div>
    )
}

export default LoginIndex