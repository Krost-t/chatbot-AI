import React from "react";

export default function ChatBot() {
    return (
        <>
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Chatbot</h1>
            <nav className="space-x-4">
            <a href="/auth" className="text-gray-300 hover:text-white">Login</a>
            <a href="/" className="text-gray-300 hover:text-white">Home</a>
            </nav>
        </header>
    
        <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Chatbot Interface</h1>
            <p className="text-lg text-gray-700">This is where the chatbot will be.</p>
        </main>
    
        <footer className="bg-gray-800 text-white p-4 mt-4">
            <p className="text-center">© 2023 Chatbot. All rights reserved.</p>
        </footer>
        </>
    );
}