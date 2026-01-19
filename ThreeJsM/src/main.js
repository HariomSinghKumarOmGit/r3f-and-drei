import * as THREE from 'three';

const canvas = document.getElementById('canvas');
if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error('Canvas not found or wrong type');
}

// 1. create the scene
const scene = new THREE.Scene();

scene.background = new THREE.Color('#f0f0f0');

// 2. Add the camera

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 , 1000);
camera.position.z = 5;

// 3. Add object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x468585, emissive: 0x468585 })
const dodecahedron = new THREE.Mesh(geometry, material);


const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2)
const boxMaterial = new THREE.MeshBasicMaterial({ color: '#B4B4B3' });
const box = new THREE.Mesh(boxGeometry, boxMaterial );
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// 4. Lights
const light = new THREE.SpotLight(0x006769, 1)
light.position.set(1,1,1);
scene.add(light);

// 5. Renderer

const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);
