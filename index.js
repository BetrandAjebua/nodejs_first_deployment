const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res)=>{
    res.writeHead(200,({"Content-Type":"text/plain"}));
    res.end("Welcome to Kings Production");
});

const port = process.env.port || 3000;
server.listen(port, ()=>{
    log("Service Running @ "+port);
})
























// const {Worker} = require("worker_threads");
// const http =  require("http");

// http.createServer((req, res)=>{
//     if (req.url==="/"){
//     res.writeHead(200, ({"content-type":"text/plain"}));
//     res.end("Home fast Page");
//     }else if(req.url==="/slow"){
//        const worker = new Worker("./worker.js");

//        worker.on("message", (j)=>{
//         res.writeHead(200, ({"content-type":"text/plain"}));
//         res.end("slow with"+j);
//        })
//     }
// }).listen(3000, ()=>{
//     console.log("Service Running @ port 3000")
// })

