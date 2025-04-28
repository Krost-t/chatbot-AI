import React from "react";

export default function Home() {
  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Home</h1>
        <nav className="space-x-4">
          <a href="/auth" className="text-gray-300 hover:text-white">Login</a>
          <a href="/chat" className="text-gray-300 hover:text-white">Chatbot</a>
        </nav>
      </header>
      
      <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Chatbot</h1>
        <p className="text-lg text-gray-700">Please login to access the chatbot.</p>
        <div className="mt-4">
          <a href="/auth" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</a>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-4">
        <p className="text-center">© 2023 Chatbot. All rights reserved.</p>
      </footer>
    </>
  );
}