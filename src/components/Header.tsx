import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const Header: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let composer: EffectComposer;
    let controls: OrbitControls;
    let sphere: THREE.Mesh;
    let particleSystem: THREE.Points;

    try {
      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0, 5);

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      mountRef.current.appendChild(renderer.domElement);

      // Background texture
      const textureLoader = new THREE.TextureLoader();
      const backgroundTexture = textureLoader.load('https://firebasestorage.googleapis.com/v0/b/openavatar2.appspot.com/o/images%2Fgalaxy-wallpaper-warm-colors.jpg?alt=media&token=eef82230-aaed-419b-b76a-e863206c0606');
      scene.background = backgroundTexture;

      // Post-processing
      composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      composer.addPass(renderPass);

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5,
        0.4,
        0.85
      );
      composer.addPass(bloomPass);

      // Controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.rotateSpeed = 0.5;

      // Central interactive sphere
      const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);
      const sphereTexture = textureLoader.load('https://firebasestorage.googleapis.com/v0/b/openavatar2.appspot.com/o/images%2F5415251564243.jpg?alt=media&token=9806f172-8d07-4329-96a0-93500c1cf192');
      const sphereMaterial = new THREE.MeshStandardMaterial({
        map: sphereTexture,
        metalness: 0.7,
        roughness: 0.3,
        emissive: new THREE.Color(0x1a237e),
        emissiveIntensity: 0.2
      });
      sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      scene.add(sphere);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0x3f51b5, 1);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      // Particle system for star effect
      const particlesGeometry = new THREE.BufferGeometry();
      const particleCount = 5000;

      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

        colors[i * 3] = Math.random();
        colors[i * 3 + 1] = Math.random();
        colors[i * 3 + 2] = Math.random();
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.01,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true
      });

      particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particleSystem);

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        if (particleSystem) particleSystem.rotation.y += 0.0002;
        if (sphere) sphere.rotation.y += 0.001;
        composer.render();
      };

      animate();

      // Hover effect
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      const onMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(sphere);

        if (intersects.length > 0) {
          setIsHovering(true);
          document.body.style.cursor = 'pointer';
          if (sphere.material instanceof THREE.MeshStandardMaterial) {
            sphere.material.emissiveIntensity = 0.5;
          }
        } else {
          setIsHovering(false);
          document.body.style.cursor = 'default';
          if (sphere.material instanceof THREE.MeshStandardMaterial) {
            sphere.material.emissiveIntensity = 0.2;
          }
        }
      };

      window.addEventListener('mousemove', onMouseMove);

      // Click event
      const onClick = (event: MouseEvent) => {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(sphere);

        if (intersects.length > 0) {
          window.location.href = 'https://app.digiternity.ai/invite';
        }
      };

      window.addEventListener('click', onClick);

      // Responsive design
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('click', onClick);
        window.removeEventListener('resize', handleResize);
        if (mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
      };
    } catch (err) {
      console.error('Error in 3D setup:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="relative h-screen overflow-hidden">
      <div ref={mountRef} className="absolute inset-0" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
        <h1 className="text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
          Create 3D Digital Avatars
        </h1>
        <p className="text-3xl text-white mb-12 max-w-2xl drop-shadow-md">
          Immerse Yourself in the Future of Digital Interaction
        </p>
        {isHovering && (
          <p className="text-4xl font-bold text-white animate-pulse">
            Click to Start
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;