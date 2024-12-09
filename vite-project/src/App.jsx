import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { Routes, Route, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import { MyContext } from './context/Context';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatePost from './components/CreatePost';
import Profile from './components/Profile';

function App() {

  const { token, setToken } = useContext(MyContext)
  const getToekn = () => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
  }
  useEffect(() => {
    getToekn()
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/yourPost' element={<Profile/>} />
        <Route path='/createpost' element={<CreatePost />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
