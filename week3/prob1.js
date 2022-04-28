const http= require('http');
const moment = require('moment');
const time=moment(); 
time.format('YYYY-MM-DD-HH24:MI:SS')
http.createServer((req, res)=>{
    res.write(time.format());
    res.end();
}).listen(8080); 