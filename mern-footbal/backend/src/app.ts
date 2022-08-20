import express, { Application, Response, Request } from "express";
import cors from "cors";
import "dotenv/config";

const app: Application = express();

app.use(express.json());

// Routes
import gameRoute from "./routes/gameRoute";

// here we will declare the route paths

app.use("/api/games", gameRoute);

export { app };
