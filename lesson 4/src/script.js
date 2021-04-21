import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';

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

// Time
let time = Date.now();

// method with clock

const clock = new THREE.Clock();

gsap.to(mesh.position, {
    duration: 1,
    x: 2,
    delay: 1
})

// Animations
const tick = () => {

    // fix fps issues on fast screens
    const currentTime = Date.now();
    const deltaTime = currentTime - time;
    time = currentTime;

    const elapsedTime = clock.getElapsedTime();

    // update objects
    // mesh.rotation.y += 0.001 * deltaTime;

    // update objects
    // mesh.rotation.x = elapsedTime * Math.PI * 2;

    // mesh.position.x = Math.sin(elapsedTime);
    mesh.position.y = Math.cos(elapsedTime);

    // camera.lookAt(mesh.position);

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick);
}

tick();