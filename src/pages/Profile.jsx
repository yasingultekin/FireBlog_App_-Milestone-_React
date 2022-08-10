import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export default function MediaCard() {
  const currentUser = React.useContext(AuthContext);
  const navigate = useNavigate();

  // console.log(currentUser.email);

  return (
    <Card
      sx={{
        maxWidth: 500,
        m: "auto",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="profile-card"
    >
      <CardMedia
        component="img"
        height="300"
        image="https://picsum.photos/1600/900"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {currentUser.email}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {currentUser && (
            <>
              <h5 className="mb-0 text-capitalize text-center">
                {currentUser.displayName}
              </h5>
            </>
          )}
        </Typography>
      </CardContent>
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
    </Card>
  );
}
