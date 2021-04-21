import './style.css';
import * as THREE from 'three';

const canvas = document.querySelector('.webgl');

const scene = new THREE.Scene();

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000
});

const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
group.add(cube1);

const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x0000ff }));
cube3.position.x = 2;
group.add(cube3);


const mesh = new THREE.Mesh(geometry, material);

// Position
mesh.position.set(1, 2, 1);

// Scale
mesh.scale.set(1, 2, 3);

// Rotation
mesh.rotation.y = Math.PI * .5

scene.add(mesh);

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

scene.add(camera);
// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

console.log(mesh.position.distanceTo(camera.position));