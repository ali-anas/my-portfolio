const Project = require("../models/project");

exports.getProjects = (req, res, next) => {
  Project.find()
    .then((projects) => {
      if (projects.length > 0) {
        console.log(projects[0]);
      }
      res.send({ projects });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.otherRoutes = (req, res, next) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
};
