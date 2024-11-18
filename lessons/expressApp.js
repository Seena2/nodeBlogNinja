const express = require("express");

//setup express app
const app = express();

//register EJS view engine
app.set("view engine", "ejs");
//if you want to specify another location rather than the default "views" folder for your views
//app.set('views','myViews')

//listen for request
app.listen(3000, () => {
  console.log("Server listining on port 3000");
});

//respond to the requests
app.get("/", (req, res) => {
  //res.send("<h4>Home page</h4>");
  res.sendFile("./pages/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  //res.send("<h4>About page</h4>");
  res.sendFile("./pages/about.html", { root: __dirname });
});
//redirecting route
app.get("/about_us", (req, res) => {
  res.redirect("/about");
});
app.get("/contact", (req, res) => {
  res.sendFile("./pages/contact.html", { root: __dirname });
});

//404 page
app.use((req, res) => {
  res.status(404).sendFile("./pages/404.html", { root: __dirname });
});
