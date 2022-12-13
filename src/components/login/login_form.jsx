import React, { useState } from 'react'

import Logo from 'assets/logo.png'
import './login_form.css'
import AuthInput from 'components/common/auth_input'
import AuthBtn from 'components/common/auth_btn'
import AuthInfoBtns from 'components/common/auth_info_btns'
import SocialBtns from 'components/common/social_btns'

const LoginForm = () => {
    const [authData, setAuthData] = useState({ id: "", pw: "" })

    const login = (e) => {
        e.preventDefault()

        console.log({ authData })
    }

    const changeId = (e) => {
        e.preventDefault()

        setAuthData({ ...authData, id: e.target.value })
    }

    const changePw = (e) => {
        e.preventDefault()

        setAuthData({ ...authData, pw: e.target.value })
    }

    return (
        <form className='form_login' onSubmit={login} >
            <img src={Logo} alt="" />
            <AuthInput
                type="email"
                placeholder="아이디를 입력해주세요"
                value={authData.id || ''}
                onChange={changeId}
            />
            <AuthInput
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={authData.pw || ''}
                onChange={changePw}
            />
            <AuthBtn btnName="Log in" />
            <AuthInfoBtns />
            <SocialBtns />
        </form >
    )
}

export default LoginForm