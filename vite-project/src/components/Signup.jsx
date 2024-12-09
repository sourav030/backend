import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router";
import Home from './Home';
import { MyContext } from './../context/Context';

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const { token, setToken } = useContext(MyContext)
  let navigate = useNavigate();
  const SubmitHandler = async () => {
    const response = await axios.post('http://localhost:4000/api/v1/register', { name, email, password, username })
    console.log(response.data.message)
    if (response.data.success) {
      toast.success(response.data.message);
      navigate('/login')
    }
  }

  return (
    <>
      {!token ? (
        <div className="flex justify-center items-center w-full h-screen border">
          <div className="p-2 border flex flex-col w-[28%] h-[65%] ">
            <div className="flex justify-center items-center">
              <h2 className="text-2xl font-semibold">Signup</h2>
            </div>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="m-2 border p-3"
              type="text"
              placeholder="Enter your name"
            />
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="m-2 border p-3"
              type="text"
              placeholder="Enter user name"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="m-2 border p-3"
              type="email"
              placeholder="Enter an email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="m-2 border p-3"
              type="password"
              placeholder="Enter a password"
            />
            <button
              onClick={SubmitHandler}
              className="m-2 p-3 border border-gray-300 rounded-lg hover:bg-slate-400"
            >
              Sign Up
            </button>
            <Link to="/login" className="m-2 text-blue-400 hover:cursor-pointer">
              Already have an account?
            </Link>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </>

    // <div className='flex justify-center items-center w-full h-screen border'>
    //   <div div className=' p-2 border flex flex-col w-[25%] h-[55%] sd:w-[90px]' >
    //     <div className='flex justify-center items-center'>
    //       <h2 className='text-2xl font-semibold'>Signup</h2>
    //     </div>
    //     <input onChange={(e) => setName(e.target.value)} value={name} className=' m-2 border p-3' type="text" placeholder='Enter your name' />
    //     <input onChange={(e) => setUsername(e.target.value)} value={username} className=' m-2 border p-3' type="text" placeholder='Enter user name' />
    //     <input onChange={(e) => setEmail(e.target.value)} value={email} className=' m-2 border p-3' type="email" placeholder='Enter a email' />
    //     <input onChange={(e) => setPassword(e.target.value)} value={password} className=' m-2 border p-3' type="password" placeholder='Enter a Password' />
    //     <button onClick={SubmitHandler} className='m-2 p-3 border border-gray-300 rounded-lg hover:bg-slate-400'>Sign Up</button>
    //     <Link to='/login' className='m-2 text-blue-400 hover:cursor-pointer'> already have any account ?</Link>
    //   </div >
    // </div >

  )
}

export default Signup
