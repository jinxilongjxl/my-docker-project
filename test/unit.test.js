// test/unit.test.js
const request = require("supertest");
const app = require("../server"); // 导入纯 Express 实例
let server; // 存储服务器实例

// 所有测试执行前：启动服务器（监听随机端口，避免冲突）
beforeAll((done) => {
  server = app.listen(0, done); // 端口 0 表示自动分配空闲端口
});

// 所有测试执行后：关闭服务器，释放资源
afterAll((done) => {
  server.close(done); // 关闭服务器，结束异步操作
});

// 测试根接口
describe("GET /", () => {
  it("应该返回 200 状态码和欢迎信息", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Hello Cloud Build!");
  });
});

// 测试健康检查接口
describe("GET /health", () => {
  it("应该返回 200 状态码和 OK", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("OK");
  });
});
