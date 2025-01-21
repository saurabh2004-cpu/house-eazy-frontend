'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { User, Mail, MapPin, Camera, CloudFog } from 'lucide-react';
import axios from 'axios';

const UserDetailsForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageError, setImageError] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append('userName', data.userName);
    formData.append('fullName', data.fullName);
    formData.append('email', data.email);
    formData.append('address', data.address);

    const fileInput = document.getElementById('image');
    if (fileInput.files.length > 0) {
        for (let i = 0; i < fileInput.files.length; i++) {
            formData.append('images', fileInput.files[i]);
        }
    } else {
        console.error("No files selected");
    }

    console.log("FormData contents:");
    for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
    }

    try {
        const response = await axios.post('http://localhost:3000/api/user-data/upload-user-details', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });

        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
    }
};


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">User Details Form</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* userName Field */}
          <div className="mb-6">
            <label htmlFor="userName" className="block text-gray-700 text-sm font-medium mb-2">
              <User className="mr-2 text-blue-600" />
              userName
            </label>
            <input
              type="text"
              id="userName"
              placeholder="Enter your userName"
              className={`w-full p-3 border-2 ${errors.userName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              {...register('userName', { required: 'userName is required' })}
            />
            {errors.userName && <p className="text-red-500 text-sm mt-2">{errors.userName.message}</p>}
          </div>

          {/* Full Name Field */}
          <div className="mb-6">
            <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-2">
              <User className="mr-2 text-blue-600" />
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className={`w-full p-3 border-2 ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              {...register('fullName', { required: 'Full Name is required' })}
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-2">{errors.fullName.message}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              <Mail className="mr-2 text-blue-600" />
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`w-full p-3 border-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
          </div>

          {/* Address Field */}
          <div className="mb-6">
            <label htmlFor="address" className="block text-gray-700 text-sm font-medium mb-2">
              <MapPin className="mr-2 text-blue-600" />
              Address
            </label>
            <textarea
              id="address"
              placeholder="Enter your address"
              className={`w-full p-3 border-2 ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              {...register('address', { required: 'Address is required' })}
            />
            {errors.address && <p className="text-red-500 text-sm mt-2">{errors.address.message}</p>}
          </div>

          {/* Multiple Image Upload Field */}
          <div className="mb-6">
            <label htmlFor="image" className="block text-gray-700 text-sm font-medium mb-2">
              <Camera className="mr-2 text-blue-600" />
              Upload Images (Max 5)
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              multiple
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('images')}
            />
            {imageError && <p className="text-red-500 text-sm mt-2">{imageError}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsForm;
