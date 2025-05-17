import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useLocation, Link } from "react-router-dom";
import Connexion from "../components/Connexion";
import Inscription from "../components/Inscription";

export default function Auth() {
    const location = useLocation();
    const isConnexion = location.pathname === "/auth/connexion";

    const items = [
        { to: "/auth/connexion", label: "Connexion" },
        { to: "/auth/inscription", label: "Inscription" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-dark-black to-gray-900">
            <Header navItems={items} />
            
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-md mx-auto">
                    <div className="bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-white mb-2">
                                {isConnexion ? "Connexion" : "Inscription"}
                            </h2>
                            <p className="text-gray-400">
                                {isConnexion 
                                    ? "Connectez-vous pour accéder à votre compte" 
                                    : "Créez votre compte pour commencer"}
                            </p>
                        </div>
                        
                        <div className="animate-fade-in">
                            {isConnexion ? <Connexion /> : <Inscription />}
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-gray-400">
                                {isConnexion 
                                    ? "Pas encore de compte ? " 
                                    : "Déjà un compte ? "}
                                <Link 
                                    to={isConnexion ? "/auth/inscription" : "/auth/connexion"}
                                    className="text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    {isConnexion ? "S'inscrire" : "Se connecter"}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
} 