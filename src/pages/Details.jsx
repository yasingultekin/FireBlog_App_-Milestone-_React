import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  createTheme,
  IconButton,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import placeholder from "../assets/placeholder.png";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  DeleteUser,
  useFetch,
  UpdateUser,
  DeleteCard,
} from "../helpers/functions";
import { useLocation, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { AuthContext } from "../contexts/AuthContext";
import { orange } from "@mui/material/colors";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import HomeIcon from "@mui/icons-material/Home";

const Details = () => {
  const navigate = useNavigate();
  const { isLoading, contentList } = useFetch();

  const currentUser = useContext(AuthContext);
  const { state } = useLocation();

  // console.log("currentUser", currentUser.email);
  // console.log("state", state.email);

  const handleDelete = () => {
    DeleteCard(state.id);
    navigate("/");
  };

  console.log("state", state);

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          m: 1,
          color: "primary",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          className="h4"
          sx={{
            fontFamily: "Girassol",
            color: "primary.dark",
            textAlign: "center",
            marginTop: "7rem",
          }}
        >
          ─── DETAILS ───
        </Typography>
        {isLoading ? (
          <div className="spinner-border text-primary m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <Card sx={{ width: 650, mt: 3 }} className="card-content">
            <CardHeader />

            <CardMedia
              component="img"
              height="350"
              image={state.img ? state.img : placeholder}
              alt={state.title}
            />

            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: "1.2rem",
                  color: "black",
                  textTransform: "capitalize",
                  mb: 2,
                }}
              >
                {state.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "1rem" }}
              >
                {state.date}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {state.content}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: "1.2rem",
                  color: "black",
                }}
              >
                <AccountCircleRoundedIcon /> {state.email}
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>{" "}
              0
              <IconButton aria-label="add to favorites">
                <ModeCommentOutlinedIcon />
              </IconButton>{" "}
              0
            </CardActions>
          </Card>
        )}

        {state.email === currentUser.email && (
          <Stack
            direction="row"
            spacing={2}
            sx={{ m: 4, justifyContent: "center" }}
          >
            <Button
              variant="contained"
              color="primary"
              endIcon={<BorderColorIcon />}
              onClick={() => navigate("/update", { state: state })}
            >
              UPDATE
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDelete}
              endIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Stack>
        )}
        <CardActions className="home-button">
          <Button
            variant="contained"
            size="large"
            color="secondary"
            endIcon={<HomeIcon />}
            onClick={() => navigate("/")}
          >
            HOME
          </Button>
        </CardActions>
      </Box>
    </Container>
  );
};

export default Details;
