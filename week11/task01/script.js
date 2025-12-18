import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.162.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.162.0/examples/jsm/controls/OrbitControls.js';

// Scene & Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0, 3, 6);
camera.lookAt(0,0,0);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // low GPU load
document.body.appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Floor
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshBasicMaterial({ color: 0x111111 })
);
floor.rotation.x = -Math.PI/2;
scene.add(floor);

// Neon Cube
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(2,2,2),
  new THREE.MeshBasicMaterial({ color: 0xff00ff })
);
scene.add(cube);

// Neon Lights
const colors = [0xff00ff, 0x00ffff];
const lights = [];
for (let i=0; i<2; i++) {
  const light = new THREE.PointLight(colors[i], 1.5, 10);
  light.position.set(Math.random()*6-3, 3, Math.random()*6-3);
  scene.add(light);
  lights.push(light);
}

// Animate
function animate(time) {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Pulsing and moving lights
  lights.forEach((light, i) => {
    light.position.x = Math.sin(time*0.001 + i) * 3;
    light.position.z = Math.cos(time*0.001 + i) * 3;
    light.intensity = Math.sin(time*0.01 + i) + 1.5;
  });

  controls.update();
  renderer.render(scene, camera);
}

animate();

// Handle resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
