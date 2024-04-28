import * as THREE from 'three'

// 定义轨道模型接口
export interface ITrainModel extends THREE.Mesh {
}

// 轨道模型类
export class TrainModel extends THREE.Mesh implements ITrainModel {
  constructor() {
    // 创建一个立方体
    const geometry = new THREE.BoxGeometry(1, 1, 0.1)
    // 创建一个材质
    const material = new THREE.MeshBasicMaterial({
      color: 0xFFFF00,
    })

    super(geometry, material)

    this.castShadow = true // 设置投影
    this.receiveShadow = false // 接收阴影
  }
}
