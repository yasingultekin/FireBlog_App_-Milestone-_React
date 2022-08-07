import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../contexts/AuthContext";
import { AddUser } from "../helpers/functions";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const initialValues = { title: "", img: "", content: "" };

const AppRouter = () => {
  const currentUser = useContext(AuthContext);

  console.log(currentUser.email);
  const [info, setInfo] = useState(initialValues);
  const [email, setEmail] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo(initialValues);
    AddUser(info, currentUser.email);
    navigate("/");
    initialValues();
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="login"
          element={<Login email={email} setEmail={setEmail} />}
        />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="newblog"
          element={
            <NewBlog
              info={info}
              setInfo={setInfo}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route path="logout" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRouter;
