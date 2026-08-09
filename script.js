// إعداد المشهد والكاميرا
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb); // لون السماء

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// إضاءة المشهد
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 7.5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

// إنشاء مكعب أرضي (Block)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial({ color: 0x55aa55 });

for (let x = -5; x <= 5; x++) {
  for (let z = -5; z <= 5; z++) {
    const block = new THREE.Mesh(geometry, material);
    block.position.set(x, 0, z);
    scene.add(block);
  }
}

camera.position.set(0, 2, 5);

// التحكم بالحركة (WASD)
const keys = {};
document.addEventListener('keydown', (e) => keys[e.code] = true);
document.addEventListener('keyup', (e) => keys[e.code] = false);

function animate() {
  requestAnimationFrame(animate);

  const speed = 0.1;
  if (keys['KeyW']) camera.translateZ(-speed);
  if (keys['KeyS']) camera.translateZ(speed);
  if (keys['KeyA']) camera.translateX(-speed);
  if (keys['KeyD']) camera.translateX(speed);

  renderer.render(scene, camera);
}

animate();
  
