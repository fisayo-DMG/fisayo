const http = require("http");
const PORT = process.env.PORT || 8080;
const { parse } = require("querystring");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.end(
      `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <form method="POST" action="/message">
                <label>Please enter a message below: <br>
                  <input type="text" name='message'> <br>
                  <input type="submit">
                </label>
                </form>
            </body>
            </html>
            `
    );
  }

  if (req.url === "/message") {
    if (req.method === "POST") {
      let body = "";
      req.on("data", content => {
        body += content.toString();
      });
      req.on("end", () => {
        fs.writeFile(
          path.join(__dirname, "message.txt"),
          parse(body).message,
          err => {
            if (err) throw err;
          }
        );
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Message sent!");
      });
    } else {
      res.end("Error");
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
