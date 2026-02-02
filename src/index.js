const express = require("express");
const sermonsRouter = require("./routes/sermons");

const app = express();
app.use("/api/sermons", sermonsRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
