import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header /> 
   
      
      <main className="min-h-[calc(100dvh-8rem-4rem)]  bg-dark-black text-sortOf-white font-poppinsoverflow-hidden flex flex-col items-center justify-center gap-2">
        <h1 className="text-6xl font-bold mb-4 text-center text-wrap leading-full">Welcome to the Chatbot</h1>
        <p className="text-lg text-blue text-center">Please login to access the chatbot.</p>
        <div className="mt-4">
          <a href="/auth" className="bg-purple text-white px-4 py-2 rounded hover:bg-blue-600">Login</a>
        </div>
      </main>

      <Footer />
    </>
  );
}