import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from "react-toastify";
import Api from '../api/Api';
import "./Review.css"

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
  
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = async(e) => {
          e.preventDefault();
          const data = await Api.post('/api/v1/register',{username:username,email:email,password:password});
          localStorage.setItem("userName",username);
          setUsername('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          navigate('/');
    };
  return (
    <div className="bg-black flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="rounded-lg bg-opacity-25 backdrop-blur-md border-2 border-gold border-opacity-10 p-10 w-[22%] flex-col mb-[10%] mt-[4%]">
            <h3 className="text-white text-2xl font-oswald mb-6">Register</h3>
            <label htmlFor="username" className="text-white text-lg font-oswald flex mt-5">
                Username
            </label>
            <input
                type="text"
                placeholder="Enter Username"
                id="username"
                value={username}
                onChange={(e)=>handleUsernameChange(e)}
                className="block w-full h-12 bg-opacity-10 bg-white bg-opacity-7 rounded-md pl-3 mt-1 text-white text-base font-normal mb-4"
            />
            <label htmlFor="email" className="text-white text-lg font-oswald flex">
                Email
            </label>
            <input
                type="text"
                placeholder="Enter Email"
                id="email"
                value={email}
                onChange={(e)=>handleEmailChange(e)}
                className="block w-full h-12 bg-opacity-10 bg-white bg-opacity-7 rounded-md pl-3 mt-1 text-white text-base font-normal mb-4"
            />
            <label htmlFor="password" className="text-white text-lg font-oswald flex">
                Password
            </label>
            <input
                type="password"
                placeholder="Enter Password"
                id="password"
                value={password}
                onChange={(e)=>handlePasswordChange(e)}
                className="block w-full h-12 bg-opacity-10 bg-white bg-opacity-7 rounded-md pl-3 mt-1 text-white text-base font-normal mb-4"
            />
            <label htmlFor="confirmPassword" className="text-white text-lg font-oswald flex">
                Confirm Password
            </label>
            <input
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e)=>handleConfirmPasswordChange(e)}
                className="block w-full h-12 bg-opacity-10 bg-white bg-opacity-7 rounded-md pl-3 mt-1 text-white text-base font-normal"
            />
            <button className="mt-8 w-full h-14 bg-white text-black text-lg font-semibold rounded-md cursor-pointer">
                Register
            </button>
        </form>
    </div>
);
};


export default Register
