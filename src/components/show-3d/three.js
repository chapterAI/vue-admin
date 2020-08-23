// import * as THREE from "three";


// const width = 800;
// const height = 500;
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({
//     alpha: true,
// });
// const mesh = new THREE.Mesh();
// export function init() {
//     updateScene()
//     renderScene()
// }

// function updateScene() {
//     /** addMesh */
//     const geometry = new THREE.BoxGeometry(1, 1, 1);
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     mesh.geometry = geometry;
//     mesh.material = material;
//     scene.add(mesh);    
//     /** setCamera */
//     camera.position.z = 5;
// }

// function renderScene() {
//     renderer.setSize(width, height);
//     document.getElementById('THREEJS').appendChild(renderer.domElement)
    
//     console.log(scene)
//     const mesh = scene.children[0]
//     function render() {
//         mesh.rotation.x += 0.1;
//         mesh.rotation.y += 0.1;
//         requestAnimationFrame(render);
//         renderer.render(scene, camera);
//     }
//     render();
// }

// function destroyScene() {
    
}