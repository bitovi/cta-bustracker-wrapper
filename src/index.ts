import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import { getRoutes, getVehicles } from "./bustracker";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", getRoutes);
app.use("/api", getVehicles);

// set 404 for routes not found
app.use((_req: Request, res: Response, _next: NextFunction) => {
  res.status(404).send("404 Not Found");
});

// start app on port 4040
app.listen(4040, () => {
  console.log("Server started on port 4040");
});
