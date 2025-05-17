import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header({ navItems }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <header className="h-32 w-screen bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 flex p-6 items-center justify-between text-white text-base font-poppins shadow-lg">
            {/* Logo/Home Link */}
            <Link to="/" className="cursor-pointer hover:scale-110 transition-transform duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 text-purple-300 hover:text-white transition-colors">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                </svg>
            </Link>

            {/* Mobile Menu Icon */}
            <svg
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 cursor-pointer lg:hidden text-purple-300 hover:text-white transition-colors">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>

            {/* Navigation Links */}
            <nav className={`
                ${isOpen ? "block" : "hidden"}        
                absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 flex flex-col items-center justify-around
                lg:static lg:flex lg:flex-row lg:items-center lg:justify-around lg:bg-transparent
            `}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-14 cursor-pointer lg:hidden absolute top-12 right-24 text-purple-300 hover:text-white transition-colors" 
                    onClick={toggleMenu}
                >    
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

                <Link
                    to="/auth/connexion"
                    className="text-4xl rounded-xl h-18 w-80 bg-gradient-to-r from-purple-600 to-purple-700 
                    hover:from-purple-500 hover:to-purple-600 grid place-items-center text-white transition-all duration-300
                    shadow-lg hover:shadow-purple-500/25 transform hover:scale-105
                    lg:bg-gradient-to-r lg:from-purple-600 lg:to-purple-700 lg:h-12 lg:w-40 lg:text-base lg:rounded-lg
                    lg:hover:from-purple-500 lg:hover:to-purple-600"
                >
                    Connexion
                </Link>

                <Link
                    to="/auth/inscription"
                    className="text-4xl rounded-xl h-18 w-80 bg-transparent border-2 border-purple-500
                    hover:bg-purple-500/10 grid place-items-center text-white transition-all duration-300
                    shadow-lg hover:shadow-purple-500/25 transform hover:scale-105
                    lg:h-12 lg:w-40 lg:text-base lg:rounded-lg"
                >
                    Inscription
                </Link>
            </nav>
        </header>
    );
}
