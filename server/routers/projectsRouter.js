const express = require("express");

const projectController = require("../controllers/projectController");

const projectsRouter = express.Router();

projectsRouter.get("/", projectController.getProjects);

projectsRouter.all("*", projectController.otherRoutes);

module.exports = projectsRouter;
