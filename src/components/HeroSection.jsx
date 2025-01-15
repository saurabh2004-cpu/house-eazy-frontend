'use client'

import { useState } from "react";


export default function HeroSection() {
    const [address, setAddress] = useState('Noida');

    const cities = [
        { name: 'Noida' },
        { name: 'Delhi' },
    ]

    return (
        <div
            className="position-relative vh-100 d-flex align-items-center"
            style={{
                backgroundImage: `url('/images/HeroImg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Dark overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            ></div>

            <div className="container position-relative">
                <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        {/* Main heading */}
                        <h1 className="display-4 text-white mb-4 fw-bold">
                            Buy a house in just 5 minutes,
                            <br />
                            from the comfort of your couch
                        </h1>

                        {/* Search form */}
                        <div className="bg-white rounded-pill p-2 mb-4 d-flex align-items-center">
                            <div className="dropdown" style={{ minWidth: '120px' }}>
                                <button
                                    className="btn dropdown-toggle text-start w-100"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span className="me-2">{address}</span>
                                </button>
                                <ul className="dropdown-menu ">
                                    {/* <li ><button className="dropdown-item">Noida</button></li>
                                    <li><button className="dropdown-item">Delhi</button></li>
                                    <li><button className="dropdown-item">Gurgaon</button></li> */}

                                    {cities.map((city, index) => (
                                        <li key={index} >
                                            <button onClick={() => setAddress(city.name)} className="dropdown-item ">{city.name}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="vr mx-2 opacity-25"></div>

                            <input
                                type="text"
                                className="form-control border-0 shadow-none flex-grow-1"
                                placeholder="Search for projects"
                            />

                            <button className="btn btn-primary rounded-pill px-4">
                                <span className="ms-2 d-none d-md-inline">Search</span>
                            </button>
                        </div>

                        {/* Subtitle */}
                        <p className="text-white mb-0 opacity-90 px-md-4">
                            HouseEazy is a new-age technology platform that aims to change the way
                            <br className="d-none d-md-block" />
                            real estate resale transactions are done
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

