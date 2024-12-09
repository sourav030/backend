import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from './../context/Context';
import Login from './Login';
import axios from 'axios';

const Home = () => {
  const url = 'https://avatar.iran.liara.run/public/boy';
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
    <div>
      {token ? (
        <div className='p-3    mt-8 flex flex-col justify-center items-center overflow-auto'>
          {
            data.map((item) => (
              <div key={item._id} className='border  border-gray-300 mt-9 w-[28%] shadow-xl'>

                <div className='border p-2 flex gap-2'>
                  <img className='w-[45px]' src={url} alt='User' />
                  <p className='p-3 font-bold text-[15px] '>{item.author.name}</p>
                </div>
                <div className='border p-2 font-semibold text-[19px]'> Topic {item.title}</div>
                <div className='m-2 p-2'>
                  {item.content}
                </div>

              </div>
            ))
          }

        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Home;
