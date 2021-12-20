const express = require("express");
const authController = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/login", authController.login);
authRouter.post("/logout", authController.logout);
authRouter.all("*", authController.otherRoutes);

module.exports = authRouter;
