import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="newblog" element={<NewBlog />} />
        <Route path="logout" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRouter;
