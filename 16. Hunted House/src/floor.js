import * as THREE from 'three'
import {
  grassColorTexture,
  grassAmbientOcclusionTexture,
  grassNormalTexture,
  grassRoughnessTexture,
  } from './textures'


grassColorTexture.repeat.set(8, 8);
grassAmbientOcclusionTexture.repeat.set(8, 8);
grassNormalTexture.repeat.set(8, 8);
grassRoughnessTexture.repeat.set(8, 8);

grassColorTexture.wrapS = THREE.RepeatWrapping;
grassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;
grassNormalTexture.wrapS = THREE.RepeatWrapping;
grassRoughnessTexture.wrapS = THREE.RepeatWrapping;

grassColorTexture.wrapT = THREE.RepeatWrapping;
grassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping;
grassNormalTexture.wrapT = THREE.RepeatWrapping;
grassRoughnessTexture.wrapT = THREE.RepeatWrapping;


  // Floor
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial({
    map: grassColorTexture,
    aoMap: grassAmbientOcclusionTexture, // needs uv2 attribute
    displacementScale: 0.1,
    normalMap: grassNormalTexture,
    roughnessMap: grassRoughnessTexture,
  })
)

// uv2 attribute
const uv2attribute = new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array, 2);
floor.geometry.setAttribute('uv2', uv2attribute);


floor.rotation.x = - Math.PI * 0.5
floor.position.y = 0
floor.receiveShadow = true;

export default floor;