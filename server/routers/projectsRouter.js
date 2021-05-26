const express = require("express");

const data = {
  projects: [
    {
      id: 1,
      title: "Trivia API",
      author: ["Anas Ali"],
      intro:
        "Restful APIs for web based application to play Trivia(Question and answer) like game.",
      github_url: "https://github.com/ali-anas/trivia-api",
      live_url: "",
      techStack: ["Python3"],
      overview: "",
      img_url: "./img/Trivia-project.png",
    },
    {
      id: 2,
      title: "Graph Visualizer",
      author: ["done by following CS 106L website"],
      intro:
        "This simple piece of software helps to produce a good drawing for a given arbitrary graph using Graph drawing algorithm.",
      github_url: "https://github.com/ali-anas/Graph-Visualization",
      live_url: "",
      techStack: ["C++"],
      overview: "",
      img_url: "./img/graph-project.png",
    },
    {
      id: 3,
      title: "Fyyur",
      author: ["Anas Ali"],
      intro:
        "Fyyur is a musical venue and artist booking site that facilitates the discovery and bookings of shows between local performing artists and venues.",
      github_url: "https://github.com/ali-anas/fyyur",
      live_url: "",
      techStack: ["Python3"],
      overview: "",
      img_url: "./img/Fyyur-project.png",
    },
    {
      id: 4,
      title: "Archive of Code",
      author: ["Anas Ali"],
      intro:
        "A compilation of various code snippets and programs I have written. Includes interesting data structures, algorithms, and interview problems.",
      github_url: "https://github.com/ali-anas/Archive-of-Code",
      live_url: "",
      techStack: [""],
      overview: "",
      img_url: "./img/aoc-project.png",
    },
  ],
};

const projectsRouter = express.Router();

projectsRouter.get("/", (req, res) => {
  setTimeout(() => {
    res.send(data.projects);
  }, 5000);
});

projectsRouter.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = projectsRouter;
