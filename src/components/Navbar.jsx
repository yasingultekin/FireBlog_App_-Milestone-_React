import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import clarusway from "../assets/cw.jpeg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Login from "../pages/Login";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { logOut } from "../helpers/firebase";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Login", "Register"];

const hover = {
  "&:hover": {
    backgroundColor: "rgb(7, 177, 77, 0.42)",
  },
};

const Navbar = () => {
  const navigate = useNavigate();

  const currentUser = useContext(AuthContext);

  // const currentUser = { displayName: "yasin gultekin" };
  // const currentUser = false;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      className="appBar"
      sx={{
        backgroundColor: "#046582",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters className="toolbar">
          <Box
            sx={{ width: "50px", height: "75px" }}
            component="a"
            onClick={() => navigate("/")}
          >
            <img
              src={clarusway}
              alt="clarusway"
              style={{ width: "50px", height: "50px", marginTop: "1rem" }}
            />
          </Box>

          <Typography
            variant="h5"
            noWraps
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: "flex",
              flexGrow: { xs: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {`<gultekin/> Blog`}
          </Typography>
          <div className="d-flex text white align-items-center">
            {currentUser ? (
              <>
                <h5 className="mb-0 text-capitalize">
                  {currentUser.displayName}
                </h5>
                <Box sx={{ flexGrow: 0 }}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ pr: 0 }}>
                    <AccountCircleIcon
                      sx={{ fontSize: "2rem", color: "white" }}
                    />
                  </IconButton>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "5rem",
                      }}
                    >
                      <NavLink to="profile" style={{ textDecoration: "none" }}>
                        <Typography textAlign="center" m=".5rem">
                          Profile
                        </Typography>
                      </NavLink>
                      <NavLink to="newblog" style={{ textDecoration: "none" }}>
                        <Typography textAlign="center" mb=".5rem">
                          New
                        </Typography>
                      </NavLink>
                      <NavLink to="login" style={{ textDecoration: "none" }}>
                        <Typography
                          textAlign="center"
                          mb=".5rem"
                          onClick={() => logOut()}
                        >
                          Logout
                        </Typography>
                      </NavLink>
                    </Box>
                  </Menu>
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ flexGrow: 0 }}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ pr: 0 }}>
                    <AccountCircleIcon />
                  </IconButton>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "5rem",
                      }}
                    >
                      <NavLink to="login" style={{ textDecoration: "none" }}>
                        <Typography textAlign="center" m=".5rem">
                          Login
                        </Typography>
                      </NavLink>
                      <NavLink to="register" style={{ textDecoration: "none" }}>
                        <Typography textAlign="center">Register</Typography>
                      </NavLink>
                    </Box>
                  </Menu>
                </Box>
              </>
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
