import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Card = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qyQLFvNh7o1xuNyEu9QOFEd34jJR-rZ46g&s"
          alt="SYDNEY"
          className="img"
        />
      </Paper>
    </Grid>
  );
};

export default Card;
