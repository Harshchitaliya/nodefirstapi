const express = require("express");
const app = express();
const {connectmongodb} = require("./connection");
const userrouts = require("./routs/router");

connectmongodb("mongodb://127.0.0.1:27017/node-1");

app.use(express.urlencoded({ extended: false }));
app.use("/user",userrouts);







// connect localhost
const port=3000;
app.listen(port,() => console.log("server started"));