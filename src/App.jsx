import React from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import cities from "./data.json";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={4}
              marginBottom={2}
              key={city.id}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={2}>
              {city.tours.map((tour) => (
                <Card tour={tour} key={tour.id} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
};

export default App;
