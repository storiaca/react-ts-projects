import express, { Application, Response, Request } from "express";
import cors from "cors";
import "dotenv/config";

const app: Application = express();

// middlewares
app.use(express.json());
app.use(cors());

// Routes
import gameRoute from "./routes/gameRoute";

// here we will declare the route paths

app.use("/api/games", gameRoute);

export { app };
