import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header({ navItems }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <header className="h-32 w-screen bg-dark-black flex p-6 items-center justify-between text-sortOf-white text-base font-poppins border-b border-b-rose overflow-hidden">
            {/* Logo/Home Link */}
            <Link to="/" className="cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8">
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
                className="size-8 cursor-pointer lg:hidden">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>

            {/* Navigation Links */}
            <nav className={`
          ${isOpen ? "block" : "hidden"}        
          absolute inset-0 bg-dark-black flex flex-col items-center justify-around
          lg:static lg:flex lg:flex-row lg:items-center lg:justify-around lg:bg-transparent
           `}>

           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14 cursor-pointer lg:hidden absolute top-12 right-24" onClick={toggleMenu}>    
           <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>

                {navItems.map(({ to, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end
                        className="
                         text-4xl rounded-xl  h-18 w-80  bg-purple grid place-items-center text-white lg:bg-transparent lg:h-10 lg:w-48 lg:text-base lg:rounded-lg ">
                        {label}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
}
