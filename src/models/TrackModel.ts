import * as THREE from 'three'

// 定义轨道模型接口
export interface ITrackModel extends THREE.Mesh {
}

// 轨道模型类
export class TrackModel extends THREE.Mesh implements ITrackModel {
  constructor(geometry?: THREE.BufferGeometry, material?: THREE.Material | THREE.Material[]) {
    super(geometry, material)
  }
}
