// import your http
const http = require("http");

//create server with HTTP
const server = http.createServer((req, res)=>{
    console.log ("server is created")
})
    
//initiate a port
const PORT = 3000;

//listen to server 
server.listen(PORT, () => {
    console.log("server is listening on port " + PORT);
}

)