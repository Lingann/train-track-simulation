import * as THREE from 'three'
import type { IThreeView } from './types'

export class ThreeView implements IThreeView {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer

  originElement: HTMLElement

  constructor(originElement: HTMLElement) {
    this.originElement = originElement
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.renderer = new THREE.WebGLRenderer()
  }

  init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.originElement.appendChild(this.renderer.domElement)
  }

  _createScene() {
    this.scene = new THREE.Scene()
  }

  _createCamera() {
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  }

  _createRenderer() {
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.originElement.appendChild(this.renderer.domElement)
  }

  mount(el: HTMLElement) {
    this.camera.position.z = 5

    this.originElement = el
  }

  animate() {
    requestAnimationFrame(this.animate)
    this.renderer.render(this.scene, this.camera)
  }
}
