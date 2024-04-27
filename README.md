# train-track-simulation

一个基于 ThreeJS 的火车轨道模拟器, 可以铺设轨道, 放置火车, 并且模拟火车的运行

## 安装

```bash
# 安装依赖
pnpm install
```

## 运行

```bash
# 启动开发服务器
pnpm dev
```

## 构建

```bash
# 构建
pnpm build
```

## 项目规划

- [x] 项目初始化
- [x] 创建基本 3D 场景，添加光照、相机、地面、天空盒
- [x] 创建轨道模型、火车模型对象，定义轨道、火车的基本属性
- [x] 实现坐标系转换，通过鼠标右键点击事件在地面上创建轨道对象
- [x] 实现 UI 界面，添加控制面板，可以选择铺设轨道、放置火车
- [x] 实现鼠标拖拽轨道、火车
- [x] 实现鼠标拖拽过程中的碰撞检测，用于实现吸附效果
- [x] 计算火车的运行路径，实现火车的运行动画
- [x] 实现摄像机跟随火车运动