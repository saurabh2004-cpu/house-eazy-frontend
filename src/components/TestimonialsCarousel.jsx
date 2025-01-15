'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function TestimonialCarousel() {
    const testimonials = [
        {
            text: "HouseEazy has been a reliable choice for me when purchasing my flat in Noida. Their services, from showcasing properties online to round-the-clock support, were flawless. I can't recommend .",
            name: "Debopriya Halder",
            role: "Buyer",
            initials: "DH",
            color: "#FFA500",
        },
        {
            text: "The team at HouseEazy made my property search incredibly smooth. Their digital platform is intuitive, and the virtual tours saved me so much time. I found my dream home faster than I expected.",
            name: "Amit Kumar",
            role: "Buyer",
            initials: "AK",
            color: "#00C9A7",
        },
        {
            text: "What stands out about HouseEazy is their transparency and professionalism. The entire process from property selection to final documentation was handled efficiently. Highly recommended!",
            name: "Priya Choudhary",
            role: "Buyer",
            initials: "PC",
            color: "#D35400",
        },
    ];

    return (
        <>
            <section className="py-5">
                <div className="container">
                    {/* Header */}
                    <div className="row mb-5">
                        <div className="col-12">
                            <h2 className="display-4 fw-bold mb-3">
                                Customer love<span className="text-danger">.</span>
                            </h2>
                            <p className="text-muted fs-5">
                                We Are The Trusted Choice Of Numerous Buyers
                            </p>
                        </div>
                    </div>

                    {/* Carousel */}
                    <div className="position-relative">
                        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <div className="row justify-content-center">
                                            <div className="col-12 col-lg-10">
                                                {/* Quote */}
                                                <div className="position-relative mb-4">
                                                    <p className=" fs-3  text-center px-4 px-md-2">
                                                        {testimonial.text}
                                                    </p>
                                                </div>

                                                {/* Profile */}
                                                <div className="d-flex align-items-center justify-content-center gap-3">
                                                    <div
                                                        className="rounded-circle d-flex align-items-center justify-content-center text-white fs-4 fw-bold"
                                                        style={{
                                                            width: '64px',
                                                            height: '64px',
                                                            backgroundColor: testimonial.color,
                                                        }}
                                                    >
                                                        {testimonial.initials}
                                                    </div>
                                                    <div>
                                                        <h3 className="h5 mb-1">{testimonial.name}</h3>
                                                        <p className="text-muted mb-0">{testimonial.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Buttons */}
                            <div className="position-absolute  bottom-100 end-0 mt-0 me-2 d-flex gap-2">
                                <button
                                    className="p-3 sm:p-4 btn btn-outline-secondary rounded-circle"
                                    type="button"
                                    data-bs-target="#testimonialCarousel"
                                    data-bs-slide="prev"
                                >
                                    <ArrowLeft size={24} />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="p-3 sm:p-4 btn btn-outline-secondary rounded-circle"
                                    type="button"
                                    data-bs-target="#testimonialCarousel"
                                    data-bs-slide="next"
                                >
                                    <ArrowRight size={24} />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container my-5">
                    <div className="bg-danger text-white rounded-4 p-4 p-md-5 d-flex flex-column flex-md-row align-items-center justify-content-between">
                        <div className="mb-3 mb-md-0">
                            <h2 className="fw-bold mb-2">Buy Your Dream Home Today!</h2>
                            <p className="mb-0">
                                With HouseEazy, you can buy your new home without stepping out of your current one.
                            </p>
                        </div>
                        <button className="btn btn-light d-flex align-items-center gap-2 fw-bold px-4 py-2 rounded-pill hover:bg-blue-500">
                            Yes, I'm Interested <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>
        </>

    );
}
