import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import floor from './floor';
import { ambientLight, moonLight, doorLight } from './lights';
import sizes from './sizes';
import camera from './camera';
import house from './house/house';
import fog from './fog';
import { ghost1, ghost2, ghost3 } from './ghosts';

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

scene.add(floor)
scene.add(house)
scene.add(ghost1)
scene.add(ghost2)
scene.add(ghost3)
scene.add(moonLight)
scene.add(ambientLight)
scene.add(doorLight)
scene.add(camera)

scene.fog = fog;

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})



// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor('#262837');
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime();

    const ghost1Angle = elapsedTime * 0.5;
    ghost1.position.x = Math.cos(ghost1Angle) * 4;
    ghost1.position.z = Math.sin(ghost1Angle) * 4;
    ghost1.position.y = Math.sin(elapsedTime * 3);

    const ghost2Angle = - elapsedTime * 0.32;
    ghost2.position.x = Math.cos(ghost2Angle) * 5;
    ghost2.position.z = Math.sin(ghost2Angle) * 5;
    ghost2.position.y = Math.sin(elapsedTime * 4) * Math.sin(elapsedTime * 2.5);

    const ghost3Angle = elapsedTime * 0.10;
    ghost3.position.x = Math.cos(ghost3Angle) * 4;
    ghost3.position.z = Math.sin(ghost3Angle) * 4;
    ghost3.position.y = Math.sin(elapsedTime * 3);

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()