import express, { Request, Response } from "express";
import instance from "../axios";

const vehicles = express();

vehicles.get("/vehicles", async (req: Request, res: Response) => {
  const { rt } = req.query;
  console.info('fetching vehicles for route', rt);
  const response = await instance.get("/getvehicles", {
    params: { rt },
  });
  const { data } = response;
  console.info({
    endpoint: "getVehicles",
    data,
  })
  res.json(data);
});

export default vehicles;
