import * as THREE from "three";

// making a renderer
const renderer= new THREE.WebGLRenderer({antialias : true});
//setting the width and height
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

let fov = 75;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 10;

//setting the camera
const camera = new THREE.PerspectiveCamera(fov,aspect,near,far);

camera.position.z = 2;

//setting the scene
const scene = new THREE.Scene()


// adding some goe 
const geo = new THREE.IcosahedronGeometry(1.0,2);

//adding a new material
const material = new THREE.MeshBasicMaterial({
    color:"red"
});

//we are meshing it 
const mesh = new THREE.Mesh(geo,material);

scene.add(mesh);


renderer.render(scene,camera);