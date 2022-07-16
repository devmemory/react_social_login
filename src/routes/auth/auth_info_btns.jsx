import React from 'react'
import './auth_info_btns.css'

const AuthInfoBtns = () => {
    return (
        <div className="div_btns">
            <button type="button">
                회원가입
            </button>
            <button type="button">
                아이디/비밀번호 찾기
            </button>
        </div>
    )
}

export default AuthInfoBtns