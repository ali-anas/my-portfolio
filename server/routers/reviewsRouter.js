const express = require("express");

const data = {
  reviews: [],
};

const reviewsRouter = express.Router();
const CREATOR_NAME = "LEARNER";

reviewsRouter.get("/", (req, res) => {
  setTimeout(() => {
    res.send(data);
  }, 5000);
});

reviewsRouter.post("/", (req, res) => {
  let newReview = {
    id: data.reviews.length + 1,
    name: CREATOR_NAME,
    designation: "software developer at xyz",
    linkedin_url: "",
    content: req.body.content,
    image: "",
  };
  data.reviews.push(newReview);
  console.log(data.reviews.length);
  console.log("Success!");
  res.send(newReview);
});

reviewsRouter.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = reviewsRouter;
