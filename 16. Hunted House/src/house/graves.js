import * as THREE from 'three'

const graves = new THREE.Group();

const graveGeometry = new THREE.BoxBufferGeometry(0.6, 0.8, 0.2);
const graveMaterial = new THREE.MeshStandardMaterial({
  color: '#b2b6b1'
});

for (let index = 0; index < 50; index++) {
  // angle in a circle
  const radius = 3 + Math.random() * 6;
  const angle = Math.random() * (Math.PI * 2);
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;
  const grave = new THREE.Mesh(graveGeometry, graveMaterial);
  grave.position.set(x, 0.3, z);
  grave.rotation.y = (Math.random() - 0.5) * 0.4;
  grave.rotation.z = (Math.random() - 0.5) * 0.4;
  graves.add(grave);
  grave.castShadow = true;
}

export default graves;