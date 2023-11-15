const express = require("express");
const app = express();

const PORT = 5500;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/lesson4.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/lesson4about.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/lesson4contact.html");
});

// 404 catch
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/lesson404.html");
});

app.listen(PORT, () => {
  console.log("Server up on port:" + PORT + "!");
});
