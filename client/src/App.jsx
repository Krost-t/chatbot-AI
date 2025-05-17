import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Chatbot from "./pages/ChatBot";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth">
          <Route index element={<Navigate to="/auth/connexion" replace />} />
          <Route path="connexion" element={<Auth />} />
          <Route path="inscription" element={<Auth />} />
        </Route>
        <Route path="/chat" element={<Chatbot />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
