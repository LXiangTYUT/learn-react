## learn-react



### 写在学习前

---

最高效的学习是，学会渔，而不是只是抓到鱼，如何高效的掌握一门技术是现代必须反思的一件事情。为此，我希望自己在通过练手learn-react这个Demo来探索和锻炼自己的学习能力，争取达到以下几个要求吧、

1. 坚持官方文档
2. 短时间内确定一门技术的最佳资源获取方式
3. 短时间内确定一门技术的最佳实践方式
4. 对于一门的重要知识点能够融汇理解应用
5. 坚持反思




### 关于React

---

了解到React是很机缘的事情，由于这几年的蹉跎，很多技术早已没有关心（虽然号称吃技术饭的）实在是汗颜，之前了解到最近出了“一统江湖”的语言--**[Node.js](http://nodejs.cn/)** , 于是翻看了相关书籍，直觉这是未来开发的趋势，后来又无意听说了[PWA](http://www.tuicool.com/articles/riQFjmr) ， 虽然大概2年前我就看了MacCaw [基于MVC的JavaScript Web富应用开发](http://baike.baidu.com/link?url=68RD4MLpr6qj02_Y-WjMJXmZLQdtLWlBURJrJ-gFFWgnjR33x7yc3IvCt4hl6fq-TfFQWRM7Z814XiwA1QMJaneexXUBjM83_zQDTXR4dLtCkQXH2i2VkDcAnceIMAMc-dac9RQlBkZ-oUSUsDs9NhILr2P9qCpZ_3t9c1SFPyMfd21nIlUED6vCuSH1cFy8Fum8HWJVvqAavzlpeRmAQa)就觉得这种模式会出现 。后来又陆续看了**react ,react native,vue** 以及一大堆前段框架,深刻觉得是时候为自己以后的职业进行规划进行知识铺垫了，那就撸起袖子干吧。

先来看看React是什么东东，以及学习它我能干什么和如何学习它，这里扒了些关于React的简介。

> **ReactJS简介**
>
> React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。由于 React 的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。
>
> **React关注的重点**
>
> React实际上解决的是前端DOM频繁刷新带来的性能问题，他并不是一个前端的UI库，而是提供了一种刷新DOM的解决方案--构建虚拟DOM树，并对DOM树进行比对分析从而判断是否要真实的刷新DOM
>
> **React的开发方式**
>
> **组件化 **，如果说MVC的思想让你做到视图-数据-控制器的分离，那么组件化的思考方式则是带来了UI功能模块之间的分离。我们通过一个典型的Blog评论界面来看MVC和组件化开发思路的区别。
>
> 对于MVC开发模式来说，开发者将三者定义成不同的类，实现了表现，数据，控制的分离。开发者更多的是从技术的角度来对UI进行拆分，实现松耦合。
>
> 对于React而言，则完全是一个新的思路，开发者从功能的角度出发，将UI分成不同的组件，每个组件都独立封装。
>
> 在React中，你按照界面模块自然划分的方式来组织和编写你的代码，对于评论界面而言，整个UI是一个通过小组件构成的大组件，每个组件只关心自己部分的逻辑，彼此独立。

知道了React是什么东东以后，我们是如何定位在项目中使用它，以及如何使用他呢？

我自己是这样认为

> 在项目中应该是 **REACT	负责Dom的渲染** ->**前端UI组件库（基于React风格的）**

而现在的Web和java时代东西应该也差不多，只是在web ui端增加了 React这一层而已

那么现在基于Node的全栈开发需要哪些配套呢？

Maven -- NPM （包管理当然还有Bower、browserify)

ANT -- [Babel](https://babeljs.io/)（这个东西是是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行)

webpack



下面分别学习需要储备的知识

#### NPM

#### Babel

---

(以下内容转自[阮一峰Babel](http://www.ruanyifeng.com/blog/2016/01/babel.html))

##### .babelrc

Babel的配置文件是`.babelrc`，存放在项目的根目录下。使用Babel的第一步，就是配置这个文件。

该文件用来设置转码规则和插件，基本格式如下:

```json
{
  presets:[],
  plugins:[]
}
```

`presets`字段设定转码规则，官方提供以下的规则集，你可以根据需要安装。

```shell

# ES2015转码规则
$ npm install --save-dev babel-preset-es2015

# react转码规则
$ npm install --save-dev babel-preset-react

# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3
```

##### 命令行工具babel-cli

Babel提供`babel-cli`工具，用于命令行转码。

它的安装命令如下。

```shell
$ npm install --global babel-cli
```

基本用法如下。

```shell
# 转码结果输出到标准输出
$ babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ babel example.js --out-file compiled.js
# 或者
$ babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ babel src --out-dir lib
# 或者
$ babel src -d lib

# -s 参数生成source map文件
$ babel src -d lib -s
```

上面代码是在全局环境下，进行Babel转码。这意味着，如果项目要运行，全局环境必须有Babel，也就是说项目产生了对环境的依赖。另一方面，这样做也无法支持不同项目使用不同版本的Babel。

一个解决办法是将`babel-cli`安装在项目之中。

```shell
# 安装
$ npm install --save-dev babel-cli
```



Webpack

