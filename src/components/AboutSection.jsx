'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function AboutSection() {
    const [counts, setCounts] = useState({
        dataPoints: 0,
        offers: 0,
        minutes: 0
    })
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('stats-section')
            if (element) {
                const rect = element.getBoundingClientRect()
                if (rect.top <= window.innerHeight && !animated) {
                    setAnimated(true)
                    animateNumbers()
                }
            }
        }

        const animateNumbers = () => {
            const duration = 2000 // 2 seconds
            const steps = 60
            const interval = duration / steps

            let step = 0
            const timer = setInterval(() => {
                step++
                const progress = step / steps

                setCounts({
                    dataPoints: Math.floor(progress * 1000000),
                    offers: Math.floor(progress * 10000),
                    minutes: Math.floor(progress * 10)
                })

                if (step >= steps) clearInterval(timer)
            }, interval)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [animated])

    return (
        <section
            className="position-relative min-vh-100 d-flex align-items-center py-5"
            style={{
                backgroundImage: `url('/images/AboutSectionImg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Dark overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            ></div>

            <div className="container position-relative text-white">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        {/* Heading */}
                        <h1 className="display-3 fw-bold mb-4">
                            About<br />
                            HouseEazy<span className="text-danger">.</span>
                        </h1>

                        {/* Description */}
                        <p className="fs-5 mb-4">
                            HouseEazy is a new age digital platform that aims to change the way resale transactions are done.
                        </p>
                        <p className="fs-5 mb-4">
                            Sellers & Buyers can now avoid the long & tedious traditional process and conclude the transaction at the best price, at the click of a button.
                        </p>
                        <p className="fs-5 mb-5">
                            Our platform offers seamless and direct flow of information to all stakeholders, thereby bringing complete transparency and trust.
                        </p>

                        {/* CTA Buttons */}
                        <div className="d-flex flex-wrap gap-3 mb-5">
                            <button className="btn btn-light rounded-pill px-4 py-2 d-flex align-items-center">
                                Learn More
                                <ArrowRight className="ms-2" size={20} />
                            </button>
                            <button className="btn btn-danger rounded-pill px-4 py-2 d-flex align-items-center">
                                Contact Us
                                <ArrowRight className="ms-2" size={20} />
                            </button>
                        </div>

                        {/* Statistics */}
                        <div id="stats-section" className="row g-4 mt-5 ">
                            <div className="col-12 col-md-4">
                                <div className="stats-item">
                                    <h2 className="stats-number">
                                        <span className="counter fs-1">
                                            {counts.dataPoints.toLocaleString()}
                                        </span>
                                        <span className="text-danger">+</span>
                                    </h2>
                                    <p className="stats-text">
                                        Data Points for Arriving at the Best Price
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="stats-item">
                                    <h2 className="stats-number">
                                        <span className="counter  fs-1">
                                            {counts.offers.toLocaleString()}
                                        </span>
                                        <span className="text-danger">+</span>
                                    </h2>
                                    <p className="stats-text">
                                        Offers Given
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="stats-item">
                                    <h2 className="stats-number">
                                        <span className="counter fs-1">
                                            {counts.minutes}
                                        </span>
                                    </h2>
                                    <p className="stats-text">
                                        Minutes Needed to Sell your House
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

