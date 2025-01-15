'use client'

import { useEffect, useRef } from 'react'
import { Search, FileText, Key, ArrowRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "1",
      title: "Go Check",
      icon: <Search className="text-[#F47373]" size={32} />,
      description: "Check out the many properties we have, filter them basis your needs.",
      delay: 0
    },
    {
      number: "2",
      title: "Go Shortlist",
      icon: <FileText className="text-[#003B73]" size={32} />,
      description: "Shortlist the homes that suit your requirement and, see them in life-like conditions with our AR/VR tools.",
      delay: 0.2
    },
    {
      number: "3",
      title: "Go Close",
      icon: <Key className="text-[#F47373]" size={32} />,
      description: "Close online or meet our experts to close the transaction.",
      delay: 0.4
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: {
      x: -100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  }

  return (
    <section className="py-5 bg-white" ref={ref}>
      <div className="container">
        <div className="row align-items-start">
          {/* Left side - Heading */}
          <motion.div
            className="col-12 col-lg-4 mb-4 mb-lg-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="display-4 fw-bold mb-0">
              Our Eazy<br />
              3-Step Process<span className="text-danger">.</span>
            </h2>
          </motion.div>

          {/* Right side - Content */}
          <div className="col-12 col-lg-8">
            <motion.p
              className="text-muted mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Today, almost everything has been digitally transformed. It is only fitting that the
              residential reselling business keeps up with the changing times. We are,
              therefore, redefining the process through HouseEazy. Buying through us can be
              best broken down into three simple steps.
            </motion.p>

          </div>
          <div className='my-12'>
            {/* Process Steps */}
            <motion.div
              className="d-flex flex-col sm:flex-row gap-4 my-12"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex-grow-1"
                  variants={cardVariants}
                >
                  <div className="card border-0 process-card">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center">
                        <div className="process-icon rounded-circle d-flex align-items-center justify-content-center bg-light p-3 me-3">
                          {step.icon}
                        </div>
                        <div className="flex-grow-1">
                          <h3 className="h5 mb-2">{step.title}</h3>
                          <p className="text-muted mb-0">{step.description}</p>
                        </div>
                        <div>
                          <div className="process-number display-1 fw-bold text-black-50">
                            {step.number}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="text-center mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button className="btn btn-primary btn-lg rounded-pill px-4 py-2 d-inline-flex align-items-center">
                Too Busy to Browse? Talk To Our Expert
                <ArrowRight className="ms-2" size={20} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
