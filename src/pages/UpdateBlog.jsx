import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import blog from "../assets/blok.png";
import { useState } from "react";
import { createUser, signIn, signUpProvider } from "../helpers/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { UpdateCard, useFetch } from "../helpers/functions";
import { AuthContext } from "../contexts/AuthContext";

const theme = createTheme();

export default function UpdateBlog() {
  const navigate = useNavigate();

  // const currentUser = useContext(AuthContext);

  const { state } = useLocation();

  console.log("state", state);

  const [title, setTitle] = useState(state.title);
  const [img, setImg] = useState(state.img);
  const [content, setContent] = useState(state.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, img, content);
    UpdateCard(img, title, content, state.id, navigate);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xxl"
        sx={{
          backgroundColor: "white",
          mt: 13,
        }}
        className="update-blog-container"
      >
        <Box>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "primary.dark",
                height: "250px",
                width: "250px",
              }}
            >
              <img src={blog} />
            </Avatar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                m: 2,
                color: "primary",
              }}
            >
              <Typography variant="h4" component="div" gutterBottom>
                ──── NEW BLOG ────
              </Typography>
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ m: 1, display: "flex", flexDirection: "column", gap: "2" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                type="text"
                autoComplete="title"
                autoFocus
                sx={{ width: "350px" }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="img"
                label="Image URL"
                type="text"
                id="img"
                autoComplete="imageURL"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
              <TextField
                style={{ marginTop: "1rem" }}
                hintText="Message Field"
                floatingLabelText="MultiLine and FloatingLabel"
                fullWidth
                name="content"
                label="Content"
                type="text"
                id="info"
                multiline
                rows={7}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                UPDATE
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
