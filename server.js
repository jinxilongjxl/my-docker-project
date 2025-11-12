require("dotenv").config();

// server.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// 根接口：访问返回欢迎信息
app.get("/", (req, res) => {
  res.send(`
    <h1>Hello Cloud Build v011!</h1>
    <p>这是从 GCR 拉取的 Docker 镜像运行的服务</p>
    <p>项目 ID：${process.env.PROJECT_ID || "未配置"}</p>
  `);
});

// 健康检查接口（后续部署用）
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// 关键修复：仅在直接运行该文件时启动服务器（生产环境），测试时不启动
if (require.main === module) {
  // 启动服务（仅生产环境执行）
  app.listen(PORT, () => {
    console.log(`服务运行在 http://localhost:${PORT}`);
  });
}

// 导出纯 Express App 实例（供测试使用）
module.exports = app;
