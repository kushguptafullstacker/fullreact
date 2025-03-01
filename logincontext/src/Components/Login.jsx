import React, { useContext, useState } from 'react';
import Logincontext from '../Context/Create';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setuse, setpass } = useContext(Logincontext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setuse({ username });
        setpass({ password });
    };

    return (
        <div className="flex justify-center items-center  bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Login</h2>
                <input
                    value={username}
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    value={password}
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    onClick={handleSubmit} 
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
