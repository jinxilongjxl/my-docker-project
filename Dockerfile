# 基础镜像：Node.js 18 轻量版（alpine 体积小，适合生产）
FROM node:18-alpine

# 设置工作目录（容器内的目录）
WORKDIR /app

# 复制 package.json 和 package-lock.json（先复制依赖文件，利用 Docker 缓存）
COPY package*.json ./

# 安装依赖（--production 只安装生产依赖，减少镜像体积）
RUN npm install --production

# 复制项目所有文件到工作目录
COPY . .

# 暴露容器端口（与服务端口一致）
EXPOSE 3000

# 容器启动时执行的命令（启动服务）
CMD ["npm", "start"]