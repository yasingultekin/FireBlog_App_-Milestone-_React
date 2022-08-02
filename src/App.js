import { useState } from "react";
import AppRouter from "./app-router/AppRouter";
import "./App.css";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
