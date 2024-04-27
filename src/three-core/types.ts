import type * as THREE from 'three'

export interface IThreeView {
  readonly scene: THREE.Scene
  readonly camera: THREE.PerspectiveCamera
  readonly renderer: THREE.WebGLRenderer

  readonly originElement: HTMLElement

  init: () => void
  mount: (el: HTMLElement) => void
  animate: () => void
}
