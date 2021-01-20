const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );


const databaseUrl = "fitnessTracker";
const collections = ["workouts"];
const db = mongojs(databaseUrl, collections);
const app = express();
