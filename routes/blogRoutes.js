const express = require("express");
const blogController = require("../controllers/blogController");
//create express router//creates new instance of router object
const router = express.Router();

//blog routes
//used to be app.get("/blogs", (req, res) => {
router.get("/", blogController.blog_index);

//post request handler
router.post("/", blogController.blog_create_post);

//send form
router.get("/create", blogController.blog_create_get);

//geting single blog
router.get("/:id", blogController.blog_details);

//Delete request
router.delete("/:id", blogController.blog_delete);

//export router
module.exports = router;
