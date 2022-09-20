// Scene
const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:0xff0000});
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Camera
const sizes = {width:800, height:600}
//const camera = new THREE.PerspectiveCamera(75, sizes.width, sizes.height)
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000); 
camera.position.z = 5
scene.add(camera)

// Rederer
const renderer = new THREE.WebGLRenderer()
document.body.appendChild( renderer.domElement );

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
