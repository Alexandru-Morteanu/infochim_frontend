import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Test() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Crearea scenei 3D
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Crearea camerei 3D
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Crearea rendererului 3D
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Adaugarea sferei principale
    const mainSphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const mainSphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const mainSphere = new THREE.Mesh(mainSphereGeometry, mainSphereMaterial);
    scene.add(mainSphere);

    // Adaugarea celor doua sfere mici
    const smallSphereGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    const smallSphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const smallSphere1 = new THREE.Mesh(smallSphereGeometry, smallSphereMaterial);
    mainSphere.add(smallSphere1);
    smallSphere1.position.copy(new THREE.Vector3(1, -0.5, 0));

    const smallSphere2 = new THREE.Mesh(smallSphereGeometry, smallSphereMaterial);
    mainSphere.add(smallSphere2);
    smallSphere2.position.copy(new THREE.Vector3(-1, -0.5, 0));

    // Adaugarea controlului de rotatie
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 1;
    controls.maxDistance = 50;
    controls.maxPolarAngle = Math.PI / 2;

    // Functia de animatie
    const animate = () => {
      requestAnimationFrame(animate);

      mainSphere.rotation.y += 0.01;
      smallSphere1.rotation.y += 0.05;
      smallSphere2.rotation.y += 0.05;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
}

export default Test;
