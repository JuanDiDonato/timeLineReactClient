import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// componentes
import Register from "./components/register/register";
import Login from './components/login/login';
import Perfil from './components/perfil/perfil';

function App() {
  return (

        <Router>
          <Routes>
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/:username" element={<Perfil/>} />
          </Routes>
        </Router>

  );
}

export default App;
