// const data = {
//   reviews: [],
// };

const { UserRefreshClient } = require("google-auth-library");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const revieweSchema = new Schema({
  reviewerDesignation: String,
  linkedinUrl: String,
  reviewerCurrentOrg: String,
  reviewerId: {
    type: String,
    required: true,
  },
  reviewerName: {
    type: String,
    required: true,
  },
  content: {
    type: [String],
    required: true,
  },
  reviewerImageUrl: {
    type: String,
    required: true,
  },
});

const Review = new mongoose.model("Review", revieweSchema);

module.exports = Review;

// class Review {
//   constructor(name, designation, linkedinUrl, content, image) {
//     this.reviewerName = name;
//     this.reviewerDesignation = designation;
//     this.linkedinUrl = linkedinUrl;
//     this.content = content;
//     this.reviewerImage = image;
//   }

//   save(cb) {
//     setTimeout(() => {
//       data.reviews.push(this);
//       cb(this);
//     }, 5000);
//     // data.reviews.push(this);
//     // return this;
//   }

//   static fetchAllReviews(cb) {
//     setTimeout(() => {
//       cb(data);
//     }, 2000);
//   }
// }

// module.exports = Review;
