'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function ContactForm() {

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: ''
  })

  const handleSubmit = (e) => { }

  return (
    <div className="container my-4">
      <div className="rounded-4 bg-[#F47373] p-4 p-md-5">
        <form onSubmit={handleSubmit} className="row g-3 align-items-center">
          {/* Heading - Full width on mobile, auto on desktop */}
          <div className="col-12 col-md-auto mb-3 mb-md-0">
            <h2 className="text-white fs-4 fw-bold m-0">
              Start Your Home Buying<br className="d-md-none" /> Journey Now!
            </h2>
          </div>

          {/* Form Fields Container */}
          <div className="col-12 col-md">
            <div className="row g-3">
              {/* Full Name */}
              <div className="col-12 col-md">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="fullName"
                    placeholder="Enter Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                  <label htmlFor="fullName">Full Name</label>
                </div>
              </div>

              {/* Phone Number */}
              <div className="col-12 col-md">
                <div className="form-floating">
                  <div className="input-group">
                    <span className="input-group-text rounded-pill py-3 rounded-end-0 bg-white border-end-0">
                      +91
                    </span>
                    <input
                      type="tel"
                      className="form-control rounded-pill rounded-start-0"
                      id="phoneNumber"
                      placeholder="Enter Phone"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    />
                    {/* <label htmlFor="phoneNumber">Phone Number</label> */}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="col-12 col-md">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control rounded-pill"
                    id="email"
                    placeholder="Enter Email ID"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-12 col-md-auto">
                <button 
                  type="submit" 
                  className="btn btn-primary rounded-circle p-3 d-flex align-items-center justify-content-center"
                  style={{ 
                    backgroundColor: '#003B73',
                    border: 'none',
                    width: '48px',
                    height: '48px'
                  }}
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

