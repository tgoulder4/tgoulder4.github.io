const app = require("express")();
const rtrIndex = require("./routers/indexRouter");
const port = process.env.PORT || 3500;
app.use("/", rtrIndex);
const main = async () => {
  await app.listen(port);
  console.log(`now listening on ${port}`);
};
main();
