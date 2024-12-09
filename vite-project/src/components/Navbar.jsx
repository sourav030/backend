import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from './../context/Context';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = () => {
  const {token,setToken}=useContext(MyContext)
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear()
    toast.success("Logout Success Full")
    setToken('')
    navigate('/login')
  }

  return (
    <div className=' relative  flex justify-center   '>
      <div className=' bg-black text-white fixed top-0  p-3 w-full font-bold flex  justify-around border '>
        <NavLink to="/home" className="text-lg hover:bg-gray-300">Home</NavLink>
        <NavLink to="/createpost" className="text-lg hover:bg-gray-300">Create Post</NavLink>
        <NavLink to="/task" className="text-lg hover:bg-gray-300">Task</NavLink>
        <NavLink to="/Profile" className="text-lg hover:bg-gray-300">Profile</NavLink>
        {
          token? <p onClick={logout}  to="/" className="text-lg hover:cursor-pointer hover:bg-gray-300">LogOut</p> :
          <NavLink to="/login" className="text-lg">Login</NavLink>
        }
         
      </div>
    </div>
  )
}

export default Navbar
