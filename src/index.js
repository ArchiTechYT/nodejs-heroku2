const path = require("path");
const express = require("express");
const request = require("request");
const hbs = require("hbs");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 3000; // heroku env value or 3000 on localhost

/* ====== STATIC VERSION ====== */

// Define routes
app.get("/", (req, res) => {
  // res.send("This is Static version : Hello, World!");
  res.send(
    '<html><body><h2>Select a style</h2><a href="/mod"><button>Modern</button></a><a href="/age"><button>Aegean</button></a></body></html>');
});

app.get("/image", (req, res) => {
  // Serve an image file (assuming it's in the same directory)
  res.sendFile(__dirname + '/image.png');
  });
  
app.get("/mod", (req, res) => {
  res.sendFile(__dirname + '/img/style_mod.png');
});
app.get("/age", (req, res) => {
  res.sendFile(__dirname + '/img/style_age.png');
});


/* ====== DYNAMIC VERSION ====== */
/*
// Define Paths
const publicDir = path.join(__dirname, "../public"); // find public, use index.html automatically
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Set up handlebar engine and view's location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

// Set up static directory to serve
app.use(express.static(publicDir));

app.get("", (req, res) => {
  res.render("index", {
    title: "Homepage",
    name: "Yi-Ju Tseng",
  });
});

// Sub-Pages
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Yi-Ju Tseng",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "This is help msg from app js file!",
    title: "Help",
    name: "Yi-Ju Tseng",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an geo coordiante...",
    });
  }
  forecast(37.83, -122.42, (error, forecastData) => {
    if (error) {
      return res.send({ error }); // use return then you dont need else
    }
    res.send({
      forecastData: forecastData,
      location: req.query.address,
    });
  });
});

app.get("/product", (req, res) => {
  res.render("product", {
    message: "Please upload your co-housing model...",
    title: "Product",
    name: "Yi-Ju Tseng",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404 Page",
    name: "Yi-Ju Tseng",
    errorMessage: "Help articles not found...",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404 Page",
    name: "Yi-Ju Tseng",
    errorMessage: "Page not found...",
  });
});

*/ 
app.listen(port, () => {
  console.log("Server is up on port " + port);
});

