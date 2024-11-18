const http = require("http");
const fs = require("fs");
const _ = require("lodash");

//create a server
const server = http.createServer((req, res) => {
  //console.log(req);/
  //console.log(req.url, req.method);
  //set header content type
  /*
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello World!");
  res.end();
  */
  //if we are sending html
  /*
  res.setHeader("Content-Type", "text/html");
  res.write('<heaad><link rel="text/stylesheet" href="#"></head>');
  res.write("<h1>Hello World!</h1>");
  res.write("<p>Hello again fella, how you doin !</P>");
  res.end();
  */
  //reading and sending html page/file as response to the brwoser
  //determine the requested URL
  let path = "./pages/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about_me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    case "/contact":
      path += "contact.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  res.setHeader("Content-Type", "text/html");
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listining for request on port 3000");
});
