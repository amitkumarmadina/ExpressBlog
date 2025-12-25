const express = require('express')
var {engine} = require("express-handlebars");
const app = express()
const port = 3000
const path = require('path');

app.engine(
  ".handlebars",
  engine({
    extname : "handlebars",
    defaultLayout : false,
    layoutsDis : "views/layout",
  })
);

app.set("view engine", "handlebars")
app.use(express.static(path.join(__dirname,'static')));
app.use("/", require(path.join(__dirname, "routers/blogs.js")));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, "public"));
// })

// app.get('/contact', (req, res) => {
//   res.send('This is About contact!')
// })

app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`)
})
