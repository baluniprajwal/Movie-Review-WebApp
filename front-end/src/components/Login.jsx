import React, { useState } from 'react'
import Api from '../api/Api';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    
    const toastOptions = {
      position:'bottom-right',
      autoClose : 8000,
      pauseOnHover:true,
      draggable:true,
      theme : "dark"
    };
    const handleSubmit = async(e)=>{
      e.preventDefault();
      const response = await Api.post("/api/v1/login",{email:email,password:password});
      console.log(response.status);
      if (response.status === 200){
        console.log("login sucessful");
        navigate('/');
      }
      else{
        console.error("login failed:",response.statusText);
      }
  }

  return (
    <>
    <div className="bg-black flex justify-center items-center h-screen ">
      <form onSubmit={handleSubmit}className="rounded-lg bg-opacity-25 backdrop-blur-md border-2 border-gold border-opacity-10 p-10 w-[20%] flex-col mb-[10%]">
        <h3 className="text-white text-2xl font-oswald mb-6">Login</h3>
        <label htmlFor="email" className="text-white text-lg font-oswald flex mt-5 ">
          Email
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          id="username"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
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
          onChange={(e)=>setPassword(e.target.value)}
          className="block w-full h-12 bg-opacity-10 bg-white bg-opacity-7 rounded-md pl-3 mt-1 text-white text-base font-normal"
        />
        <button className="mt-8 w-full h-14 bg-white text-black text-lg font-semibold rounded-md cursor-pointer">
          Log In
        </button>
      </form>
    </div>
    <ToastContainer/>
    </>
  );
}

export default Login
