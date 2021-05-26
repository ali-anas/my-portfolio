const express = require("express");

const data = {
  skills: [
    {
      id: 1,
      category: "Front-End",
      skills_list: [
        {
          skill_name: "ReactJS",
          rating: 4,
        },
        {
          skill_name: "HTML/CSS",
          rating: 4,
        },
        {
          skill_name: "Some front end skill",
          rating: 3,
        },
      ],
    },
    {
      id: 2,
      category: "Back-End",
      skills_list: [
        {
          skill_name: "NodeJS",
          rating: 4,
        },
        {
          skill_name: "PostgreSQL",
          rating: 4,
        },
        {
          skill_name: "MongoDB",
          rating: 3,
        },
        {
          skill_name: "Flask",
          rating: 3,
        },
      ],
    },
    {
      id: 3,
      category: "Programming Langauge",
      skills_list: [
        {
          skill_name: "C/C++",
          rating: 4,
        },
        {
          skill_name: "Javascript",
          rating: 4,
        },
        {
          skill_name: "Python",
          rating: 3,
        },
        {
          skill_name: "Other2",
          rating: 3,
        },
        {
          skill_name: "Other3",
          rating: 3,
        },
      ],
    },
    {
      id: 4,
      category: "Others",
      skills_list: [
        {
          skill_name: "Github",
          rating: 4,
        },
        {
          skill_name: "Other1",
          rating: 4,
        },
        {
          skill_name: "Other2",
          rating: 3,
        },
      ],
    },
  ],
};

const skillsRouter = express.Router();

skillsRouter.get("/", (req, res) => {
  setTimeout(() => {
    res.send(data);
  }, 5000);
});

skillsRouter.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = skillsRouter;
