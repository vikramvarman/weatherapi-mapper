import express, { Express, Request, Response } from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import * as validateCurrent from "./middleware/validateCurrent";
import * as validateForecast from "./middleware/validateForecast";
import axios from "axios";
import { CurrentApiMeta, ForecastApiMeta } from "./types";
var hbs = require("hbs");
import * as responseDto from "./dto/response";
import { Firebase } from "./database/firebase";

const app: Express = express();

app.use(cors());

app.use(bodyParser.json({ limit: "1mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", "src/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/current", validateCurrent.validate, async (req: any, res, next) => {
  try {
    console.log(process.env.x);
    const db = (await Firebase.database().ref(`/api`).once("value")).val();
    const apiKey = db.key;
    const apiData: CurrentApiMeta = db.current;

    const params = {
      key: apiKey,
      q: req.location,
      aqi: req.aqi ? "yes" : "no",
    };

    const weatherResponse = await axios.get(apiData.url, { params });

    const responseMeta = (
      await Firebase.database().ref(`/response/current`).once("value")
    ).val();

    const record = responseDto.current(weatherResponse.data, responseMeta);

    return res.send(record);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

app.post(
  "/forecast",
  validateForecast.validate,
  async (req: any, res, next) => {
    try {
      const db = (await Firebase.database().ref(`/api`).once("value")).val();

      const apiKey = db.key;
      const apiData: ForecastApiMeta = db.forecast;

      const params = {
        key: apiKey,
        q: req.location,
        days: req.days,
        aqi: req.aqi ? "yes" : "no",
        alerts: req.alerts ? "yes" : "no",
      };

      const weatherResponse = await axios.get(apiData.url, { params });

      const responseMeta = (
        await Firebase.database().ref(`/response/forecast`).once("value")
      ).val();

      console.log({ responseMeta });

      const record = responseDto.forecast(weatherResponse.data, responseMeta);

      return res.send(record);
    } catch (e) {
      console.error(e);
      next(e);
    }
  }
);
export default app;
