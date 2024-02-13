// create express app/ server instance and make it listen in port 3000.
const express = require("express");
const routes = require("./routes/routes.js");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const path = require("path");

const app = express(); // express app instance
const port = 3000;

//mongodb
const urlDB =
  "mongodb+srv://bagbuddy17:bagbuddy17@stsweng.wte1d1l.mongodb.net/?retryWrites=true&w=majority";

const connectionString = "mongodb://127.0.0.1:27017/STSWENG"; //use this to store locally

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(urlDB, connectionParams)
  .then(() => {
    console.info("connected to db");
  })
  .catch((e) => {
    console.log("Error", e);
  });

//Connect Schemas
const Items = require(path.join(__dirname, "./schema/Items"));
const Users = require(path.join(__dirname, "./schema/Users"));
const Bags = require(path.join(__dirname, "./schema/Bags"));

//Trial
// run();
// async function run() {
//   const user1 = await Users.create({
//     _id: new mongoose.Types.ObjectId(),
//     email: "endicoco343we57@gmaeeeil.com",
//     name: "Hotdog",
//     password: "Hotdogulet123",
//   });
// }

// Set views folder to 'public' for accessibility
app.use("/static", express.static("public"));

app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs"); // set express' default templating engine
app.set("views", "./views");

// use router
app.use(routes);

// activate the app instance
app.listen(3000, () => {
  console.log("Express app is now listening on Port 3000...");
});
