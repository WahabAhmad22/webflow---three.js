import './styles/style.css'

import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three'


// Create the Scene
const scene = new THREE.Scene();

// Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
    width : window.innerWidth,
    height : window.innerHeight,
}

window.addEventListener("resize" , () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    renderer.setSize(sizes.width, sizes.height);
    camera.updateProjectionMatrix();
})

// Camera
const camera = new THREE.PerspectiveCamera(75 , sizes.width / sizes.height);
camera.position.z = 5;
scene.add(camera);


// Renderer\
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({
    canvas : canvas
});

renderer.setSize(sizes.width, sizes.height);

// Controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.autoRotate = true;
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Animate

function animate(){
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    controls.update()
    renderer.render(scene , camera);
}


animate();
