const Review = require("../models/review");

const CREATOR_NAME = "LEARNER";
const imageUrl =
  "https://media-exp1.licdn.com/dms/image/C4D35AQH22B4aGBq-rQ/profile-framedphoto-shrink_200_200/0/1597848526392?e=1638849600&v=beta&t=R2cF0lEAuJKrE-NF4m5thjKB4mqcj_q2Zh4dAPu3NE0";

exports.getReviews = (req, res, next) => {
  Review.find()
    .then((reviews) => {
      console.log(reviews);
      res.send({ reviews });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postReview = (req, res, next) => {
  const newReview = new Review({
    reviewerName: CREATOR_NAME,
    reviewerDesignation: "software developer at xyz",
    linkedinUrl: "...",
    content: [...req.body.content],
    reviewerImageUrl: imageUrl,
  });
  newReview
    .save()
    .then((review) => {
      console.log(review);
      res.send(review);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.otherRoutes = (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
};
