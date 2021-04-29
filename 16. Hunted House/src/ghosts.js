import * as THREE from 'three'

const ghost1 = new THREE.PointLight('#ff00ff', 2, 2);
const ghost2 = new THREE.PointLight('#0000ff', 2, 2);
const ghost3 = new THREE.PointLight('#ffff00', 2, 2);

ghost1.castShadow = true;
ghost2.castShadow = true;
ghost3.castShadow = true;

export {
  ghost1,
  ghost2,
  ghost3,
};