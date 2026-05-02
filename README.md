# DPDR Wiki

人格解体-现实解体障碍（DPDR）知识库

## 项目简介

DPDR Wiki 是一个基于 Docusaurus 构建的静态网站，专注于提供关于人格解体（Depersonalization）和现实解体（Derealization）障碍的科普知识。

## 技术栈

- **框架**: Docusaurus 3
- **语言**: TypeScript
- **部署**: Docker + Nginx
- **域名**: wiki.depersonalization.site

## 快速开始

### 本地开发

```bash
cd wiki
npm install
npm start
```

### 构建生产版本

```bash
npm run build
```

### Docker 部署

```bash
docker-compose up -d
```

## 内容结构

```
docs/
├── symptoms/          # 症状与诊断
│   ├── depersonalization.md
│   ├── derealization.md
│   ├── diagnostic-criteria.md
│   └── common-triggers.md
├── strategies/       # 应对策略
│   ├── grounding-techniques.md
│   ├── therapy-approaches.md
│   ├── emergency-support.md
│   └── daily-management.md
├── resources/        # 资源
│   ├── reading-list.md
│   ├── professional-help.md
│   └── online-communities.md
├── disclaimer.md     # 免责声明
└── about.md          # 关于本站
```

## 多语言

- 中文（默认）
- English

## CI/CD

推送到 main 分支后，通过 GitHub Actions 自动构建和部署。

## 贡献

欢迎提交 PR 或 Issue！

## 许可

MIT
