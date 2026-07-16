# Sense Investment 博客

## 快速开始

### 1. 部署到 Vercel

- 将此仓库导入 Vercel
- Framework Preset 选择 **Jekyll**
- 绑定域名 `senseinvestment.cn`

### 2. 更新收益曲线（最重要）

你的原始 CSV 文件格式：
```csv
date,QQ,DDS,BM,LUP,JCPQ,DELE,BWE,FCPP,MOU,OTHERS,日盈亏,总盈亏,资金,日收益率,总收益率,最大回撤
2026/4/26,0,0,0,0,0,0,0,0,0,0,0,0,10000,0.00%,0.00%,0.00%
```

**更新步骤：**

1. 打开你的原始 CSV 文件（如 `data.csv`）
2. 只需要保留两列：`date` 和 `资金`
3. 将 `资金` 列除以初始资金（10000），得到 `nav`（净值）
4. 保存为 `assets/data/returns.csv`，格式如下：

```csv
date,nav
2026-04-26,1.0000
2026-04-27,1.1686
2026-04-28,1.1663
...
```

5. 提交到 GitHub，Vercel 自动部署

**更简单的方法：** 用 Excel 打开你的 CSV，新建一列 `nav`，公式为 `=资金/10000`，然后复制 `date` 和 `nav` 两列，另存为 `returns.csv` 覆盖到 `assets/data/` 目录。

### 3. 更新形象照

将你的照片重命名为 `profile.jpg`，放到 `assets/images/` 目录下，覆盖默认图片。

### 4. 写文章

在 `_posts/` 目录下创建新文件，文件名格式：`YYYY-MM-DD-标题.md`

Front matter 格式：
```yaml
---
layout: post
title: "文章标题"
date: 2026-07-16
categories: trading    # 可选: trading, investment, arbitrage, strategy
---

文章内容...
```

### 5. 目录结构

```
.
├── _config.yml          # 网站配置
├── _layouts/            # 页面模板
│   ├── default.html
│   └── post.html
├── _posts/              # 文章
├── assets/
│   ├── css/style.css    # 样式
│   ├── js/chart.js      # 收益曲线图表
│   ├── data/returns.csv # 收益数据
│   └── images/profile.jpg # 形象照
├── index.html           # 首页
├── trading.md           # 交易随笔板块
├── investment.md        # 投资思考板块
├── arbitrage.md         # 套利思考板块
└── strategy.md          # 实盘策略板块
```

## 注意事项

- 所有内容仅为个人研究记录，不构成投资建议
- `.cn` 域名需完成实名认证后解析才能生效
- 备案问题：当前服务器在海外，无需备案即可访问；未来如需迁移到国内服务器，需完成备案
