import { body } from "express-validator";

export default [
  body("email", "Invalid email format").isEmail(),
  body("password", "Password has incorrect length").isLength({
    min: 5,
    max: 50,
  }),
];
