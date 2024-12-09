import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MyContext } from "../context/Context";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

// Constants
const AVATAR_URL = "https://avatar.iran.liara.run/public/boy";
const API_URL = "http://localhost:4000/api/v1/Userpost";

const Profile = () => {
  const [data, setData] = useState([]);
  const { token, setToken } = useContext(MyContext);
  const [loading, setLoading] = useState(true);

  // Fetch user data from API
  const fetchUserData = async () => {
    try {
      if (!token) {
        console.warn("Token is missing, skipping API call");
        return;
      }
      const response = await axios.post(API_URL, {}, { headers: { token } });
      setData(response.data.post || []);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete Handler for Delter a user Post
  const DeleteHandler = async (id) => {

    try {
      const response = await axios.post('http://localhost:4000/api/v1/DeletePost', { id })
      fetchUserData()
      toast.success(response.data.message)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  // Retrieve token from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [setToken]);

  // Trigger API call when token is set
  useEffect(() => {
    if (token) {
      fetchUserData();
    }
  }, [token]);

  // UI Components
  const LoadingState = () => (
    <p className="text-center text-gray-500 mt-5">Loading user data...</p>
  );

  const EmptyState = () => (
    <p className="text-center text-gray-500 mt-5">No data available.</p>
  );

  return (


    <div className="mt-[90px] w-screen  px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {loading ? (
        <LoadingState />
      ) : data.length === 0 ? (
        <EmptyState />
      ) : (
        data.map((item) => (
          <div className="border rounded-lg shadow-md p-4 w-full max-w-full h-[400px] bg-white" key={item._id}>
            <div className="border-b pb-3 mb-3 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={AVATAR_URL}
                  alt="User"
                />
                <h3 className="text-base font-semibold text-gray-800">
                  {item?.author?.name || "Unknown Author"}
                </h3>
              </div>
              <MdDelete
                className="text-red-500 hover:cursor-pointer hover:scale-110 transition-transform duration-150"
                onClick={() => DeleteHandler(item._id)}
                title="Delete"
              />
            </div>
            <div className="font-semibold text-lg text-gray-900 mt-2">
              {item.title}
            </div>
            <div className="text-gray-700 mt-2 leading-relaxed overflow-auto h-[200px]">
              {item.content}
            </div>
          </div>
        ))
      )}
    </div>
  </div>
  


  );
};

export default Profile;
