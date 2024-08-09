import { body } from "express-validator";

export default [
  body("title", "Enter post title").isLength({ min: 3 }).isString(),
  body("text", "Enter post text").isLength({ min: 10 }).isString(),
  body("tags", "Wrong tags format").optional().isArray(),
  body("imageUrl", "Incorrect URL").optional().isURL(),
];
