import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Positions
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
// equivalent
mesh.position.set(0.7,-0.6,1)

// Scale
mesh.scale.set(2,0.5,0.5)

// Axes Helpers
const axesHelper = new THREE.AxisHelper()
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800, 
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
//camera.position.set(1,1,3)
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)