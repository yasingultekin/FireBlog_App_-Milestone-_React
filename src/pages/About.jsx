import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import coding from "../assets/coding.svg";

const About = () => {
  return (
    <Box
      sx={{
        mt: 13,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image={coding}
        alt={coding}
        sx={{ width: "350px", height: "150px", mt: "2rem" }}
      />

      <Typography variant="h4" component="div" gutterBottom sx={{ m: "2rem" }}>
        I'm Yasin.
      </Typography>
      <Typography variant="body1" gutterBottom>
        I am a front-end developer.
      </Typography>
      <Typography variant="body1" gutterBottom>
        I prefer React for front-end development.
      </Typography>
      <Typography variant="body1" gutterBottom>
        React, Git, GitHub, JavaScript, Python, HTML5, CSS3.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Don't hesitate to ask me about anything that you want to learn.
      </Typography>
      <Typography variant="body1" gutterBottom>
        You can contact me.
      </Typography>
    </Box>
  );
};

export default About;
