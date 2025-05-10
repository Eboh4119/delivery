"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, ChangeEvent } from "react";

interface credentials {
    username : string
    password : string
};

function Login () {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userInfo, setUserInfo] = useState <credentials[]> ([])
    const [errors, setErrors] = useState({username:"", password:""})
    const [success, setSuccess] = useState({username:"", password:""})

    const router = useRouter()

    // function validation for username and password
    const validation = () => {
        const validationErrors = {username, password};
        const validationSuccess = {username, password};

        // username validation
        if(username.length <= 4) {
            validationErrors.username = 'Username should be more than 4 chars'
            //  validationSuccess.username = ''
        }else if(username.length >= 5) {
            validationSuccess.username = 'Username Success'
            validationErrors.username = ''
        }

        // pasword validation
        if (password.length <= 4) {
            validationErrors.password = 'Password should be more than 4 chars'
            validationSuccess.password = ''
        }else if(password.length > 4) {
            validationSuccess.password = 'Password Success'
            validationErrors.password = ''
        }

        setErrors(validationErrors)
        setSuccess(validationSuccess)

        return Object.keys({validationErrors, validationSuccess})
    }

    const handleLogin = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(validation()){
            console.log('submited', username, password);
        }
    };

    const handleSignup = () => {
        router.push('/Signup')
    };

    return (
        <div className="my-16 max-w-[400px] mx-auto max-sm:max-w-[350px]">
            <div className=" border-blue1 h-full border-2 shadow-blue1 shadow-xl px-10 rounded">
                <div className="py-3 block">
                    <Image 
                    src={'/LOGO 1.png'}
                    alt="Logo"
                    width={200}
                    height={100}
                    className="justify-self-center"
                    /> 
                    <Image 
                    src={'/Rectangle 17.png'}
                    alt="Logo"
                    width={100}
                    height={100}
                    className="rounded-full justify-self-center my-4"
                    /> 
                </div>
                <form action="" onSubmit={handleLogin} className="mt-2 text-blue1 font-medium text-md justify-self-center" name="user-input">
                    <label htmlFor="username">
                        Username :
                        <input type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="block w-80 h-10 mb-2 outline-none bg-transparent border-b-2 border-blue1 text-blue1" />
                        {errors.username ? <div className="text-sm text-red-700">{errors.username}</div> : success.username ? <div className="text-green1 text-sm">{success.username}</div> : ''}
                    </label>

                    <label htmlFor="password">
                        Password : 
                        <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-80 h-10 mb-2  outline-none bg-transparent border-b-2 border-blue1 text-blue1" />
                        {errors.password ? <div className="text-red-600 text-sm">{errors.password}</div> : success.password ? <div className="text-green1 text-sm">{success.password}</div> : ''}
                    </label>

                    <button type="submit" className={`flex justify-self-center mt-6 bg-blue1 py-3 px-10 font-semibold text-xl rounded text-white hover:scale-110`}>Login</button>
                </form>

                <div className="justify-center flex py-3 mt-4 gap-3">
                    <span>Not registered?</span>
                    <button className="font-medium text-blue1 underline hover:scale-110" onClick={handleSignup}>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Login