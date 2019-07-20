import * as express from "express";

const app = express();

app.get("*", (request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World!");
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log("Server running at http://localhost:%d", port);
