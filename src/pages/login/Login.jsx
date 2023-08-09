import "./login.css"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'







export default function Login() {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const logIn = () => {
        if (mail === "user@gmail.com" && password === "1234") {

            navigate("/home")

        }
    }




    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">
                        GetSocial
                    </h3>
                    <span className="loginDesc"> Connect with friends and world arround you with GetSocial</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input onChange={(e) => { setMail(e.target.value) }} placeholder="Email..." type="email" className="loginInput" />
                        <input onChange={(e) => { setPassword(e.target.value) }} placeholder="password" type="password" className="loginInput" />
                        <button onClick={logIn} className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot password? </span>
                        <Link to="/register" className="loginRegisterButton">Create a New Account</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
