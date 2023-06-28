const app = require("express")();
const port = process.env.PORT || 3500;
app.get("/", (req, res) => {
  res.send("hi!");
  //transpile and send focusBackend.jsx
});
app.get(
  "/?focus="
  //send specified focus
);
app.listen(port);
