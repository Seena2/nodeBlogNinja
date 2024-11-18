const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const { result } = require("lodash");
const blogRoutes = require("./routes/blogRoutes");

//setup express app
const app = express();

//connet to mongoDB
//mongoDB connection string obtained from atlas
const dbURI =
  "mongodb+srv://seenaBlog:admin@cluster0.wokglty.mongodb.net/BlogDB?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbURI)
  .then(() => {
    //listen for request
    app.listen(3000, () => {
      console.log("Server listining on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

//register EJS view engine
app.set("view engine", "ejs");
//if you want to specify another location rather than the default "views" folder for your views
//app.set('views','myViews')

//creating custom middleware
/*
app.use((req, res, next) => {
  console.log("new request is made");
  console.log("Host:", req.hostname);
  console.log("path:", req.path);
  console.log("Method:", req.method);
  next();
});
*/

//third party middleware
//app.use(morgan("dev"));

//middleware and static files
app.use(express.static("public"));
// a middleware that comes with express which takes URL encoded data in the form
//and pass it to an object we can use on the request object
app.use(express.urlencoded({ extended: true }));

//Mongoose and mongodb routes
//add blog to collection
/*
app.get("/add_blog", (req, res) => {
  //create new instance of blog document and save it to blogs collection in the db
  const newBlog = new Blog({
    title: "new blog title2",
    snippet: "snippet of the new blog",
    body: "body of your new blog",
  });
  newBlog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//get all the blogs from the collection
app.get("/all_blogs", (req, res) => {
  //use Blog model to get all documents from this collection
  Blog.find()
    .then((result) => {
      //send a result back to the browser
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
//get single blog from the collection
app.get("/single_blog", (req, res) => {
  Blog.findById("673a212b58a9641d25d54c92")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
*/

//respond to the requests
app.get("/", (req, res) => {
  /*
  //res.send("<h4>Home page</h4>");
  //responding with html page/file
  //res.sendFile("./pages/index.html", { root: __dirname });
 
  */
  //sending views as response via render() method
  /*
  const blogs = [
    {
      title: "The ejs templating engine",
      snippet:
        "ejs allows us to render data to the browser by injecting into html via <% ejs tags%>",
    },
    {
      title: " Loops in ejs",
      snippet:
        " you can use javascript in this ejs tags to loop through data stracture",
    },
    {
      title: " React vs ejs",
      snippet:
        " react is a web framework that lets you combine html and JS to create UI via components",
    },
  ];
  
  res.render("index", { title: "Home", blogs });
  */
  //redirect the home "/" route to the "/blogs" route which lists all the blogs from db
  //becouse erlier we hard coded the data, but now  the "/blogs" will fetch data from the db
  res.redirect("/blogs");
});
//about route handler
app.get("/about", (req, res) => {
  /*
  //res.send("<h4>About page</h4>");
  res.sendFile("./pages/about.html", { root: __dirname });
  */
  res.render("about", { title: "About" });
});

//blog routes
//app.use(blogRoutes);
//you can further scope the router to specific URL,
//but you have to remove all the "/blogs" from request handler b/c it will result in /blogs/blogs
app.use("/blogs", blogRoutes);

//404 page
app.use((req, res) => {
  //res.status(404).sendFile("./pages/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404 -page not found" });
});
