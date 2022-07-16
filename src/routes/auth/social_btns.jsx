import React, { useEffect } from 'react'
import KakaoLogo from '../../assets/icons/kakao_icon.png'
import MetaLogo from '../../assets/icons/meta_icon.png'
import NaverLogo from '../../assets/icons/naver_icon.png'
import SocialLogin from 'services/social_login'
import './social_btns.css'
import util from 'util/util'

const SocialBtns = () => {
    const login = new SocialLogin()

    let isClicked = false

    useEffect(() => {
        login.setUpGoogleLogin()
    }, [])

    const clickBtn = async (type) => {
        if (isClicked) {
            return
        } else {
            isClicked = true
            util.delay(1000).then(() => {
                isClicked = false
            })
        }

        console.log('click')

        switch (type) {
            case 'kakao':
                login.kakaoLogin()
                break
            case 'naver':
                login.naverLogin()
                break
            case 'meta':
                login.metaLogin()
                break
        }
    }

    return (
        <>
            <div className="div_social">
                <img
                    onClick={() => clickBtn('kakao')}
                    src={KakaoLogo}
                    alt=""
                />
                <img
                    onClick={() => clickBtn('naver')}
                    src={NaverLogo}
                    alt=""
                />

                <img
                    onClick={() => clickBtn('meta')}
                    src={MetaLogo}
                    alt=""
                />
                <div id="googleLogin" />
            </div>
            <div id="naverIdLogin" style={{ display: 'none' }} />
        </>
    )
}

export default SocialBtns