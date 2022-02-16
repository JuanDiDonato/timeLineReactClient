import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/bootstrap.css'

// componentes
import Register from "./components/register/register";
import Login from './components/login/login';
import Perfil from './components/perfil/perfil';
import Nav from './components/nav/nav';

function App() {
  return (
        <Router>
          <Nav/>
          <Routes>
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/:username" element={<Perfil/>} />
          </Routes>
        </Router>
  );
}

export default App;
