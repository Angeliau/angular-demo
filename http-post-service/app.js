var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extend:false}));

//允许跨域
app.all('*',function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	if (req.method == "OPTIONS"){
		res.send(200);
	}else{
		next();
	}
});

app.get('/',function(req,res){
	res.send('首页');
})

app.post('/doLogin',function(req,res){
	console.log(req.body);
	res.json({"msg":"post成功"});
})

app.get('/news',function(req,res){
	console.log(req.body);
	res.jsonp({"msg":"新闻数据"});
})

app.listen(3000,'127.0.0.1');