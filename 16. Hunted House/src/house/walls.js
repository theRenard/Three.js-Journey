import * as THREE from 'three'
import {
  bricksColorTexture,
  bricksAmbientOcclusionTexture,
  bricksNormalTexture,
  bricksRoughnessTexture,
} from '../textures';

const walls = new THREE.Mesh(
  new THREE.BoxBufferGeometry(4, 2.5, 4),
  new THREE.MeshStandardMaterial({
    map: bricksColorTexture,
    aoMap: bricksAmbientOcclusionTexture, // needs uv2 attribute
    displacementScale: 0.1,
    normalMap: bricksNormalTexture,
    roughnessMap: bricksRoughnessTexture,

  })
);

// uv2 attribute
const uv2attribute = new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2);
walls.geometry.setAttribute('uv2', uv2attribute);

walls.position.y = 2.5 / 2;
walls.castShadow = true;

export default walls;