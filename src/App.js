import AppRouter from "./app-router/AppRouter";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
