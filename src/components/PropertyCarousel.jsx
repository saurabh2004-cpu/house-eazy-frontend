'use client'

import { MapPin, ArrowLeft, ArrowRight } from 'lucide-react'


export default function PropertyCarousel() {

    const properties = [
        {
            id: 1,
            name: "Himalaya Pride",
            image: "/images/HeroImg.jpg?height=400&width=600",
            location: "Noida Extension",
            homes: 1
        },
        {
            id: 2,
            name: "Panchsheel Wellington",
            image: "/images/HeroImg.jpg?height=400&width=600",
            location: "Crossings",
            homes: 1
        },
        {
            id: 3,
            name: "Galaxy North Avenue 2",
            image: "/images/HeroImg.jpg?height=400&width=600",
            location: "Noida Extension",
            homes: 1
        },
        {
            id: 4,
            name: "GH 7",
            image: "/images/HeroImg.jpg?height=400&width=600",
            location: "Crossings",
            homes: 1
        },
        {
            id: 5,
            name: "GH 7",
            image: "/images/HeroImg.jpg?height=400&width=600",
            location: "Crossings",
            homes: 1
        },
        {
            id: 6,
            name: "GH 7",
            image: "/images/HeroImg.jpg?height=400&width=600",
            location: "Crossings",
            homes: 1
        }
    ]

    return (
        <section className="py-5">
            <div className="container">
                {/* Header */}
                <div className="mb-5">
                    <h2 className="display-4 fw-bold mb-3">
                        Buyer Property<span className="text-danger"></span>
                    </h2>
                    <p className="text-muted fs-5">
                        Explore some of the top-listed properties on our website.
                    </p>
                </div>

                {/* Carousel */}
                <div className="position-relative">
                    <div id="propertyCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {/* First slide with multiple items */}
                            <div className="carousel-item active">
                                <div className="row g-4">
                                    {properties.slice(0, 3).map(property => (
                                        <div key={property.id} className="col-12 col-md-6 col-lg-4">
                                            <div className="card border-0 rounded-4 overflow-hidden shadow">
                                                <div className="position-relative">
                                                    <img
                                                        src={property.image}
                                                        className="card-img-top"
                                                        alt={property.name}
                                                        style={{ height: '300px', objectFit: 'cover' }}
                                                    />
                                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-dark">
                                                        <h3 className="h4 text-white mb-2">{property.name}</h3>
                                                        <p className="text-white mb-3">
                                                            Explore {property.homes} home in this project.
                                                        </p>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <button className="btn btn-light rounded-pill px-4">
                                                                View More
                                                            </button>
                                                            <div className="text-white d-flex align-items-center">
                                                                <MapPin size={16} className="me-1" />
                                                                {property.location}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Second slide with remaining items */}
                            <div className="carousel-item">
                                <div className="row g-4">
                                    {properties.slice(3).map(property => (
                                        <div key={property.id} className="col-12 col-md-6 col-lg-4">
                                            <div className="card border-0 rounded-4 overflow-hidden shadow">
                                                <div className="position-relative">
                                                    <img
                                                        src={property.image}
                                                        className="card-img-top"
                                                        alt={property.name}
                                                        style={{ height: '300px', objectFit: 'cover' }}
                                                    />
                                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-dark">
                                                        <h3 className="h4 text-white mb-2">{property.name}</h3>
                                                        <p className="text-white mb-3">
                                                            Explore {property.homes} home in this project.
                                                        </p>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <button className="btn btn-light rounded-pill px-4">
                                                                View More
                                                            </button>
                                                            <div className="text-white d-flex align-items-center">
                                                                <MapPin size={16} className="me-1" />
                                                                {property.location}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Custom navigation buttons */}
                        <div className="position-absolute top-50 start-0 translate-middle-y d-none d-md-block">
                            <button
                                className="btn btn-light rounded-circle shadow-sm p-2"
                                type="button"
                                data-bs-target="#propertyCarousel"
                                data-bs-slide="prev"
                            >
                                <ArrowLeft size={24} />
                                <span className="visually-hidden">Previous</span>
                            </button>
                        </div>
                        <div className="position-absolute top-50 end-0 translate-middle-y d-none d-md-block">
                            <button
                                className="btn btn-light rounded-circle shadow-sm p-2"
                                type="button"
                                data-bs-target="#propertyCarousel"
                                data-bs-slide="next"
                            >
                                <ArrowRight size={24} />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* View all button */}
                <div className="text-center mt-5 flex justify-content-center ">
                    <button className="btn btn-primary btn-lg rounded-pill px-5 d-flex align-items-center ">
                        <span>View Our Amazing Homes</span>
                        <ArrowRight className="ms-2" size={20} />
                    </button>
                </div>

            </div>
        </section>
    )
}

