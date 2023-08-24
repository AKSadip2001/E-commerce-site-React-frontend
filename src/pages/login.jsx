import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

import creds from '../credentials/credentials'

function Login() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        var present = false;
        for (var user in creds["users"]) {
            if (creds["users"][user].phone === phone && creds["users"][user].password === password) {
                present = true;
            }
        }
        if (present){
            setPhone("");
            setPassword("");
            navigate("/home");
            return;
        }
        for (var admin in creds["admin"]) {
            if (creds["admin"][admin].phone === phone && creds["admin"][admin].password === password) {
                present = true;
            }
        }
        if (present){
            setPhone("");
            setPassword("");
            navigate("/dashboard");
            return;
        }
        alert("Incorrect phone or password");
    }


    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center">
                    Sign in
                </h1>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Phone
                        </label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label for="password" className="block text-sm font-semibold text-gray-800">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                    <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-600 focus:outline-none focus:bg-purple-600">Login</button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    Don't have an account?{" "}
                    <a href="/" className="font-medium hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login