import React, { useState } from "react";

export default function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputMessage.trim()) {
            setMessages([...messages, { text: inputMessage, sender: "user" }]);
            setInputMessage("");
            // Simuler une réponse du bot
            setTimeout(() => {
                setMessages(prev => [...prev, { 
                    text: "Je suis en train d'analyser votre message...", 
                    sender: "bot" 
                }]);
            }, 1000);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-dark-black to-gray-900">
            <header className="bg-gray-800 text-white p-4 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Chatbot IA</h1>
                    <nav className="space-x-4">
                        <a href="/auth" className="text-gray-300 hover:text-white transition-colors">Déconnexion</a>
                        <a href="/" className="text-gray-300 hover:text-white transition-colors">Accueil</a>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="h-[600px] flex flex-col">
                        {/* Zone de messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.length === 0 ? (
                                <div className="text-center text-gray-400 mt-8">
                                    <p className="text-xl">Bienvenue ! Comment puis-je vous aider aujourd'hui ?</p>
                                </div>
                            ) : (
                                messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`max-w-[70%] rounded-2xl p-4 ${
                                                message.sender === "user"
                                                    ? "bg-purple-600 text-white"
                                                    : "bg-gray-700 text-gray-200"
                                            }`}
                                        >
                                            {message.text}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Zone de saisie */}
                        <form onSubmit={handleSendMessage} className="p-4 bg-gray-700">
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    placeholder="Tapez votre message..."
                                    className="flex-1 bg-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <button
                                    type="submit"
                                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 text-white p-4 mt-8">
                <div className="container mx-auto text-center">
                    <p>© 2024 Chatbot IA. Tous droits réservés.</p>
                </div>
            </footer>
        </div>
    );
}