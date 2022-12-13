import React, { useEffect } from 'react'
import KakaoLogo from 'assets/icons/kakao_icon.png'
import MetaLogo from 'assets/icons/meta_icon.png'
import NaverLogo from 'assets/icons/naver_icon.png'
import GoogleLogo from 'assets/icons/google_icon.png'
import SocialLogin from 'services/social_login'
import './social_btns.css'
import util from 'util/util'

const SocialBtns = () => {
    const login = new SocialLogin()

    let isClicked = false

    useEffect(() => {
        login.setUpGoogleLogin()
    }, [])

    const socialLogin = [
        {
            src: KakaoLogo,
            name: "카카오",
            onClick: (e) => {
                e.preventDefault()

                clickBtn("kakao")
            },
        },
        {
            src: NaverLogo,
            name: "네이버",
            onClick: (e) => {
                e.preventDefault()

                clickBtn("naver")
            },
        },
        {
            src: MetaLogo,
            name: "페이스북",
            onClick: (e) => {
                e.preventDefault()

                clickBtn("meta")
            },
        },
        {
            src: GoogleLogo,
            name: "구글",
            onClick: (e) => {
                e.preventDefault()

                const div = document.querySelector(
                    "#googleLogin > div > div > div",
                );

                console.log({ div });

                div.click();
            },
        },
    ]

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
                {socialLogin.map((e, i) => {
                    return (<img
                        key={`${e.name}`}
                        onClick={e.onClick}
                        src={e.src}
                        alt=""
                    />)
                })}
            </div>
            <div id="naverIdLogin" style={{ display: 'none' }} />
            <div id="googleLogin" style={{ display: 'none' }} />
        </>
    )
}

export default SocialBtns