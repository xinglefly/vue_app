# vue_app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 规范
> JS
1. 如果是公用组件必须声明 `name` 选项, 并在 `mand-ui` 文件内全局导入声明
2. 所有的 `api` 相关的地址都应写入 `src/constants/api.js` 文件内, 并采用最后一个单词命名
3. 所有本地静态枚举都应写入 `src/constants/staticData.js` 内
4. 全局公用静态变量应写入 `src/constants/config.js` 内
5. 所有 js 命名不应根据位置来命名, 应该根据其含义使用对应英文来命名, 禁止出现拼音等方式命名

> Router
1. `src/router.js` 为所有路由的总入口, 各模块应有自己的模块内路由文件, 并在总入口里导入
2. 路由 `path` 以烤串形式来命名, `name` 与 `component` 用大驼峰来命名
3. 如不是顶级路由, 应包含在 `/` 路由下的子集路由内 (为页面切换动画效果)
4. 为页面动画, 在路由里新增了 `goBack()` 方法, 内部使用自带 `go()` 方法, 使用形式与其一样

> stylus
1. 所有的 class 命名都采用烤串形式
2. 如不是必须, 无需使用 id 来定义样式
3. 如不是必须, 不应再行内写样式
4. 所有 css 样式采用 stylus 来写, 无需 `{}`, `:`, 及`;`

### npm install plugin
eslint
vuex
vue-router
axios
stylus
postcss
