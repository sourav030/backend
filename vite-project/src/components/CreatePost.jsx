import React, { useContext, useState } from 'react'
import axios from 'axios'
import { MyContext } from '../context/Context'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const CreatePost = () => {
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const {token,setToken}=useContext(MyContext)
    const navigate=useNavigate()

        const Post= async ()=>{
        console.log(token)
        const response=await axios.post('http://localhost:4000/api/v1/post',{title,content},{headers: {
            token: token, 
        }})
        if(response.data.success){
            navigate('/home')
        }
        toast.success(response.data.message)
        
        console.log(response)
    }
    
    return (
        <div className='flex justify-center  mt-11 h-screen '>
        {
            token ? 
            <div className='mt-2 border border-grey-600  w-[25%] h-[200px] mt-5 '>
            <div className='border border-b-gray-600 flex h-[55px]'>
                <input onChange={(e)=>setTitle(e.target.value)} value={title} className=' p-2 border w-full ' type="text" placeholder='Enter your Title' />
            </div>

            <div className=' mt-1 h-[100px]'>
                <textarea onChange={(e)=>setContent(e.target.value)} value={content} className='w-full border p-2' name="postContent" rows={4} cols={40} />
            </div>

            <button onClick={Post} className='font-semibold text-xl h-[40px]  bg-gray-200 hover:bg-blue-500 rounded-sm w-full border'>Post</button>

        </div>:
        <Login />
        }
        </div>
    )
}

export default CreatePost
