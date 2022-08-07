import AppRouter from "./app-router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <AppRouter />
        <ToastContainer />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
