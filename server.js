const http = require("http");
const fs = require("fs");
const path = require("path");

const host = "0.0.0.0";
const port = 3000;

function getContentType(filePath) {
const ext = path.extname(filePath).toLowerCase();
if (ext === ".html") return "text/html; charset=utf-8";
if (ext === ".css") return "text/css; charset=utf-8";
if (ext === ".js") return "application/javascript; charset=utf-8";
if (ext === ".png") return "image/png";
if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
if (ext === ".svg") return "image/svg+xml";
return "application/octet-stream";
}

const server = http.createServer((req, res) => {
const urlPath = req.url === "/" ? "/index.html" : req.url;
const safePath = urlPath.split("?")[0].split("#")[0];
const filePath = path.join(__dirname, safePath);
fs.readFile(filePath, (err, data) => {
if (err) {
if (err.code === "ENOENT") {
res.statusCode = 404;
res.setHeader("Content-Type", "text/plain; charset=utf-8");
res.end("404 Not Found");
} else {
res.statusCode = 500;
res.setHeader("Content-Type", "text/plain; charset=utf-8");
res.end("500 Internal Server Error");
}
return;
}
res.statusCode = 200;
res.setHeader("Content-Type", getContentType(filePath));
res.end(data);
});
});

server.listen(port, host, () => {
const displayHost = "localhost";
console.log(`Node.js 服务器已启动: http://${displayHost}:${port}/`);
console.log("同一局域网内其他电脑可用本机 IP 地址访问");
});

