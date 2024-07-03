const express = require("express");

const router = express.Router();

const UserController = require("./controllers/UserController");

router.get("/users", UserController.browse);
router.get("/users/:id", UserController.read);

module.exports = router;
