import React from "react";

export default function Footer() {
    return (
        <footer className="h-16 w-screen bg-gradient-to-r absolute  bottom-0 from-gray-900 via-purple-900 to-gray-900 text-white flex items-center justify-center font-poppins shadow-lg">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm">
                    © 2024 Christ Matsanga Nzoulou. 
                    <span className="block text-purple-300 text-xs mt-1">
                        Tous droits réservés
                    </span>
                </p>
            </div>
        </footer>
    );
}