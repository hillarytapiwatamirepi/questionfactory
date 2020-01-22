const express = require("express");
const app = express();
const http = require("http");

const auth = require("./auth.js");
const api = require("./api.js");


const session = require("express-session");
const mongoose = require("mongoose");

const  bodyParser = require("body-parser");

app.use("/",express.static("./dist"));



//to pass post requests
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());




// set up a session, which will persist login data across requests
app.use(
  session({
    secret: "session-secret",
    resave: false,
    saveUninitialized: false,
  })
);

// this checks if the user is logged in, and populates "req.user"
app.use(auth.populateCurrentUser);

app.use("/api",api);
const mongoConnectionURL =
  "mongodb+srv://hillaryt:hillaryt@cluster0-b5vjd.mongodb.net/test?retryWrites=true&w=majority";
// TODO change database name to the name you chose
const databaseName = "cqdatabase";
const options = { useNewUrlParser: true, useUnifiedTopology: true, dbName: databaseName};

// connect to mongodb
mongoose
  .connect(mongoConnectionURL, options)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));

const port = 8000;
const server = http.Server(app);


server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

