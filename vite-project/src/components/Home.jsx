import React, { useContext, useEffect } from 'react'
import { MyContext } from './../context/Context';
import Login from './Login';
import axios from 'axios';


const Home = () => {
  const url = 'https://avatar.iran.liara.run/public/boy'
  const { token, setToken } = useContext(MyContext)

  const fetchData = async (req, res) => {
    setToken(localStorage.getItem('token'))
    const response = await axios.post('http://localhost:4000/api/v1/getpost', {}, {
      headers: {
        token:token
      }
    })
    console.log(response)
  }

  useEffect(()=>{
     
     fetchData()
  },[])

  return (
    <div>
      {
        token ?
          <div className=' p-3 flex flex-col justify-center items-center overflow-auto '>

            <div className=' border  border-gray-300 mt-9 w-[22%]'>

              <div className='border p-2 flex gap-2'>
                <img className='w-[45px]' src={url} />
                <p className='p-3'>userName</p>
              </div>

              <div className='border p-2'>topic</div>
              <div className='m-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora eius libero nobis possimus? Doloremque voluptas dolor maxime eligendi repudiandae numquam iusto iste accusamus qui pariatur, omnis, recusandae assumenda minus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nemo. Reiciendis repellat porro fugiat atque ratione possimus quam dolorem sed dolor iure? Quos vero quasi amet ex sit ipsam id?
              </div>
            </div>

            <div className=' border  border-gray-300 mt-9 w-[22%]'>

              <div className='border p-2 flex gap-2'>
                <img className='w-[45px]' src={url} />
                <p className='p-3'>userName</p>
              </div>

              <div className='border p-2'>topic</div>
              <div className='m-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora eius libero nobis possimus? Doloremque voluptas dolor maxime eligendi repudiandae numquam iusto iste accusamus qui pariatur, omnis, recusandae assumenda minus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nemo. Reiciendis repellat porro fugiat atque ratione possimus quam dolorem sed dolor iure? Quos vero quasi amet ex sit ipsam id?
              </div>
            </div>
          </div> :
          <Login />
      }
    </div>
  )
}

export default Home
