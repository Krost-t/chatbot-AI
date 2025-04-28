import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home     from './pages/Home';
import Auth     from './pages/Auth';
import Chatbot from "./pages/ChatBot"
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"      element={<Home />} />
        <Route path="/auth"  element={<Auth />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chatbot />
            </ProtectedRoute>
          }
        />
        <Route path="*"      element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
