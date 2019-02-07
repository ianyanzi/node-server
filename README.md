# node-server
## 用nodejs搭建一个简单的静态服务器

var http = require('http')    //引入http模块

var fs = require('fs')        //引入fs模块，该模块是用来读写文件的




  	http.createServer(function(req,res){
      //req是接收客户端收到的数据
      //res是返回给客户端的数据
      switch(req.url){
          case '/README':
          res.writeHeader(200,{
              'content-type' : 'text/plain;charset="utf-8"'
          });
          //这里设置响应头让浏览器解析文件用字符串的形式展示，并且解码方式为utf-8
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
    //连接服务器，并且监听8080端口



学习收获：
学习到nodejs如何使用http模块，了解服务器怎么处理用户的请求。

