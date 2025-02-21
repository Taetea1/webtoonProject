const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static("public"));
app.use("/uploads", express.static("uploads"));

app.set("view engine", "ejs");
app.set("views", "./views");

const adminRouter = require("./routes/registrationroute");
app.use("/webtoons", adminRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("서버 실행", port);
});
