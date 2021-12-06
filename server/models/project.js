// const data = {
//   projects: [
//     {
//       _id: 1,
//       title: "Trivia API",
//       author: ["Anas Ali"],
//       intro:
//         "Restful APIs for web based application to play Trivia(Question and answer) like game.",
//       githubUrl: "https://github.com/ali-anas/trivia-api",
//       liveUrl: "",
//       techStack: ["Python3"],
//       details: "",
//       imageUrl: "./img/Trivia-project.png",
//     },
//     {
//       _id: 2,
//       title: "Graph Visualizer",
//       author: ["done by following CS 106L website"],
//       intro:
//         "This simple piece of software helps to produce a good drawing for a given arbitrary graph using Graph drawing algorithm.",
//       githubUrl: "https://github.com/ali-anas/Graph-Visualization",
//       liveUrl: "",
//       techStack: ["C++"],
//       details: "",
//       imageUrl: "./img/graph-project.png",
//     },
//     {
//       _id: 3,
//       title: "Fyyur",
//       author: ["Anas Ali"],
//       intro:
//         "Fyyur is a musical venue and artist booking site that facilitates the discovery and bookings of shows between local performing artists and venues.",
//       githubUrl: "https://github.com/ali-anas/fyyur",
//       liveUrl: "",
//       techStack: ["Python3"],
//       details: "",
//       imageUrl: "./img/Fyyur-project.png",
//     },
//     {
//       _id: 4,
//       title: "Archive of Code",
//       author: ["Anas Ali"],
//       intro:
//         "A compilation of various code snippets and programs I have written. Includes interesting data structures, algorithms, and interview problems.",
//       githubUrl: "https://github.com/ali-anas/Archive-of-Code",
//       liveUrl: "",
//       techStack: [""],
//       details: "",
//       imageUrl: "./img/aoc-project.png",
//     },
//   ],
// };

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: [String],
  intro: {
    type: String,
    required: true,
  },
  githubUrl: {
    type: String,
    required: true,
  },
  liveUrl: String,
  techStack: [String],
  details: String,
  imageUrl: {
    type: String,
    required: true,
  },
  youtubeUrl: String,
});

const Project = new mongoose.model("Project", projectSchema);
module.exports = Project;

// class Project {
//   constructor(
//     _id,
//     title,
//     author,
//     intro,
//     githubUrl,
//     liveUrl,
//     techStack,
//     details,
//     imageUrl
//   ) {
//     this._id = _id;
//     this.title = title;
//     this.author = [...author];
//     this.intro = intro;
//     this.githubUrl = githubUrl;
//     this.liveUrl = liveUrl;
//     this.techStack = [...techStack];
//     this.details = details;
//     this.imageUrl = imageUrl;
//   }

//   static fetchAllProjects(cb) {
//     setTimeout(() => {
//       cb(data);
//     }, 5000);
//   }
// }

// module.exports = Project;
