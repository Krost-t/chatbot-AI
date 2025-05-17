import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const items = [
    { to: "/auth/connexion",  label: "Connexion" },
    { to: "/auth/inscription",  label: "Inscription" },
  ];

  return (
    <>
      <Header navItems={items} /> 
      <main className="min-h-[calc(100dvh-8rem-4rem)] bg-gradient-to-b from-dark-black to-gray-900 text-sortOf-white font-poppins overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Bienvenue sur notre Chatbot IA
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/auth/connexion" 
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Se connecter
              </Link>
              <Link 
                to="/auth/inscription" 
                className="px-8 py-3 bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                S'inscrire
              </Link>
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-purple-400 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">IA Avancée</h3>
              <p className="text-gray-400">Technologie de pointe pour des réponses précises et pertinentes</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-purple-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Réponses Rapides</h3>
              <p className="text-gray-400">Obtenez des réponses instantanées à vos questions</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-purple-400 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Sécurisé</h3>
              <p className="text-gray-400">Vos conversations sont protégées et confidentielles</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}