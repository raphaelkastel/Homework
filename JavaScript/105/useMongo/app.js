var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hjs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

let people;
app.get("/people", (req, res, next) => {
  people.find().toArray((err, persons) => {
    if (err) next(err);
    res.render("people", { people: persons });
  });
});
app.post("/people", (req, res, next) => {
  console.log(req.body)
  let newDocFromPostBody = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }; 
  people.insertOne(newDocFromPostBody, (err, result) => {

      if (err) next(err);
      console.log(result);
  });
  res.end(`Added ${newDocFromPostBody.first_name} ${newDocFromPostBody.last_name}` );
});
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true
});

client.connect(err => {
  if (err) {
    return console.error(err);
  }

  const db = client.db("test");
  /*const*/ people = db.collection("people");
  people.find().toArray((err, persons) => {
    persons.forEach(p => console.log(p.first_name));
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
