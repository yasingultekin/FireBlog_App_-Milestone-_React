import AppRouter from "./app-router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
