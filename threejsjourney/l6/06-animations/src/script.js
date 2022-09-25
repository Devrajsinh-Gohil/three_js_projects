import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Clock:
const clock = new THREE.Clock()

// Animations:
const tick = () =>
{
    // clock
    const time = clock.getElapsedTime()

    // update objects
    camera.position.x = Math.cos(time)
    camera.position.y = Math.sin(time)
    camera.lookAt(mesh.position)
    //mesh.rotation.y = elapsedTime
    //mesh.rotation.z += 0.01

    // render
    renderer.render(scene, camera)

    // call function again on next frame
    window.requestAnimationFrame(tick)
}
tick()