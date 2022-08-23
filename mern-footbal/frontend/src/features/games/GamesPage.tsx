import React from "react";
import { useAppSelector } from "../../store/store";

const GamesPage = () => {
  const { games } = useAppSelector((state) => state.games);
  return (
    <div>
      <h2>Games Page</h2>
      <ul>
        {games &&
          games.map((game) => (
            <li key={game._id}>
              <h4>{game.name}</h4>
              <p>{game.address}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GamesPage;
