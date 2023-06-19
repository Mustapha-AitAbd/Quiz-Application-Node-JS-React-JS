//requirements
const express = require("express");
const app = express();
const session = require("express-session");
//utiliser les middleware nissecaires
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
//routes
app.use("/user", require("./routes/userRoute"));
app.use("/quiz", require("./routes/quizRoute"));
app.use("/question", require("./routes/questionRoute"));
app.use('/login',require('./routes/loginRoute'));
module.exports = app;
