import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
//middleware는 위에 존재해야함

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const home = (req, res) => {
  return res.send("I love middlewares");
};

const login = (req, res) => {
  return res.send("Welcome to the private lounge.");
};

app.get("/", home);
//application에게 home으로 get request를 보낸다면 반응하는 callback을 만듬
app.get("/login", login);
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
