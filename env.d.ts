/// <reference types="vite/client" />

/**
 * ts 不识别 .vue 文件, 需要手动声明
 * https://github.com/vuejs/vue-next-webpack-preview/issues/5
 */
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}
