# nodejs express mongo MVC

基于 nodejs, express 和 mongodb 的 MVC 框架


### 1. 数据库

1) 创建数据库：

	mongo
	
	use node_express;

2) 插入用户数据：

	db.users.insert({"username": "admin", "password": "admin"});

### 2. 使用

1) 安装 node_modules

	npm install
	
2) 设置 config.js

	{
		name: 'nodejs-express-mongodb',
		port: 10000,
		hostDb: 'localhost/node_express'
	}
	
name：项目名称  
port：服务端口  
hostDb：设置 MongoDB 数据库以及数据库
	
3) 启动

	//node app
	
	./cluster.sh start / stop / status
	
4) 浏览器访问

	http://127.0.0.1:10000/rest-tester
	
### 3. 文件说明

	helpers：
		---loghelper.js: 日志输出
	
	html: 静态文件夹(html, css, js)
		---rest-tester: 接口测试
	
	logs: 日志信息
		---access.log
		---error.log
	
	models: 模型
		---user.js: 用户模型

	routes: 路由		
		---index.js: 主路由
		---user.js: 用户路由
		
	app.js: 主文件
	
	config.js: 配置文件
	
	package.json: 项目信息

### 4. routes 说明(rest API)

	app.post('/login', login); //POST: /login
	
	app.get('/user', info); //GET: /user
	
	app.get('/logout', logout); //GET: logout

### 5. monk API

https://github.com/LearnBoost/monk