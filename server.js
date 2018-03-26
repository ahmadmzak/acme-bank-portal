const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect("mongodb://ahmadmzak:password@ds223019.mlab.com:23019/acme");

const db = mongoose.connection;
const User = require("./models/users");

app.get("/api/users/:username", (req, res) => {
  User.find((err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
});

app.post("/api/users", (req, res) => {
  const user = new User(req.body);
  user.save(err => {
    if (err) res.send(err);
    res.json({ msg: "added" });
  });
});

app.delete("/api/users/:username", (req, res) => {
  User.remove({ username: req.params.username }, err => {
    if (err) res.send(err);
    res.json({ msg: "deleted" });
  });
});

app.listen(port, () => console.log(`Running on port ${port}...`));
