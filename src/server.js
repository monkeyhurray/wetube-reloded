import express, { request } from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("I still love you");
};

app.get("/", handleHome);
//application에게 home으로 gety request를 보낸다면 반응하는 callback을 만듬

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
