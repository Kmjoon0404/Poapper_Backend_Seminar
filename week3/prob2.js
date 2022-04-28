const http= require('http');
http.createServer((req, res)=>{
    console.log(req.url)
    var jbString = req.url;
    var jbSplit = jbString.split('/');
    if(String(jbSplit[1])=='add'){
        a = Number(jbSplit[2]);  
        b = Number(jbSplit[3]);  
        res.write(' ' + jbSplit[2] + ' '+jbSplit[1] + ' '+jbSplit[3]+ ' is '+(a+b));
        res.end();
    }
    else if(String(jbSplit[1])=='sub'){
        a = Number(jbSplit[2]);  
        b = Number(jbSplit[3]);  
        res.write(' ' + jbSplit[2] + ' '+jbSplit[1] + ' '+jbSplit[3]+ ' is '+(a-b));
        res.end();
    }
    else if(String(jbSplit[1])=='mul'){
        a = Number(jbSplit[2]);  
        b = Number(jbSplit[3]);  
        res.write(' ' + jbSplit[2] + ' '+jbSplit[1] + ' '+jbSplit[3]+ ' is '+(a*b));
        res.end();
    }
    else if(String(jbSplit[1])=='div'){
        a = Number(jbSplit[2]);  
        b = Number(jbSplit[3]);  
        res.write(' ' + jbSplit[2] + ' '+jbSplit[1] + ' '+jbSplit[3]+ ' is '+(a/b));
        res.end();
    }
}).listen(8080);