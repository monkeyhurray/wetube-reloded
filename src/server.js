import express, { request } from "express";
import { handle } from "express/lib/application";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method}${req.url}`);
  next();
};
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, tou may continue");
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};
app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
//application에게 home으로 gety request를 보낸다면 반응하는 callback을 만듬
app.get("/protexted", handleProtected);
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
