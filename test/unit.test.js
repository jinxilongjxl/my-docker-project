// test/unit.test.js
const request = require("supertest");
const app = require("../server"); // 引入 Express 应用

// 测试根接口
describe("GET /", () => {
  it("应该返回 200 状态码和欢迎信息", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200); // 断言状态码为 200
    expect(response.text).toContain("Hello Cloud Build!"); // 断言包含指定文本
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
