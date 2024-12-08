import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from './../context/Context';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const {token,setToken}=useContext(MyContext)
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear()
    setToken('')
    navigate('/login')
  }

  return (
    <div className='flex justify-center '>
      <div className='flex  justify-around border w-[820px]'>
        <NavLink to="/home" className="text-lg">Home</NavLink>
        <NavLink to="/createpost" className="text-lg">Create Post</NavLink>
        <NavLink to="/" className="text-lg">Delete Post</NavLink>
        <NavLink to="/" className="text-lg">Update Post</NavLink>
        {
          token? <p onClick={logout}  to="/" className="text-lg hover:cursor-pointer">LogOut</p> :
          <NavLink to="/login" className="text-lg">Login</NavLink>
        }
         
      </div>
    </div>
  )
}

export default Navbar
