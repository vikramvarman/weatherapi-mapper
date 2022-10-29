import { NextFunction, Request, Response } from "express";

export function validate(req: any, res: Response, next: NextFunction) {
  if (!req.body.location) {
    return res.status(400).send(":ocation needed");
  }

  if (!req.body.aqi) {
    return res.status(400).send("location needed");
  }
  req.aqi = req.body.aqi == "yes" ? true : false;
  req.location = req.body.location;

  next();
}
