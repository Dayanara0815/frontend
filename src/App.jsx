import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Profile from './pages/profile/Profile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/* Esto hace que si entras a la raíz (/), te mande a tu perfil automáticamente */}
        <Route path="/" element={<Navigate to="/profile" />} />

        {/* Esta es tu ruta específica */}
        <Route path="/profile" element={<Profile />} />

        {/* Aquí tus compañeros irán agregando sus rutas (Login, Registro, etc.) */}
      </Routes>
    </Router>
  )
}

export default App
