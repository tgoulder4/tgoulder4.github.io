const app = require("express")();
const port = process.env.PORT || 3500;
app.get(
  "/",
  (req, res) => {
    res.send("hi!");
  }
  //send fullstack one
);
app.get(
  "/?focus="
  //send specified focus
);
app.listen(port);
