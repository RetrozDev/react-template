import express from "express";

const router = express.Router();

import UserController from "./controllers/UserController";

router.get("/users", UserController.browse);
router.get("/users/:id", UserController.read);

export default router;
