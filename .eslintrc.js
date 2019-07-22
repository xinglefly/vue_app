module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential'
  ],
  rules: {
    'consistent-return': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'object-curly-newline': 'off',
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: true
    }], // 允许箭头函数return代码块
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: [2, 'never'], // 不使用分号 禁用
    'comma-dangle': [2, 'never'], // 对象后逗号 禁用
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', {
      props: false
    }], // 参数禁止重新赋值
    'no-trailing-spaces': ['error', { // 禁止行尾空格
      skipBlankLines: true
    }],
    'linebreak-style': [0, 'error', 'windows'],
    // vue 相关
    'vue/no-dupe-keys': 2,
    'vue/no-parsing-error': 2, // 禁止出现语法错误
    'vue/require-valid-default-prop': 2, // prop 的默认值必须匹配它的类型
    'vue/return-in-computed-property': 2, // 计算属性必须有返回值
    'vue/valid-template-root': 2, // template 的根节点必须合法
    'vue/valid-v-bind': 2, // v-bind 指令必须合法
    'vue/valid-v-else': 2, // v-else 指令必须合法
    'vue/valid-v-if': 2, // v-if 合法
    'vue/valid-v-model': 2, // v-model 指令必须合法
    // v-on 指令必须合法
    'vue/valid-v-on': 2,
    // v-pre 指令必须合法
    'vue/valid-v-pre': 2,
    // v-show 指令必须合法
    'vue/valid-v-show': 2,
    // v-text 指令必须合法
    'vue/valid-v-text': 2,
    // 计算属性禁止包含异步方法
    'vue/no-async-in-computed-properties': 2,
    // 禁止出现重复的属性
    'vue/no-duplicate-attributes': 2,
    // 禁止在 <textarea> 中出现 {{message}}
    'vue/no-textarea-mustache': 2,
    'vue/require-v-for-key': 2, // v-for 指令的元素必须有 v-bind:key
    // @fixable 限制 v-bind 的风格, 统一简写形式
    'vue/v-bind-style': 2,
    // @fixable 限制 v-on 的风格，统一简写形式
    'vue/v-on-style': 2,
    'vue/this-in-template': ['error', 'never'],
    'vue/attributes-order': ['error',
      { // 详细规则:https://eslint.vuejs.org/rules/attributes-order.html
        order: [
          'DEFINITION',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'LIST_RENDERING',
          'UNIQUE',
          'GLOBAL',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'CONTENT',
          'EVENTS'
        ]
      }],
    // 组件的属性必须为一定的顺序https://vuejs.org/v2/style-guide/#Component-instance-options-order-recommended
    'vue/order-in-components': [2, {
      order: [
        'el',
        ['name', 'parent'],
        'functional',
        ['delimiters', 'comments'],
        ['extends', 'mixins'],
        ['components', 'directives', 'filters'],
        ['model', 'props', 'propsData'],
        ['data', 'computed'],
        ['watch', 'LIFECYCLE_HOOKS'],
        'methods',
        ['template', 'render', 'renderError']
      ]
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
