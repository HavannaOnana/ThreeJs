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
    color:"biege"
});

//we are meshing it 
const mesh = new THREE.Mesh(geo,material);

scene.add(mesh);

// we adding the function animate
function animate(t = 0){
    requestAnimationFrame(animate);
    mesh.scale.setScalar(Math.cos(t * 0.001) + 1.0);
    renderer.render(scene,camera);
}

animate();