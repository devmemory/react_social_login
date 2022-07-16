import React from 'react'
import './auth_btn.css'

const AuthBtn = (props) => {
    const btnName = props.btnName

    return (
        <button className="btn_submit" type="submit">{btnName}</button>
    )
}

export default AuthBtn