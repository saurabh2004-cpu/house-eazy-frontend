'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Facebook } from 'lucide-react';
import axios from 'axios';

const LogIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  

  // Handle form submission
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await axios.post('http://localhost:3000/api/users/log-in', data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log("response", response);
    } catch (error) {
      console.error(error);
    }
    router.push('/user-details');
  };

  const handleLogInWithFacebook = async () => {
    window.location.href = 'http://localhost:3000/api/users/auth/facebook';
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-2xl max-w-lg w-full">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Sign In</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`w-full p-4 border-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out`}
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className={`w-full p-4 border-2 ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out`}
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
          </div>

          <Button
            type="submit"
            className="shadcn-btn shadcn-btn-primary w-full text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out py-3 rounded-lg text-lg"
          >
            Sign In
          </Button>
        </form>

        {/* Facebook Button */}
        <div className="mt-6 flex items-center justify-center">
          <Button
            className="shadcn-btn shadcn-btn-primary w-full text-white  hover:bg-blue-700 transition-all duration-300 ease-in-out py-3 rounded-lg text-lg"
            onClick={handleLogInWithFacebook}
          >
            <i className="fab fa-facebook-f mr-3"><Facebook /></i> Login with Facebook
          </Button>
        </div>

        {/* Forgot Password Link */}
        <div className="mt-6 text-center">
          <Link href="#" className="text-indigo-500 text-sm font-medium hover:underline transition-all duration-300 ease-in-out">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
