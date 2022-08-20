import express, { Application, Response, Request } from "express";
import cors from "cors";
import "dotenv/config";

const app: Application = express();

app.use(express.json());

// Routes

// here we will declare the route paths
app.get("/", (req: Request, res: Response) => {
  res.send({ message: "It Works" });
});
export { app };
