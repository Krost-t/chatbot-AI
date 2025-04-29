import React from "react";

export default function Auth() {
    return (
        <>
            <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Login</h1>
                <nav className="space-x-4">
                    <a href="/" className="text-gray-300 hover:text-white">Home</a>
                    <a href="/chat" className="text-gray-300 hover:text-white">Chatbot</a>
                </nav>
            </header>

            <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">Login to Chatbot</h1>
                <form className="bg-white p-6 rounded shadow-md w-96">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input type="text" id="username" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
                </form>
            </main>

            <footer className="bg-gray-800 text-white p-4 mt-4">
                <p className="text-center">© 2023 Chatbot. All rights reserved.</p>
            </footer>
        </>
    )
}