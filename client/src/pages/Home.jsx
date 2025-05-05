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

    
      <Header navItems={items}  /> 
   
      
      <main className="min-h-[calc(100dvh-8rem-4rem)]  bg-dark-black text-sortOf-white font-poppinsoverflow-hidden flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-bold mb-4 text-center text-wrap leading-full md:text-6xl ">Welcome to the Chatbot</h1>
        <p className="text-base text-blue text-center md:text-lg">Please login to access the chatbot.</p>
        <div className="mt-4">
          <Link to="/auth" className="text-sm bg-purple text-white px-4 py-2 rounded  md:text-base">Connexion</Link>
        </div>
      </main>

      <Footer />
    </>
  );
}