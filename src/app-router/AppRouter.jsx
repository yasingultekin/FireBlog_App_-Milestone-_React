import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../contexts/AuthContext";
import { AddUser } from "../helpers/functions";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateBlog from "../pages/UpdateBlog";
import PrivateRouter from "./PrivateRouter";

const initialValues = { title: "", img: "", content: "", date: "" };

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
        <Route path="details/:id" element={<PrivateRouter />}>
          <Route
            path=""
            element={
              <Details
                info={info}
                setInfo={setInfo}
                handleSubmit={handleSubmit}
              />
            }
          />
        </Route>

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
        <Route
          path="update"
          element={
            <UpdateBlog
              info={info}
              setInfo={setInfo}
              handleSubmit={handleSubmit}
            />
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
