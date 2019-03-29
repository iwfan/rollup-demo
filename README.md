# Widget SDK

# Usage

```shell
npm i -g lerna
# 或者
npm i
# 然后 通过 npx 使用 lerna 命令
```

```shell
# 安装全部的依赖项
lerna bootstrap
```

# Structure
```text
.
├── learn.json
├── package.json
├── README.md
└── packages
    ├── client/
    └── server/
```

# Development
```shell
lerna run start
```

# Production
```shell
lerna run build
```
