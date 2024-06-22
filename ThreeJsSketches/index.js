import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

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
const geo = new THREE.IcosahedronGeometry(1,12);

//creating a new loader
const loader = new THREE.TextureLoader();

//adding a new material
const material = new THREE.MeshStandardMaterial({
    map : loader.load("./textures/earth.jpg")
});


//we are meshing it 
const earthMesh = new THREE.Mesh(geo,material);

scene.add(earthMesh);
//making a new light hemilight
const light = new THREE.HemisphereLight();
scene.add(light);




// adding the orbitcontrols camera
const controls = new OrbitControls(camera,renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.02;



// we adding the function animate
function animate( t= 0){
    requestAnimationFrame(animate);
    earthMesh.rotation.y = t * 0.0001;
    renderer.render(scene,camera);
    controls.update();
}

animate();