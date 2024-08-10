if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");

//Middlewares
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

//Routes
const moviesRouter = require("./movies/movies.router");
const reviewsRouter = require("./reviews/reviews.router");
const theatersRouter = require("./theaters/theaters.router");

const app = express();

app.use(cors());
app.use(express.json());

// Root Route
app.get("/", (req, res) => res.send("Welcome to the We Love Movies Capstone API"));

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);

app.use(notFound);
app.use(errorHandler);


module.exports = app;