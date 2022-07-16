import util from "util/util";

export default class SocialLogin {
    // 카카오 로그인
    kakaoLogin() {
        const src = "https://developers.kakao.com/sdk/js/kakao.min.js"

        let kakaoScript = util.checkScript('kakao', src, openPopup)

        function openPopup() {
            if (!Kakao.isInitialized()) {
                Kakao.init(process.env.Kakao_Client_Id)
            }

            Kakao.Auth.login({
                success: (_) => {
                    Kakao.API.request({
                        url: '/v2/user/me',
                        data: {
                            property_keys: ["kakao_account.email", "kakao_account.profile"]
                        },
                        success: (res) => {
                            // res.kakao_account.email
                            // res.kakao_account.profile.nickname
                            // res.kakao_account.profile.profile_image_url
                            console.log({ res })
                            util.removeScript(kakaoScript)
                            return res.kakao_account
                        },
                        fail: (err) => {
                            alert(`개인정보를 가져올 수 없습니다. ${JSON.stringify(err)}`)
                        }
                    })
                },
                fail: (err) => {
                    alert(`도메인을 확인해주세요. ${JSON.stringify(err)}`)
                },
            });
        }
    }

    // 네이버 로그인
    naverLogin(value = true) {
        const src = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"

        let naverScript = util.checkScript('naver', src, openPopup)

        function openPopup() {
            const naverLogin = new naver.LoginWithNaverId({
                clientId: process.env.Naver_Client_Id,
                callbackUrl: "http://127.0.0.1:3000/app/auth/naver",
                isPopup: false,
                loginButton: { color: "green", type: 3, height: 60 },
                callbackHandle: true
            });

            naverLogin.init();

            console.log({ naverLogin, naver })

            if (value) {
                const btn = document.getElementById('naverIdLogin').firstChild
                btn.click()

                return
            }

            naverLogin.getLoginStatus(function (status) {
                if (status) {
                    const { email, name, profile_image } = naverLogin.user

                    console.log({ email, name, profile_image });

                    if (email === undefined || email === null || name === undefined || name === null) {
                        alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
                        naverLogin.reprompt();
                        return;
                    }
                    util.removeScript(naverScript)
                } else {
                    alert("callback 처리에 실패하였습니다.");
                }
            });
        }
    }

    // 구글 로그인
    setUpGoogleLogin() {
        const src = "https://accounts.google.com/gsi/client"

        let googleScript = util.checkScript('gsi/client', src, setUp, 'google')

        function setUp() {
            google.accounts.id.initialize({
                client_id: process.env.Google_Client_Id,
                callback: (res) => {
                    const payload = util.decodePaylod(res.credential)

                    console.log({ payload }, payload.name, payload.email, payload.picture)

                    util.removeScript(googleScript)

                    const headChildren = document.head.children

                    for (let i = 0; i < headChildren.length; i++) {
                        if (headChildren[i]?.id?.includes('googleidentityservice') ?? false) {
                            util.removeScript(headChildren[i])
                        }
                    }
                }
            });

            google.accounts.id.renderButton(
                document.getElementById('googleLogin'),
                { type: "icon", shape: 'circle' }
            )
        }
    }

    // 메타 로그인
    async metaLogin() {
        const src = "https://connect.facebook.net/en_US/sdk.js"

        let metaScript = util.checkScript('facebook', src, openPopup, 'meta')

        function openPopup() {
            FB.init({
                appId: process.env.Meta_Client_Id,
                cookie: true,
                xfbml: true,
                version: 'v14.0'
            });

            FB.login((res) => {
                if (res.status === 'connected') {
                    console.log({ res })
                    FB.api('/me', { fields: 'email,name,picture' }, (res2) => {
                        if (res2.err) {
                            alert(res2.err)
                            return
                        }
                        // res2.email
                        // res2.name
                        // res2.picture.data.url
                        console.log({ res2 })

                        util.removeScript(metaScript)

                        const headChildren = document.head.children

                        for (let i = 0; i < headChildren.length; i++) {
                            if ((headChildren[i]?.src?.includes('hash') ?? false)) {
                                util.removeScript(headChildren[i])
                            }
                        }
                    })
                } else {
                    console.log({ res })
                }
            })
        }
    }
}