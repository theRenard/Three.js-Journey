import * as THREE from 'three'
import {
  doorColorTexture,
  doorAlphaTexture,
  doorAmbientOcclusionTexture,
  doorHeightTexture,
  doorNormalTexture,
  doorMetalnessTexture,
  doorRoughnessTexture,
} from '../textures'

const door = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(2.2, 2.2, 100, 100),
  new THREE.MeshStandardMaterial({
    map: doorColorTexture,
    alphaMap: doorAlphaTexture, // needs transparent: true
    transparent: true,
    aoMap: doorAmbientOcclusionTexture, // needs uv2 attribute
    displacementMap: doorHeightTexture, // needs some vertices
    displacementScale: 0.1,
    normalMap: doorNormalTexture,
    metalnessMap: doorMetalnessTexture,
    roughnessMap: doorRoughnessTexture,
  })
)
// uv2 attribute
const uv2attribute = new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2);
door.geometry.setAttribute('uv2', uv2attribute);

door.position.z = 2.01;
door.position.y = 1;

export default door;