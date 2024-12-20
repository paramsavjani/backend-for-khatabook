import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true);
    },
    credentials: true,
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(cookieParser());

app.use(bodyParser.json());

import userRouter from "./routes/user.route.js";
import friendRequestRouter from "./routes/request.route.js";
import friendRouter from "./routes/friend.route.js";
import transactionRouter from "./routes/transaction.route.js";

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1/users", userRouter);

app.use("/api/v1/friendRequests", friendRequestRouter);

app.use("/api/v1/friends", friendRouter);

app.use("/api/v1/transactions", transactionRouter);

export { app };
