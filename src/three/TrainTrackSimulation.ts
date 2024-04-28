import * as THREE from 'three'
import type { ITrainTrackSimulation } from './types'

export class TrainTrackSimulation implements ITrainTrackSimulation {
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

  _createScene() {
    this.scene = new THREE.Scene()
  }

  _createCamera() {
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  }

  _createRenderer() {
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.shadowMap.enabled = true // 设置阴影
    this.renderer.toneMapping = THREE.NoToneMapping // 设置色调映射
    this.renderer.toneMappingExposure = 1 // 设置曝光程度
    // this.renderer.setClearAlpha(0) // 设置背景透明
    this.originElement.appendChild(this.renderer.domElement)
  }

  init() {
    this._createScene()
    this._createCamera()
    this._createRenderer()

    // 添加环境光
    this.scene.add(new THREE.AmbientLight(0x404040))

    this.camera.position.z = 5
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.originElement.appendChild(this.renderer.domElement)
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this))
    this.renderer.render(this.scene, this.camera)
  }
}
