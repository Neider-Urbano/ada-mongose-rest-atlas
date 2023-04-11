require("dotenv").config();
const port = process.env.PORT || 5000;
const express = require("express");
const routerList = require("./src/routes/routesList");

const conecctDb = require("./src/db.js");

const app = express();
app.use(express.json());
app.use("/list", routerList);

app.get("/", function (req, res) {
  res.status(200).send("Hello user!");
});

app.listen(port, async () => {
  console.log("listening on port " + port);
  await conecctDb()
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log("Couldn't connect to MongoDB");
      console.log(error);
    });
});
