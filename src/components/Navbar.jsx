'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, User, Menu } from 'lucide-react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Our Properties', href: '/properties' },
        { name: 'Career', href: '/career' },
        { name: 'Contact', href: '/contact' },
        { name: 'Partner Login', href: '/login' }
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white border-b z-50">
            <div className="max-w-[1400px] mx-auto px-4 h-[72px] flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <span className="text-2xl font-bold">House</span>
                    <div className="relative">
                        <span className="text-2xl font-bold text-[#F47373]">Eazy</span>
                        <div className="absolute -bottom-1 -right-4 w-6 h-6">
                            <div className="w-full h-full border-b-2 border-r-2 border-[#F47373] rounded-br-full"></div>
                        </div>
                    </div>
                </Link>

                {/* Center Buttons */}
                <div className="hidden md:flex items-center gap-4 ml-20">
                    <button className="px-8 py-2 bg-[#003B73] text-white rounded-full hover:bg-opacity-90 transition-colors">
                        Sell
                    </button>
                    <button className="px-8 py-2 bg-[#F47373] text-white rounded-full hover:bg-opacity-90 transition-colors">
                        Buy
                    </button>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-2 sm:gap-6 ">
                    {/* Contact - Hidden on mobile */}
                    <div className=" md:flex flex-col items-center gap-2">
                        <div className='hidden md:flex l items-center gap-2'>
                            <Phone className="w-4 h-4 text-[#F47373]" />
                            <span className="text-sm text-gray-500">Call us</span>
                        </div>
                        <a href="tel:+918800769417" className="text-sm font-medium">
                            +91-88 00 76 94 17
                        </a>
                    </div>

                    {/* Login and Profile */}
                    <Link href="/login" className="hidden md:block text-sm font-medium hover:text-[#003B73] ">
                        Log In
                    </Link>
                    <button className="w-10 h-10 rounded-full bg-[#003B73] flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                    </button>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsOpen(false)} />
            )}

            {/* Mobile Menu */}
            <div className={`fixed top-0 bottom-0 right-0 w-[300px] bg-[#001d39] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="p-4 mt-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="mb-6 text-gray-500 hover:text-gray-700 bg-red-500 text-white rounded-full px-2 py-1"
                    >
                        ✕
                    </button>
                    <div className="space-y-4 text-center flex flex-col items-center  font-large"> 
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="w-full px-4 py-2 text-white rounded-2xl">
                                {link.name}
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </nav>
    )
}

