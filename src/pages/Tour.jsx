import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import Typography from "@mui/material/Typography";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import BasicModal from "../components/Modal";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/656df61cc3a44648c235dde3/Las-Vegas--Nevada--USA-at-the-Welcome-Sign/960x0.jpg?format=jpg&width=960"
          alt="Las Vegas"
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography component="h4" variant="h6" marginTop={3}>
          About this ticket
        </Typography>
        <Typography component="p" variant="paragraph" marginTop={3}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste a
          explicabo qui laboriosam, suscipit quo. Ducimus fuga debitis dolor
          error exercitationem odio! Accusantium iusto debitis, placeat
          aspernatur cumque minima nemo culpa autem illo, nobis fuga
          reprehenderit animi tempora blanditiis veniam.
        </Typography>
      </Box>
      <Box>
        <Typography component="h4" variant="h6" marginTop={3} marginBottom={2}>
          Frequently asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};
export default Tour;
