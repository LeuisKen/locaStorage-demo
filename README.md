# locaStorage-demo

A small demo to explain how localStorage works

好了接下来咱们好好说中文不装逼。

由于一些浏览器要用localStorage的话，需要服务器环境，我就做了个简单的node server给大家用。

所以这个demo页面就算是一个node项目了。

运行任何一个node项目之前，先在命令行运行（安装项目依赖的包，我使用了express来进行简单的http操作，详见app.js）：

```
npm install
```

然后通过这条命令来运行服务器，默认监听3001端口：

```
node app
```

你会在命令行看到如下输出：

```
listening on port:3001
```

然后打开浏览器访问localhost:3001就可以了。

之后这个项目的更新就看你们的了，详见我发过去的需求。

PS：项目中的app.js就是node server的代码，也不复杂，可以了解一下，不过我懒得像demo那样一行一行写注释了，有问题问我吧。