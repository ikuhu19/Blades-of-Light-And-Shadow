import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Ancient Guardian Owl — 3D WebGL Model
 * A mysterious, observant watcher with realistic micro-movements,
 * smooth cursor tracking, breathing, random blinking, and theme-reactive magical gaze.
 */
const OwlCanvas = ({ isMidnight = false, isCurious = false, className = '' }) => {
  const containerRef = useRef(null);
  const stateRef = useRef({
    targetRotY: 0,
    targetRotX: 0,
    currentRotY: 0,
    currentRotX: 0,
    targetTiltZ: 0,
    currentTiltZ: 0,
    blinkProgress: 0,
    isBlinking: false,
    nextBlinkTime: 2.5,
    lastTime: 0,
    isVisible: true,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 280;

    // SCENE & CAMERA
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 3.2);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // LIGHTING SETUP
    const ambientLight = new THREE.AmbientLight(
      isMidnight ? 0x1a263d : 0x2b1e16,
      isMidnight ? 1.4 : 1.2
    );
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(
      isMidnight ? 0x9bc2ff : 0xf2d8a5,
      isMidnight ? 2.2 : 2.5
    );
    keyLight.position.set(2, 3, 3);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(
      isMidnight ? 0x5c85d6 : 0xa8874c,
      2.0
    );
    rimLight.position.set(-2.5, 2, -2);
    scene.add(rimLight);

    const eyeGlowLight = new THREE.PointLight(
      isMidnight ? 0x66a3ff : 0xffb732,
      1.5,
      2.5
    );
    eyeGlowLight.position.set(0, 0.8, 0.7);
    scene.add(eyeGlowLight);

    // ROOT GUARDIAN GROUP
    const guardianGroup = new THREE.Group();
    guardianGroup.position.set(0, -0.45, 0);
    scene.add(guardianGroup);

    // MATERIALS
    const featherDark = isMidnight ? 0x0f1422 : 0x1e1510;
    const featherMid = isMidnight ? 0x182033 : 0x2e1f18;
    const featherLight = isMidnight ? 0x2c3957 : 0x473227;
    const goldAccent = isMidnight ? 0x5c85d6 : 0xa8874c;
    const eyeColor = isMidnight ? 0x6bb5ff : 0xf5a623;

    const bodyMat = new THREE.MeshStandardMaterial({
      color: featherDark,
      roughness: 0.8,
      metalness: 0.1,
      flatShading: true,
    });

    const chestMat = new THREE.MeshStandardMaterial({
      color: featherMid,
      roughness: 0.75,
      metalness: 0.15,
      flatShading: true,
    });

    const wingMat = new THREE.MeshStandardMaterial({
      color: featherLight,
      roughness: 0.7,
      metalness: 0.15,
      flatShading: true,
    });

    const beakMat = new THREE.MeshStandardMaterial({
      color: 0x111113,
      roughness: 0.4,
      metalness: 0.3,
    });

    const eyeBaseMat = new THREE.MeshStandardMaterial({
      color: 0x07080b,
      roughness: 0.2,
      metalness: 0.5,
    });

    const irisMat = new THREE.MeshStandardMaterial({
      color: eyeColor,
      emissive: eyeColor,
      emissiveIntensity: 0.75,
      roughness: 0.2,
      metalness: 0.3,
    });

    const pupilMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
    });

    const runeStoneMat = new THREE.MeshStandardMaterial({
      color: isMidnight ? 0x111622 : 0x1a120e,
      roughness: 0.9,
      metalness: 0.1,
      flatShading: true,
    });

    const runeRingsMat = new THREE.MeshBasicMaterial({
      color: goldAccent,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });

    // 1. PERCH — Ancient Weathered Rune Pedestal
    const perchGeo = new THREE.CylinderGeometry(0.55, 0.7, 0.45, 8);
    const perch = new THREE.Mesh(perchGeo, runeStoneMat);
    perch.position.y = -0.22;
    guardianGroup.add(perch);

    const runeRingGeo = new THREE.TorusGeometry(0.57, 0.015, 6, 16);
    const runeRing = new THREE.Mesh(runeRingGeo, runeRingsMat);
    runeRing.rotation.x = Math.PI / 2;
    runeRing.position.y = -0.05;
    guardianGroup.add(runeRing);

    // TALONS
    for (let side of [-1, 1]) {
      const foot = new THREE.Group();
      foot.position.set(side * 0.18, -0.02, 0.22);
      for (let t = -1; t <= 1; t++) {
        const claw = new THREE.Mesh(
          new THREE.ConeGeometry(0.025, 0.1, 4),
          beakMat
        );
        claw.rotation.x = Math.PI / 2.2;
        claw.rotation.y = t * 0.2;
        claw.position.set(t * 0.04, 0, 0);
        foot.add(claw);
      }
      guardianGroup.add(foot);
    }

    // 2. TORSO (BREATHING BODY)
    const torsoGroup = new THREE.Group();
    torsoGroup.position.y = 0.25;
    guardianGroup.add(torsoGroup);

    const bodyGeo = new THREE.ConeGeometry(0.42, 0.85, 9);
    bodyGeo.rotateX(Math.PI);
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyMesh.position.y = 0.22;
    torsoGroup.add(bodyMesh);

    // Chest plumage shield
    const chestGeo = new THREE.CylinderGeometry(0.26, 0.36, 0.55, 7);
    const chestMesh = new THREE.Mesh(chestGeo, chestMat);
    chestMesh.position.set(0, 0.18, 0.1);
    chestMesh.rotation.x = 0.1;
    torsoGroup.add(chestMesh);

    // Left & Right Folded Wings
    for (let side of [-1, 1]) {
      const wingGroup = new THREE.Group();
      wingGroup.position.set(side * 0.32, 0.35, -0.02);

      const wingMain = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.22, 0.7, 5),
        wingMat
      );
      wingMain.position.y = -0.2;
      wingMain.rotation.z = side * 0.12;
      wingMain.rotation.x = -0.15;
      wingGroup.add(wingMain);

      // Feather layers
      for (let f = 0; f < 3; f++) {
        const feather = new THREE.Mesh(
          new THREE.ConeGeometry(0.06, 0.25, 4),
          chestMat
        );
        feather.position.set(side * 0.02, -0.38 - f * 0.08, -0.02);
        feather.rotation.z = side * (0.15 + f * 0.05);
        wingGroup.add(feather);
      }

      torsoGroup.add(wingGroup);
    }

    // 3. ARTICULATED HEAD (TRACKS CURSOR & BLINKS)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.72, 0.05);
    guardianGroup.add(headGroup);

    // Head base sphere/dome
    const headGeo = new THREE.SphereGeometry(0.32, 10, 8);
    const headMesh = new THREE.Mesh(headGeo, bodyMat);
    headGroup.add(headMesh);

    // Facial disc / mask
    const faceMaskGeo = new THREE.CylinderGeometry(0.3, 0.28, 0.08, 10);
    faceMaskGeo.rotateX(Math.PI / 2);
    const faceMask = new THREE.Mesh(faceMaskGeo, chestMat);
    faceMask.position.set(0, 0.02, 0.18);
    headGroup.add(faceMask);

    // Horned Ear Tufts (Signature ancient owl silhouette)
    for (let side of [-1, 1]) {
      const tuft = new THREE.Mesh(
        new THREE.ConeGeometry(0.07, 0.32, 4),
        bodyMat
      );
      tuft.position.set(side * 0.2, 0.32, -0.02);
      tuft.rotation.z = side * -0.35;
      tuft.rotation.x = -0.15;
      headGroup.add(tuft);
    }

    // Curved Hook Beak
    const beak = new THREE.Mesh(
      new THREE.ConeGeometry(0.055, 0.18, 5),
      beakMat
    );
    beak.position.set(0, -0.02, 0.32);
    beak.rotation.x = Math.PI / 2.3;
    headGroup.add(beak);

    // Eyes (Left & Right) with Eyelids for Blinking
    const leftEyelid = new THREE.Group();
    const rightEyelid = new THREE.Group();

    for (let side of [-1, 1]) {
      const eyeGroup = new THREE.Group();
      eyeGroup.position.set(side * 0.13, 0.06, 0.24);

      // Outer gold/sapphire ring socket
      const socket = new THREE.Mesh(
        new THREE.TorusGeometry(0.085, 0.015, 6, 12),
        new THREE.MeshStandardMaterial({
          color: goldAccent,
          metalness: 0.8,
          roughness: 0.3,
        })
      );
      eyeGroup.add(socket);

      // Eye eyeball sphere
      const eyeball = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 12, 10),
        eyeBaseMat
      );
      eyeGroup.add(eyeball);

      // Glowing Iris
      const iris = new THREE.Mesh(
        new THREE.CircleGeometry(0.065, 12),
        irisMat
      );
      iris.position.z = 0.078;
      eyeGroup.add(iris);

      // Deep Black Pupil
      const pupil = new THREE.Mesh(
        new THREE.CircleGeometry(0.038, 10),
        pupilMat
      );
      pupil.position.z = 0.079;
      eyeGroup.add(pupil);

      // Eyelid for organic blinking
      const eyelidGeo = new THREE.SphereGeometry(
        0.084,
        12,
        8,
        0,
        Math.PI * 2,
        0,
        Math.PI / 2
      );
      const eyelid = new THREE.Mesh(eyelidGeo, chestMat);
      eyelid.rotation.x = -Math.PI / 2;
      eyelid.position.set(0, 0, 0);

      const eyelidContainer = side === -1 ? leftEyelid : rightEyelid;
      eyelidContainer.position.set(side * 0.13, 0.06, 0.24);
      eyelidContainer.add(eyelid);
      headGroup.add(eyelidContainer);

      headGroup.add(eyeGroup);
    }

    // MOUSE POINTER TRACKING
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized coordinates relative to canvas center (-1 to 1)
      const nx = (e.clientX - centerX) / (window.innerWidth * 0.5);
      const ny = (e.clientY - centerY) / (window.innerHeight * 0.5);

      // Restrain head rotation bounds for natural owl mechanics
      stateRef.current.targetRotY = THREE.MathUtils.clamp(nx * 0.85, -0.9, 0.9);
      stateRef.current.targetRotX = THREE.MathUtils.clamp(-ny * 0.45, -0.4, 0.4);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // INTERSECTION OBSERVER (Performance: pause rendering when offscreen)
    const observer = new IntersectionObserver(
      ([entry]) => {
        stateRef.current.isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // RESIZE OBSERVER
    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth || 300;
      const nh = container.clientHeight || 280;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    // ANIMATION LOOP
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!stateRef.current.isVisible) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      const state = stateRef.current;

      // 1. Natural Breathing Motion (Chest & Torso scale subtly)
      const breath = Math.sin(elapsed * 1.8) * 0.025;
      torsoGroup.scale.set(1 + breath * 0.5, 1 + breath, 1 + breath * 0.8);

      // Subtle perch rune aura pulse
      runeRing.rotation.z = elapsed * 0.15;
      runeRingsMat.opacity = 0.3 + Math.sin(elapsed * 1.2) * 0.15;

      // 2. Smooth Head Tracking with damping
      // Inquisitive tilt if curious
      const targetTilt = isCurious ? 0.15 : Math.sin(elapsed * 0.8) * 0.03;
      state.currentTiltZ = THREE.MathUtils.lerp(
        state.currentTiltZ,
        targetTilt,
        delta * 3.5
      );

      // Micro head drift for living feel
      const microIdleY = Math.sin(elapsed * 0.5) * 0.04;
      const microIdleX = Math.cos(elapsed * 0.7) * 0.02;

      state.currentRotY = THREE.MathUtils.lerp(
        state.currentRotY,
        state.targetRotY + microIdleY,
        delta * 3.8
      );
      state.currentRotX = THREE.MathUtils.lerp(
        state.currentRotX,
        state.targetRotX + microIdleX,
        delta * 3.8
      );

      headGroup.rotation.y = state.currentRotY;
      headGroup.rotation.x = state.currentRotX;
      headGroup.rotation.z = state.currentTiltZ;

      // 3. Random Blinking Mechanism
      if (elapsed > state.nextBlinkTime && !state.isBlinking) {
        state.isBlinking = true;
        state.blinkProgress = 0;
      }

      if (state.isBlinking) {
        state.blinkProgress += delta * 7.5; // Fast blink
        if (state.blinkProgress >= Math.PI) {
          state.isBlinking = false;
          state.blinkProgress = 0;
          state.nextBlinkTime = elapsed + 3 + Math.random() * 5; // next blink in 3-8s
        }
        // Rotate eyelids down over the eye
        const blinkAmount = Math.sin(state.blinkProgress);
        leftEyelid.rotation.x = blinkAmount * 1.5;
        rightEyelid.rotation.x = blinkAmount * 1.5;
      } else {
        leftEyelid.rotation.x = 0;
        rightEyelid.rotation.x = 0;
      }

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      ro.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, [isMidnight, isCurious]);

  return (
    <div
      ref={containerRef}
      className={`owl-canvas-wrapper ${className}`}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '260px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
      aria-label="3D Guardian Owl of Blades of Light and Shadow"
    />
  );
};

export default OwlCanvas;
