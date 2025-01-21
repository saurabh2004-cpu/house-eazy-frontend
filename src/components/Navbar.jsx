'use client';
import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import axios from 'axios';
import { refreshAccessToken } from '@/utils/refreshAccessToken';

const Navbar = () => {
  const [user, setUser] = useState({})


  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users/current-user',
          { withCredentials: true }
        );
        console.log("response", response);
        if (!response.data.user) {
          console.log("unauthorized")
        }

        setUser(response.data.user)

      } catch (error) {
        console.log(error);
        if (error.status === 400) {
          const user = await refreshAccessToken();

          if (user) {
            setUser(user)
          } else {
            console.log("unauthorized")
          }
        }
      }
    };

    getCurrentUser();
  }, []);

  const handleLogout = async () => {

    try {
      const response = await axios.post('http://localhost:3000/api/users/logout',
        {
          withCredentials: true
        }
      )

      console.log("response", response)
      setUser(null)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <nav className="bg-blue-500 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          MyWebsite
        </div>
        {user && <div className="text-white text-2xl font-semibold">
          {user.username}
        </div>}

        <Link href='/user-details'>
          <Button className="shadcn-btn shadcn-btn-primary text-white bg-blue-600 hover:bg-blue-700">
            Upload User Details
          </Button>
        </Link>

        <div className="flex space-x-4">
          <Link href='/log-in'>
            <Button className="shadcn-btn shadcn-btn-primary text-white bg-blue-600 hover:bg-blue-700">
              Login
            </Button>
          </Link>
          <Button className="shadcn-btn shadcn-btn-outline text-white border-2 border-white hover:bg-white hover:text-blue-600">
            SignUp
          </Button>
        </div>
        <button
          className="shadcn-btn shadcn-btn-outline text-white border-2 border-white hover:bg-white hover:text-blue-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
