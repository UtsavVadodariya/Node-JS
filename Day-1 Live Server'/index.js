const http = require("http");
const port = 1005;

const portHendler = (req ,res)=>{
    res.write("<h1>Srever start</h1>");
    res.end();
}

const server = http.createServer(portHendler);

server.listen(port , (err)=>{
    err ? console.log(err) : console.log("server started on port" + port)
})