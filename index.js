const express = require('express'); 
const path = require('path'); 
const app = express(); 
const PORT = process.env.PORT || 3000; 

// 提供静态文件
// 使用path.join确保路径格式在不同操作系统中正确
app.use(express.static(path.join(__dirname))); 

// 主路由返回index.html
app.get('/', (req, res) => { 
  res.sendFile(path.join(__dirname, 'index.html')); 
}); 

// 启动服务器 - 不指定IP地址，默认监听所有网络接口
app.listen(PORT, () => { 
  console.log(`服务器运行在 http://localhost:${PORT}`); 
});