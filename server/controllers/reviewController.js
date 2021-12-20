const Review = require("../models/review");

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
  if (!req.session.user) {
    return new Error("Restricted...");
  }
  const user = req.session.user;
  const newReview = new Review({
    reviewerId: user._id,
    reviewerName: user.name,
    content: [...req.body.content],
    reviewerImageUrl: user.imageUrl,
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
