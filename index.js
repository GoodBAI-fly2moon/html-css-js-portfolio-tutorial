const express = require('express');  // 引入Express框架
const path = require('path');  // 引入path模块，用于处理文件路径
const app = express();  // 创建Express应用实例
const port = process.env.PORT || 3000;  // 设置服务器端口，优先使用环境变量中的PORT，否则使用3000

// 提供静态文件
// 将当前目录设置为静态资源目录，这样可以直接访问HTML、CSS、JS等文件
app.use(express.static(__dirname));

// 主路由返回index.html
// 当访问根路径时，返回index.html文件
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 启动服务器
// 监听指定端口，并在控制台输出服务器运行信息
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});