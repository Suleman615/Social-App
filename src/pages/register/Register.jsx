import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
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
                        <input placeholder="Email..." type="email" className="loginInput" />
                        <input placeholder="User Name" type="text" className="loginInput" />
                        <input placeholder="password" type="email" className="loginInput" />
                        <input placeholder="password Again" type="password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <Link to="/login" className="loginRegisterButton">Log In to Account</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
