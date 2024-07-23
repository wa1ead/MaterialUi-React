import React from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Grid container spacing={5}>
          <Card />
        </Grid>
      </Container>
    </div>
  );
};

export default App;
