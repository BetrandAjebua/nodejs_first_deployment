const cluster = require("cluster");
const { log } = require("console");
const http =  require("http");

if(cluster.isMaster){
    log("Master process "+process.pid+" is running");
    cluster.fork()
    cluster.fork()
}else{
    log("Worker process "+process.pid+" is running");
const server = http.createServer((req, res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("fast Page")
    }else if(req.url==="/slow"){
        for(let i = 0; i<200000; i++){
            res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("Slow Page");
        }
    }
}); 
server.listen(3000, ()=>{
    log("Process running at 3000")
})
}
