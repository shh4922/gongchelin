import React, { useState } from "react"
import "./login.css"
import { auth } from "../../db/firebase"
import { signInWithEmailAndPassword,  } from "firebase/auth"
import { useNavigate } from "react-router-dom"

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigator = useNavigate()

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const clickLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigator('/admin')            
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
            });
    }

    return (
        <article className="login">
            <h1>Login</h1>
            <form onSubmit={clickLogin}>
                <input type="email" value={email} onChange={handleEmailInput} placeholder="input your Email"></input>
                <input type="password" value={password} onChange={handlePasswordInput} placeholder="input your password"></input>
                <button>Login</button>
            </form>
        </article>
    )
}

export default Login