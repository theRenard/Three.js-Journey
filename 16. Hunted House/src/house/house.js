import * as THREE from 'three'
import walls from './walls'
import door from './door'
import roof from './roof'
import graves from './graves'
import { bush1, bush2, bush3, bush4 } from './bushes'

const house = new THREE.Group();

house.add(walls, roof, door, bush1, bush2, bush3, bush4, graves);

export default house;