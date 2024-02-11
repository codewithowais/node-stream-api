const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/ai/spelling-and-grammar-correction", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const data = `There are many different ways to approach a problem,  but it's important to consider the context and the specific requirements.`;
  for (let index = 0; index < data.length; index++) {
    setTimeout(() => {
      res.write(`data: ${data[index]}\n\n`);

      if (index === data.length - 1) {
        res.end();
      }
    }, index * 1000);
  }
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
