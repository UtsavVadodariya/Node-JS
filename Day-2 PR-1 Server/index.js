const http = require("http");
const port = 1050;

const portHandler = (req ,res)=>{
    res.write("<h1>Server started</h1>");
    res.end()
}
const server = http.createServer(portHandler)


server.listen(port, (err)=>{
    err ? console.log() : console.log("Server started on port" + port);
})