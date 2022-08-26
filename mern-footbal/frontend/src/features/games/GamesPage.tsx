import { Container, Grid } from "@mui/material";
import { useAppSelector } from "../../store/store";

const GamesPage = () => {
  const { games } = useAppSelector((state) => state.games);
  return (
    <Container>
      <h2>Games Page</h2>
      <Grid container>
        {games &&
          games.map((game) => (
            <Grid
              key={game._id}
              xs={3}
              sx={{
                backgroundImage:
                  "linear-gradient(90deg, rgb(64, 40,222), rgb(13, 200, 220))",
                margin: 2,
                padding: 3,
                color: "white",
              }}
            >
              <h4>{game.name}</h4>
              <p>{game.address}</p>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default GamesPage;
