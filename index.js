var http = require('http')
var fs = require('fs')


http.createServer(function(req,res){
    switch(req.url){
        case '/README':
        res.writeHeader(200,{
            'content-type' : 'text/plain;charset="utf-8"'
        });
        res.end(fs.readFileSync(__dirname+'\\README.md'))
        case '/test':
        res.end(fs.readFileSync(__dirname+'\\sample\\test.html'))
        default:
        res.writeHeader(200,{
            'content-type' : 'text/html;charset="utf-8"'
        });
        res.write('成功连接！')
        res.end()
    }
}).listen(8080)