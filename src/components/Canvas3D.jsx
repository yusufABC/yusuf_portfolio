'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function Canvas3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // === Avatar mesh (icosahedron for futuristic look) ===
    const avatarGeo = new THREE.IcosahedronGeometry(0.9, 1);
    const avatarMat = new THREE.MeshPhongMaterial({
      color: 0x00d4ff,
      emissive: 0x002244,
      shininess: 100,
      wireframe: false,
      transparent: true,
      opacity: 0.9,
    });
    const avatar = new THREE.Mesh(avatarGeo, avatarMat);
    scene.add(avatar);

    // Wireframe overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireframe = new THREE.Mesh(avatarGeo.clone(), wireMat);
    wireframe.scale.setScalar(1.01);
    scene.add(wireframe);

    // === Glowing ring ===
    const ringGeo = new THREE.TorusGeometry(1.35, 0.025, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00d4ff });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    scene.add(ring);

    // Outer purple ring
    const ring2Geo = new THREE.TorusGeometry(1.55, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xb400ff });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 4;
    scene.add(ring2);

    // === Orbiting particles ===
    const particleCount = 120;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.8 + Math.random() * 0.5;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0x00d4ff,
      size: 0.025,
      transparent: true,
      opacity: 0.8,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // === Lighting ===
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x00d4ff, 3, 10);
    blueLight.position.set(2, 2, 2);
    scene.add(blueLight);

    const purpleLight = new THREE.PointLight(0xb400ff, 2, 10);
    purpleLight.position.set(-2, -1, 1);
    scene.add(purpleLight);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    mount.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Float animation
      avatar.position.y = Math.sin(elapsed * 0.8) * 0.1;
      wireframe.position.y = avatar.position.y;

      // Rotation
      avatar.rotation.y = elapsed * 0.4 + mouseX * 0.3;
      avatar.rotation.x = mouseY * 0.2;
      wireframe.rotation.y = avatar.rotation.y;
      wireframe.rotation.x = avatar.rotation.x;

      // Ring rotations
      ring.rotation.z = elapsed * 0.3;
      ring.rotation.x = Math.sin(elapsed * 0.2) * 0.3;
      ring2.rotation.y = elapsed * 0.5;
      ring2.rotation.z = elapsed * 0.2;

      // Particle rotation
      particles.rotation.y = elapsed * 0.1;
      particles.rotation.x = elapsed * 0.05;

      // Light animation
      blueLight.intensity = 2.5 + Math.sin(elapsed * 2) * 0.8;
      purpleLight.intensity = 1.5 + Math.cos(elapsed * 1.5) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      mount.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{ minHeight: '400px' }}
    />
  );
}
