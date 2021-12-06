const express = require("express");

const reviewsController = require("../controllers/reviewController");

const reviewsRouter = express.Router();

reviewsRouter.get("/", reviewsController.getReviews);
reviewsRouter.post("/", reviewsController.postReview);

reviewsRouter.all("*", reviewsController.otherRoutes);

module.exports = reviewsRouter;
