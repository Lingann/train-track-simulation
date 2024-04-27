import type * as THREE from 'three'
import type { ITrainModel } from '../models/TrainModel'

export interface ITrainController {
  /** 列车模型 */
  model: ITrainModel

  /** 列车位置 */
  readonly position: THREE.Vector3
  /** 列车速度 */
  readonly speed: number
  /** 列车方向 */
  readonly direction: THREE.Vector3
  /** 列车加速度 */
  readonly acceleration: number
  /** 列车最大速度 */
  readonly maxSpeed: number
  /** 列车最小速度 */
  readonly minSpeed: number

  /** 列车状态 */
  readonly state: 'stop' | 'moving'

  /** 列车加速 */
  speedUp: () => void
  /** 列车减速 */
  speedDown: () => void
  /** 列车停止 */
  stop: () => void

  /** 计算列车下一帧位置 */
  // _computeNextPosition: () => void
  /** 更新列车位置 */
  // _updatePosition: () => void
}
