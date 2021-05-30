const express = require("express");

const data = {
  reviews: [
    {
      id: 1,
      name: "some name1",
      designation: "some value",
      linkedin_url: "",
      content:
        "Determines additional display behavior of the tabs Determines additional display behavior of the tabs Determines additional display behavior of the tabs",
      image: "",
    },
    {
      id: 2,
      name: "some name2",
      designation: "some value",
      linkedin_url: "",
      content:
        "Determines additional display behavior of the tabs Determines additional display behavior of the tabs Determines additional display behavior of the tabs",
      image: "",
    },
    {
      id: 3,
      name: "some name3",
      designation: "some value",
      linkedin_url: "",
      content:
        "Determines additional display behavior of the tabs Determines additional display behavior of the tabs Determines additional display behavior of the tabs",
      image: "",
    },
    {
      id: 4,
      name: "some name4",
      designation: "some value",
      linkedin_url: "",
      content:
        "Determines additional display behavior of the tabs Determines additional display behavior of the tabs Determines additional display behavior of the tabs",
      image: "",
    },
  ],
};

const reviewsRouter = express.Router();

reviewsRouter.get("/", (req, res) => {
  setTimeout(() => {
    res.send(data);
  }, 5000);
});

reviewsRouter.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = reviewsRouter;
