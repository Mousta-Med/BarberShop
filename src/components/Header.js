import React from "react";
import { useState } from 'react';
import Logo from "../assets/images/logo.png"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="bg-black text-white py-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4">
                <a href="https://barbershopmed.netlify.app/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                        src={Logo}
                        alt="BarberShop Logo"
                        className="h-12 w-12 rounded-full object-cover"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-yellow-500">
                        BarberShop
                    </span>
                </a>
                <nav className="hidden md:flex space-x-6">
                    <a href="#services" className="hover:text-yellow-500">Services</a>
                    <a href="#about" className="hover:text-yellow-500">About</a>
                    <a href="#appointment" className="hover:text-yellow-500">Appointment</a>
                    <a href="#contact" className="hover:text-yellow-500">Contact</a>
                </nav>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <nav className="flex flex-col space-y-4 py-4 px-6 bg-black text-white">
                    <a href="#services" className="hover:text-yellow-500">Services</a>
                    <a href="#about" className="hover:text-yellow-500">About</a>
                    <a href="#appointment" className="hover:text-yellow-500">Appointment</a>
                    <a href="#contact" className="hover:text-yellow-500">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;