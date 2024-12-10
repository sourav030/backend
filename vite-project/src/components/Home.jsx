import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from './../context/Context';
import Login from './Login';
import axios from 'axios';

const Home = () => {
  const url = 'https://avatar.iran.liara.run/public/14';
  const { token, setToken } = useContext(MyContext);
  const [data, setData] = useState([])
  // Fetch data function
  const fetchData = async () => {
    if (!token) {
      console.log('Token not available');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/v1/getpost', {}, {
        headers: {
          token,
        },
      });

      setData(response.data.data)
      data.reverse()
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // useEffect to set the token from localStorage on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, [setToken]);

  // Call fetchData only when token is available
  useEffect(() => {
    if (token) {
      fetchData();
    }

  }, [token]);

  return (
    <div className="mt-[72px]"> {/* Adjust margin-top based on navbar height */}
      {token ? (
        <div className="p-3 flex flex-col justify-center items-center overflow-auto">
          <div className="grid grid-cols-3 gap-6 w-full">
            {data.map((item) => (
              <div key={item._id} className="border border-gray-300 h-[300px] shadow-xl">
                <div className="border p-2 flex gap-2">
                  <img className="w-[45px]" src={url} alt="User" />
                  <p className="p-3 font-bold text-[15px]">{item.author.name}</p>
                </div>
                <div className="border p-2 font-semibold text-[19px]"> {item.title}</div>
                <div className="m-2 p-2 overflow-auto h-[120px] ">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-5">Login Please</p>
      )}
    </div>

  );
};

export default Home;
