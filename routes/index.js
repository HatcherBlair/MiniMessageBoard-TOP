var express = require("express");
var router = express.Router();

// Sample messages to render by default
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello world",
    user: "Chales",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Messages", messages: messages });
});

/* GET messages page */
router.get("/new", function (req, res, next) {
  res.render("form");
});

/* POST a new message */
router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
