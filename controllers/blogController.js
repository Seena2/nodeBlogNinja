const Blog = require("../models/blog");

//blog_index,blog_details,blog_create_get, blog_create_post, blog_delete

//get all the blogs and inject to index
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) //sorts by timestamp in descending oreder/latest first
    .then((result) => {
      res.render("blogs/index", { title: "All blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

//details
const blog_details = (req, res) => {
  //extract id from request object//extract the Id parameter from the request URL
  const id = req.params.id;
  //console.log(id);
  //retrive the document with this "id" from the database using "Blog" model
  Blog.findById(id)
    .then((result) => {
      //then render the result on the details page/view
      res.render("blogs/details", { title: "Blog details", blog: result });
    })
    .catch((err) => {
      //console.log(err);
      res.status(404).render("404", { title: "blog not found" });
    });
};
//sending form
const blog_create_get = (req, res) => {
  res.render("blogs/createBlog", { title: "Create new blog" });
};

//creating blog
const blog_create_post = (req, res) => {
  //use middleware to get form data //line #49 above
  //console.log(req.body);
  //create new instance of "Blog" model pass the recieved form data via middleware as argument
  const blog = new Blog(req.body);
  //save the blog to the database
  blog
    .save()
    .then((result) => {
      //lets redirect user back to home page after submitting the form,
      // you can also either send success message or other action as you want
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

//delete blog
const blog_delete = (req, res) => {
  //grab the id from request object
  const id = req.params.id;
  //use the Blog model to find this item using id
  Blog.findByIdAndDelete(id)
    .then((result) => {
      //send back JSON instead of redirecting(Not allowed for ajax rerquest made using fetch API)
      //this is typical response for an API, to get/delete data
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

//export the handler functions
module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
