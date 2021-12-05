import express from "express";
import { fetchAuthToken, fetchReleases } from "./util";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());

const allowList = [
  "https://overlayed.dev",
  "http://localhost:3000",
];
const corsOptions = {
  origin: (origin, callback) => {
    const isAllowed = allowList.indexOf(origin) !== -1 || origin === undefined;
    return isAllowed
      ? callback(null, true)
      : callback(new Error("Not allowed by CORS"));
  },
};

app.use(cors(corsOptions));

app.post("/api/token", async (req, res) => {
  const { code } = req.body;
  const response = await fetchAuthToken(code);
  res.send(response.body);
});

app.get("/api/releases", async (req, res) => {
  const data = await fetchReleases();
  res.send(data);
});

app.get("/", async (req, res) => {
  res.send("Overlayed API Service");
});

export default app;
