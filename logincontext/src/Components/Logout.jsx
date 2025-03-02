import React, { useContext } from 'react';
import Logincontext from '../Context/Create';

function Logout() {
    const {  use, pass } = useContext(Logincontext); // Renamed 'use' to 'user' for clarity

    return (
        <div className="flex justify-center  bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl w-96 text-center">
                <h1 className="text-2xl font-bold text-gray-900">
                   
                    Welcome, <span className="text-blue-600">{use.username}</span>!
                </h1>
                <p className="mt-3 text-gray-600">
                    Your password is: <span className="font-semibold text-red-500">{pass.password}</span>
                </p>
            </div>
        </div>
    );
}

export default Logout;
