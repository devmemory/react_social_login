import React from 'react'
import SocialLogin from 'services/social_login'

const NaverIndex = () => {
    const login = new SocialLogin()

    if (window.location.href.includes("access_token")) {
        login.naverLogin(false);
    }

    return (
        <div id="naverIdLogin" style={{ display: 'none' }} />
    )
}

export default NaverIndex