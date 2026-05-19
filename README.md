# mAI Group Homepage

mAI 课题组主页，基于 [Hugo](https://gohugo.io/) 静态站点框架和 [PaperMod](https://github.com/adityatelange/hugo-PaperMod) 主题构建。

## 在线预览

主页已配置 GitHub Actions 自动部署到 GitHub Pages，每次推送 `main` 分支会自动构建和发布。

**启用在线预览（首次需要手动开启）：**

1. 进入 GitHub 仓库的 **Settings → Pages**
2. **Source** 选择 **GitHub Actions**
3. 推送代码到 `main` 分支后，GitHub Actions 会自动构建并部署
4. 部署完成后，访问 `https://iceporridge.github.io/mai-group/` 即可查看

> 构建状态可在仓库 **Actions** 标签页查看。

## 本地预览

### 环境要求

- [Hugo Extended](https://gohugo.io/installation/) v0.123.0 或更高版本
- [Node.js](https://nodejs.org/)（用于前端依赖）

### 启动本地服务器

```bash
# 1. 克隆仓库（含主题子模块）
git clone --recursive https://github.com/iceporridge/mai-group.git
cd mai-group

# 2. 安装 Node.js 依赖
npm install

# 3. 启动 Hugo 开发服务器（支持热重载）
hugo server -D
```

浏览器打开 `http://localhost:1313/` 即可预览。修改内容保存后页面会自动刷新。

### 生成静态文件

```bash
hugo
```

生成的静态文件在 `public/` 目录下。

## 项目结构

```
mai-group/
├── archetypes/          # 内容模板（新建文章时的默认 front matter）
├── assets/css/          # 自定义 CSS 样式
├── content/             # 网站内容（Markdown 页面）
│   ├── home.md / home.en.md   # 中/英文首页
│   ├── people.md              # 成员介绍页
│   ├── publications.md        # 论文发表页
│   ├── contact.md             # 联系我们/加入我们
│   ├── news/                  # 新闻动态
│   ├── projects/              # 项目介绍
│   ├── demo/                  # Demo 页面
│   └── talks/                 # 讲座报告
├── data/                # 数据文件（课题组人员、论文等结构化数据）
├── layouts/             # 自定义布局和短代码
│   ├── _default/        # 默认页面布局
│   ├── partials/        # 可复用的局部模板
│   ├── shortcodes/      # 短代码（页面中的可复用组件）
│   │   ├── lab_member.html / lab_members_grid.html  # 成员展示组件
│   │   ├── publication.html           # 论文条目组件
│   │   ├── news_section.html / news_timeline.html  # 新闻展示组件
│   │   ├── project_highlight.html     # 项目展示组件
│   │   └── ...                        # 其他 UI 组件
│   └── index.html      # 首页等特殊页面的布局覆盖
├── static/              # 静态资源（图片、图标、JS、CSS 等）
│   ├── img/             # 图片资源
│   ├── js/              # JavaScript 脚本
│   ├── css/             # 额外 CSS
│   └── demos/           # Demo 相关资源
├── themes/PaperMod/     # Hugo PaperMod 主题（Git 子模块）
├── hugo.yaml            # Hugo 配置文件（站点标题、菜单、参数等）
├── gen_publications.py  # 论文数据生成脚本
└── .github/workflows/   # GitHub Actions 自动部署配置
    └── hugo.yaml        # 自动构建并部署到 GitHub Pages
```

## 修改指南

### 修改页面内容

编辑 `content/` 下对应的 Markdown 文件即可。中英文页面分别以 `.md`（中文）和 `.en.md`（英文）后缀区分。

### 修改页面布局

页面结构由 `layouts/` 下的模板控制。其中 `shortcodes/` 中的短代码可在 Markdown 内容中直接调用，例如：

```markdown
{{</* lab_members_grid */>}}
```

### 添加成员/论文数据

- **成员信息**：编辑 `data/` 目录下的数据文件
- **论文信息**：运行 `gen_publications.py` 脚本从 Google Scholar 同步，或直接编辑 `content/publications.md`

### 修改站点配置

编辑 `hugo.yaml`，可修改网站标题、导航菜单、Google Analytics ID 等。
