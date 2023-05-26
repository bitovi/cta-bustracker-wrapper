import express, { Request, Response } from "express";
import instance from "../axios";

const routes = express();

routes.get("/routes", async (_req: Request, res: Response) => {
  console.info("fetching routes");
  const response = await instance.get("/getroutes");
  const { data } = response;
  console.info({
    endpoint: "getRoutes",
    data,
  });
  res.json(data);
});

export default routes;
