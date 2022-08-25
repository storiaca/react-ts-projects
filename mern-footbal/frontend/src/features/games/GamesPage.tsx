import { Container, Grid } from "@mui/material";
import { useAppSelector } from "../../store/store";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const GamesPage = () => {
  const { games } = useAppSelector((state) => state.games);
  return (
    <Container>
      <h2>Games Page</h2>
      <Grid container>
        {games &&
          games.map((game) => (
            <Grid key={game._id} xs={3}>
              <h4>{game.name}</h4>
              <p>{game.address}</p>
            </Grid>
          ))}

        {/* <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card> */}
      </Grid>
    </Container>
  );
};

export default GamesPage;
