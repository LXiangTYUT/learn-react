var http = require("http");
var path = require("path");
var fs = require("fs");
var port = 3000;
var url = require("url");

var server = http.createServer(function (req, res) {
        var pathName = url.parse(req.url).pathname;
        var ext = path.parse(pathName).ext;
        pathName = path.parse(pathName).base;
        if (ext.match(/\.(html)$/))
            pathName = path.join(__dirname, "..", pathName);
        else
            pathName = path.join(__dirname, "../build/", pathName);
        console.log(pathName)
        if (!fs.existsSync(pathName)) {
            res.writeHead(404);
            res.end();
        } else {
            res.writeHead(200);
            fs.createReadStream(pathName, "utf-8").pipe(res);
        }
    }
);
server.listen(port);
console.log("server start on 3000");

