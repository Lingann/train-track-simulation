import type * as THREE from 'three'

export interface ITrainTrackSimulation {
  readonly scene: THREE.Scene
  readonly camera: THREE.PerspectiveCamera
  readonly renderer: THREE.WebGLRenderer

  readonly originElement: HTMLElement

  init: () => void
  animate: () => void
}
