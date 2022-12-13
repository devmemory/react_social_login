import React from 'react'
import './auth_input.css'

const AuthInput = (props) => {
    const { type, placeholder, value, onChange } = props

    return (
        <input className='input_auth' key={type} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    )
}

export default AuthInput