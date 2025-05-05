import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Chatbot from "./pages/ChatBot";


export default function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/auth:mode" element={<Auth />} />
    <Route path="/chat" element={<Chatbot />} />
   </Routes>
  </BrowserRouter>
 );
}
