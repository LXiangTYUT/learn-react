var http = require("http");
var path = require("path");
var fs = require("fs");
var port = 3000;
var url = require("url");

var server = http.createServer(function (req, res) {
    var pathName = url.parse(req.url).pathname;
    pathName=path.parse(pathName).name;
    pathName = path.join(__dirname,pathName);
    console.log(pathName);
    if( !fs.existsSync(pathName)){
        res.writeHead(404);
        res.end();
    }else {
        var pidfile = path.join(__dirname,'../run/app.pid');
        fs.writeFileSync(pidfile,"utf-8",process.pid);
        process.on("SIGTERM",function () {
           if(fs.existsSync(pidfile))fs.unlinkSync(pidfile);
        });
        fs.createReadStream(pathName, "utf-8").pipe(res);
    }
});
server.listen(port);
console.log("server start on 3000");

