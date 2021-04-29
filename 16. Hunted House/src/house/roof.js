import * as THREE from 'three'

const roof = new THREE.Mesh(
  new THREE.ConeBufferGeometry(3.5, 1, 4),
  new THREE.MeshStandardMaterial({ color: '#b35f45' })
)
roof.position.y = 2.5 + 0.5;
roof.rotation.y = Math.PI / 4;

export default roof;