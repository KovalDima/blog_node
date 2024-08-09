import express from "express";
import mongoose from "mongoose";

import * as userController from "./controllers/userController.js";
import * as postController from "./controllers/postController.js";

import {
  registerValidation,
  loginValidation,
  postCreateValidation,
} from "./validations/index.js";

import checkAuth from "./utils/checkAuth.js";

mongoose
  .connect(
    "mongodb+srv://dima:44tqzx4pRsLZ9WtU@blognode.rt1k3cz.mongodb.net/blog?retryWrites=true&w=majority&appName=blogNode"
  )
  .then(() => console.log("DB OK"))
  .catch((error) => console.log("DB ERROR", error));

const app = express();

app.use(express.json());

app.post("/auth/registration", registerValidation, userController.register);
app.post("/auth/login", loginValidation, userController.login);
app.get("/auth/user", checkAuth, userController.getUser);

app.get("/posts", postController.getAllPosts);

app.listen(3333, (error) => {
  if (error) {
    return console.log(error);
  }

  console.log("OK");
});
