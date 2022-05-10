import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Developer } from "./pages/Developer";
import { Developers } from "./pages/Developers";
import { Game } from "./pages/Game";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Main } from "./pages/Main";
import { SearchDeveloper } from "./pages/SearchDeveloper";
import { SearchGame } from "./pages/SearchGame";
import { Admin } from "./pages/Admin";
import { EditGame } from "./pages/EditGame";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="search/developer" element={<SearchDeveloper />} />
        <Route path="search/game" element={<SearchGame />} />
        <Route path="developers" element={<Developers />} />
        <Route path="developer/:id" element={<Developer />} />
        <Route path="game/:id" element={<Game />} />
        <Route path="admin" element={<Admin />} />
        <Route path="admin/:id" element={<EditGame />} />
      </Routes>
    </div>
  );
}

export default App;
