

import React from "react";
import ReactDOM from "react-dom/client";
import {
 BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import "./index.css";
import Layout from './components/layout';
import Users from './pages/users';
import { ErrorPage } from './pages/error';
import Games from './pages/games';
import GamesPlay from './pages/game-play';
import Dashboard from './pages/dashboard';
import App from './App';



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
)
