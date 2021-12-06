/*
const data = {
  skills: [
    {
      _id: 1,
      category: "Programming Language",
      skillItems: ["C++(STL)", "Python", "Javascript"],
    },
    {
      _id: 2,
      category: "Front End",
      skillItems: ["ReactJS", "html/css"],
    },
    {
      _id: 3,
      category: "Back End",
      skillItems: ["Node.js", "Flask", "mongoDB", "postgreSQL"],
    },
    {
      _id: 4,
      category: "Others",
      skillItems: ["git/Github"],
    },
  ],
};
*/

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const skillsSchema = new Schema({
  categoryTitle: {
    type: String,
    required: true,
  },
  skillItems: {
    type: [String],
    required: true,
  },
});

const Skill = mongoose.model("Skill", skillsSchema);

module.exports = Skill;

// class Skill {
//   constructor(_id, category, skillItems) {
//     this._id = _id;
//     this.category = category;
//     this.skillItems = [...skillItems];
//   }

//   static fetchAllSkills(cb) {
//     // setTimeout(() => {
//     cb(data);
//     // });
//   }
// }

// module.exports = Skill;
