import { NextFunction, Request, Response } from "express";

export function validate(req: any, res: Response, next: NextFunction) {
  if (!req.body.location) {
    return res.status(400).send("location needed");
  }

  if (!req.body.aqi) {
    return res.status(400).send("aqi needed");
  }

  if (!req.body.days) {
    return res.status(400).send("days needed");
  }

  if (!req.body.alerts) {
    return res.status(400).send("alerts needed");
  }

  req.location = req.body.location;
  req.aqi = req.body.aqi == "yes" ? true : false;
  req.days = req.body.days;
  req.alerts = req.body.alerts == "yes" ? true : false;
  next();
}
