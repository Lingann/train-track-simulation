/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import Jsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: [Vue() as any, Jsx() as any],
  resolve: {
    alias: {
      dayjs: 'dayjs/esm'
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: 'dot',
    setupFiles: [path.resolve(__dirname, './vitest.setup.ts')],
    include: ['**/__tests__/**/*.[jt]s?(x)'],
    deps: {},
    testTransformMode: {
      // web: [/.[tj]sx$/]
    }
  }
})
