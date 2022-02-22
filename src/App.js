import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/css/main.css'

// componentes
import Register from "./components/register/register";
import Login from './components/login/login';
import Perfil from './components/perfil/perfil';
import Nav from './components/nav/nav';

function App() {
  return (
        <Router>
          <Nav/>
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Login} />
            <Route exact path="/:username" component={Perfil} />
        </Router>
  );
}

export default App;
