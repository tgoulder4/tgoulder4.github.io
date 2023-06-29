const express = require("express");
const app = express();
module.exports = {
  get: (req, res) => {
    //send files in the path req.query.focus
    res.send(req.query.focus);
  },
};
