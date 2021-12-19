const express = require("express");
const path = require("path");
const http = require("http");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require("express-session");

// Load config
dotenv.config({ path: "./config/config.env" });

// import routers
const projectsRouter = require("./routers/projectsRouter");
const skillsRouter = require("./routers/skillsRouter");
const reviewsRouter = require("./routers/reviewsRouter");

// pre-requisite to connect to mongodb
const mongoConnectionURL = process.env.MONGO_SRV;
const databaseName = "portfolio";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: databaseName,
};

// connect to mongodb
mongoose
  .connect(mongoConnectionURL, options)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));

const hostname = "localhost";
const port = 5000;

const app = express();

// allows us to make post requests
app.use(express.json());

const reactPath = path.resolve(__dirname, "..", "public");
app.use(express.static(reactPath));

// Sessions
app.use(
  session({ secret: "my secret", resave: false, saveUninitialized: false })
);

// use the routers
app.use("/projects", projectsRouter);
app.use("/skills/", skillsRouter);
app.use("/reviews", reviewsRouter);

// for all other routes, render index.html and let the
// react router handle it
app.get("*", (req, res) => {
  res.sendFile(path.join(reactPath, "index.html"));
});

// any server errors cause this function to run
app.use((err, req, res, next) => {
  const status = err.status || 500;
  if (status === 500) {
    // 500 means Internal Server Error
    console.log("The server errored when processing a request");
    console.log(err);
  }

  res.status(status);
  res.send({
    status: status,
    message: err.message,
  });
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server Running at https://${hostname}:${port}`);
});
