import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { MyContext } from './../context/Context';
const Login = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {token,setToken}=useContext(MyContext)
  let navigate = useNavigate();
  const LoginHandler= async ()=>{
    const response= await axios.post("http://localhost:4000/api/v1/login",{email,password})
    console.log(response)
    if(response.data.success){
      toast.success("login Successfull")
      setToken(response.data.token)
      localStorage.setItem('token',response.data.token)
      navigate("/home")
      
    }
    
  }

  return (
    <div className='flex justify-center items-center w-full h-screen border'>
      
      <div className='border bottom-4 flex flex-col w-[25%] h-[45%] sd:w-[90px]'>
         <div className='flex justify-center items-center'>
          <h2 className='text-2xl font-semibold'>Login</h2>
         </div>
        <input onChange={(e)=>{setEmail(e.target.value)}} className=' border p-3 m-2 mt-6' type="email" placeholder='Enter a email' />
        <input onChange={(e)=>{setPassword(e.target.value)}} className=' border p-3 m-2 mt-6' type="password" placeholder='Enter a Password' />
        <button onClick={LoginHandler} className='m-2 p-3 mt-6 border border-gray-300 rounded-lg hover:bg-slate-400'>Log in</button>
        <Link to="/sign" className='m-2 text-blue-400 hover:cursor-pointer' > does not  have any account ?</Link>
      </div>

    </div>
  )
}

export default Login
