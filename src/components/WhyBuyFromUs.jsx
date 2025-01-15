'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Diamond, Lightbulb, Home, CheckCircle } from 'lucide-react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function WhyBuyFromUs() {
  return (
    <section className="py-5 overflow-hidden" style={{ background: '#fff' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="display-4 fw-bold mb-4">
                Why Buy<br />From Us?
              </h1>
              <p className="text-muted mb-4 fs-5">
                Skip the unsafe traditional process which involved multiple visits,
                meetings & negotiations. Try the new-age way to buy and sell
                homes with our cutting edge tech platform that always works out
                the best offer for you.
              </p>
              <motion.button
                className="btn btn-primary btn-lg rounded-pill d-inline-flex align-items-center gap-2"
                style={{ 
                  backgroundColor: '#003B73',
                  border: 'none',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 4px 12px rgba(0, 59, 115, 0.3)'
                }}
              >
                Talk To Us For More Benefits
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Cards Grid */}
          <div className="col-lg-7">
            <div className="row g-4">
              {/* Best Price Card */}
              <div className="col-md-6">
                <motion.div
                  className="card h-100 border-0 rounded-4 overflow-hidden"
                  style={{ 
                    backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250115_033250-cOElATtS6JTdgd5fxePpZNT3kjDADD.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 12px 24px rgba(244, 115, 115, 0.4)'
                  }}
                >
                  <div className="card-body p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4))' }}>
                    <Diamond className="mb-3 text-white" size={32} />
                    <h3 className="h4 mb-3 text-white">Best Price</h3>
                    <p className="mb-0 text-white">
                      We offer homes at very competitive prices due to our economies of scale and our
                      'Customer first' approach.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Refurbished Apartments Card */}
              <div className="col-md-6">
                <motion.div
                  className="card h-100 border-0 rounded-4"
                  style={{ backgroundColor: '#F47373' }}
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 12px 24px rgba(244, 115, 115, 0.4)'
                  }}
                >
                  <div className="card-body p-4">
                    <Lightbulb className="mb-3 text-white" size={32} />
                    <h3 className="h4 mb-3 text-white">Refurbished Apartments</h3>
                    <p className="mb-0 text-white">
                      All our homes go through a 50 point quality check, and are thoroughly refurbished
                      before we show it.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Insured Homes Card */}
              <div className="col-md-6">
                <motion.div
                  className="card h-100 border-0 rounded-4"
                  style={{ backgroundColor: '#F47373' }}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 12px 24px rgba(244, 115, 115, 0.4)'
                  }}
                >
                  <div className="card-body p-4">
                    <Home className="mb-3 text-white" size={32} />
                    <h3 className="h4 mb-3 text-white">Insured Homes</h3>
                    <p className="mb-0 text-white">
                      We offer free home insurance for all our homes, so that you don't worry about any
                      untoward incident and spend your time enjoying the space.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Trustworthy Card */}
              <div className="col-md-6">
                <motion.div
                  className="card h-100 border-0 rounded-4 overflow-hidden"
                  style={{ 
                    backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250115_033250-cOElATtS6JTdgd5fxePpZNT3kjDADD.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 12px 24px rgba(244, 115, 115, 0.4)'
                  }}
                >
                  <div className="card-body p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4))' }}>
                    <CheckCircle className="mb-3 text-white" size={32} />
                    <h3 className="h4 mb-3 text-white">Trustworthy</h3>
                    <p className="mb-0 text-white">
                      Highly safe transactions with strong due diligence & convenience with minimal
                      documentation.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

