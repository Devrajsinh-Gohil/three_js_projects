const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.y = 1;

const surface_geometry = new THREE.BoxGeometry( 100, 0.1, 50 );
const surface_material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
const surface = new THREE.Mesh( surface_geometry, surface_material );
scene.add( surface );

camera.position.z = 5;
camera.position.set(0, 1.5, 10)


function animate() {
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    cube.rotation.z += 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
light.add( directionalLight );
scene.add( light );

renderer.render(scene, camera );