import type * as THREE from 'three'
import type { ITrackModel } from '../models/TrackModel'

export enum TrackStatus {
  NORMAL = 'normal', // 正常
  SELECTED = 'selected', // 选中
  HOVERED = 'hovered', // 悬停
  DRAGGING = 'dragging', // 拖拽中
  SNAPPING = 'snapping', // 吸附中
  COMPLETE = 'complete', // 完成
}

export interface ITrackController {
  /** 轨道模型 */
  readonly model: ITrackModel
  /** 上个轨道 */
  readonly prev: ITrackController | null
  /** 下个轨道 */
  readonly next: ITrackController | null
  /** 轨道位置 */
  readonly position: THREE.Vector3
  /** 轨道方向 */
  readonly direction: THREE.Vector3
  /** 轨道开头位置 */
  readonly startPosition: THREE.Vector3
  /** 轨道结尾位置 */
  readonly endPosition: THREE.Vector3
  /** 吸附检测半径 */
  readonly snapRadius: number
  /** 轨道状态 */
  readonly status: TrackStatus

}
