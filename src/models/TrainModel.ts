import * as THREE from 'three'

// 定义轨道模型接口
export interface ITrainModel extends THREE.Mesh {
}

// 轨道模型类
export class TrainModel extends THREE.Mesh implements ITrainModel {
  constructor(geometry?: THREE.BufferGeometry, material?: THREE.Material | THREE.Material[]) {
    super(geometry, material)
  }
}
