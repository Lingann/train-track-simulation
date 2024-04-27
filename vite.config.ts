import { URL, fileURLToPath } from 'node:url'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig((_opt: UserConfig) => {
  // 设置本地开发环境的访问host，注意，这里只是为127.0.0.1设置了host，测试环境，预发环境的host需要在本地的host文件中配置
  return {
    base: './',
    optimizeDeps: {
      include: ['vue'],
    },
    // 注入全局变量
    define: {
      __VERSION__: JSON.stringify({}),
    },

    plugins: [
      vue(),
      vueJsx(),
      // 配置html模板（这里也可以配置多页面应用，以此提高页面加载速度）
      createHtmlPlugin({
        // 配置入口文件，配置后会自动引入打包后的js文件，需要注意的是，要将index.html文件中的js文件引入注释掉
        entry: 'src/main.ts',
        inject: {
          data: {
            title: '火车轨道模拟器', // 网页标题
            description: '火车轨道模拟器', // 网页描述
            keywords: '火车轨道模拟器', // 网页关键字
          },
        },
      }),
    ],
    server: {
      disableHostCheck: true, // 关闭host检查
      open: false, // 自动打开浏览器
      gzip: true, // 开启gzip
      port: 8080,
      cors: true,
    },
    build: {
      target: 'es2015', // 兼容性
      assetsDir: 'assets', // 静态资源目录
      cssTarget: 'chrome80', // css兼容性
      sourcemap: false, // 打包后是否生成.map文件
      manifest: true, // 是否生成manifest.json文件
      chunkSizeWarningLimit: 2000, // 警告阈值
      minify: true, // 压缩方式
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue'], // 将vue单独打包
          },
        },
      },
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          // 定义全局的scss变量
          // 给导入的路径最后加上 ;
          // additionalData: `@import '@/styles/main.scss';`
        },
      },
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
        {
          find: /^~(.*)$/,
          replacement: '$1',
        },
      ],
    },
  }
})
