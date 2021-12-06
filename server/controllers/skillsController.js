const Skill = require("../models/skills");

exports.getSkills = (req, res, next) => {
  Skill.find()
    .then((skills) => {
      console.log("skills", skills);
      res.send({ skills });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.otherRoutes = (req, res, next) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
};
