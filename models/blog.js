const mongoose = require("mongoose");
const schema = mongoose.Schema;

//create your schema
const blogSchema = new schema(
  {
    //properties of the document
    title: { type: String, required: true },
    snippet: { type: String, required: true },
    body: { type: String, required: true },
  },
  { timestamps: true }
);

//create a model which wraps schema and provide interface to communicate with
/*
takes two argument the model name "blog" and automatically pluralize it by 
adding "s" to model name to get the collection(i.e. it should be singular
of collection name) and the 2nd arument will be  the name of our schema
that this model wraps(blogSchema).
*/
const Blog = mongoose.model("blog", blogSchema);

//export the model
module.exports = Blog;
