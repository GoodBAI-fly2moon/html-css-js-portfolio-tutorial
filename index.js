const express = require('express');
const path = require('path');
const app = express();

// 将当前目录下的内容作为静态资源进行托管
app.use(express.static(__dirname));

// 主路由返回index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
