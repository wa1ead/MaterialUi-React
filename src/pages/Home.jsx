import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "../components/Card";
import cities from "../data.json";

const Home = () => (
  <div className="App">
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

export default Home;
