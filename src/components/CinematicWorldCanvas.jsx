import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * CinematicWorldCanvas — 3D Dark Fantasy World Opening
 * Features:
 * - Sea of rolling clouds at dusk
 * - Distant gothic mountain castle perched on jagged black cliffs
 * - Blood-red eclipse glowing behind broken clouds
 * - 3D flying guardian owl soaring with articulated flapping wings toward the castle
 * - Atmospheric floating embers and volumetric fog
 * - Parallax mouse response and smooth camera flight into the castle gates
 */
const CinematicWorldCanvas = ({ isEntering = false, onFlightComplete, isMidnight = false }) => {
  const containerRef = useRef(null);
  const flightProgressRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // SCENE & CAMERA
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(isMidnight ? 0x05070c : 0x140d12, 0.04);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 1.8, 12);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      alpha: false,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(
      isMidnight ? 0x1b283d : 0x3d1c1a,
      1.8
    );
    scene.add(ambientLight);

    // Blood Eclipse directional rim light
    const eclipseLight = new THREE.DirectionalLight(
      isMidnight ? 0x739be6 : 0xd63031,
      4.0
    );
    eclipseLight.position.set(0, 8, -25);
    scene.add(eclipseLight);

    // Soft moon/sky fill
    const skyFill = new THREE.DirectionalLight(0xdfe6e9, 1.5);
    skyFill.position.set(5, 10, 8);
    scene.add(skyFill);

    // ==========================================
    // 1. BLOOD ECLIPSE & CELESTIAL CORONA
    // ==========================================
    const eclipseGroup = new THREE.Group();
    eclipseGroup.position.set(0, 5.5, -35);

    // Dark core disc
    const eclipseCoreGeo = new THREE.CircleGeometry(4.2, 48);
    const eclipseCoreMat = new THREE.MeshBasicMaterial({
      color: isMidnight ? 0x070b14 : 0x0a0507,
    });
    const eclipseCore = new THREE.Mesh(eclipseCoreGeo, eclipseCoreMat);
    eclipseGroup.add(eclipseCore);

    // Outer glowing crimson corona ring
    const coronaGeo = new THREE.RingGeometry(4.2, 7.5, 48);
    const coronaMat = new THREE.MeshBasicMaterial({
      color: isMidnight ? 0x4d7cd6 : 0xc0392b,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    const coronaMesh = new THREE.Mesh(coronaGeo, coronaMat);
    eclipseGroup.add(coronaMesh);

    // Subtle second outer ethereal flare ring
    const outerFlareGeo = new THREE.RingGeometry(7.0, 12.0, 48);
    const outerFlareMat = new THREE.MeshBasicMaterial({
      color: isMidnight ? 0x24427a : 0x801e19,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const outerFlare = new THREE.Mesh(outerFlareGeo, outerFlareMat);
    eclipseGroup.add(outerFlare);

    scene.add(eclipseGroup);

    // ==========================================
    // 2. DISTANT GOTHIC MOUNTAIN CASTLE
    // ==========================================
    const castleGroup = new THREE.Group();
    castleGroup.position.set(0, 0.5, -28);

    const stoneMat = new THREE.MeshStandardMaterial({
      color: isMidnight ? 0x090d16 : 0x140e10,
      roughness: 0.9,
      metalness: 0.1,
      flatShading: true,
    });

    const roofMat = new THREE.MeshStandardMaterial({
      color: isMidnight ? 0x060910 : 0x0c0709,
      roughness: 0.8,
      flatShading: true,
    });

    const torchMat = new THREE.MeshBasicMaterial({
      color: isMidnight ? 0x70a1ff : 0xff4757,
    });

    // Jagged mountain base
    const mountainGeo = new THREE.ConeGeometry(9.5, 7.0, 7);
    const mountain = new THREE.Mesh(mountainGeo, stoneMat);
    mountain.position.y = -2.5;
    castleGroup.add(mountain);

    // Left and right cliffs
    const leftCliff = new THREE.Mesh(new THREE.ConeGeometry(6.0, 5.5, 6), stoneMat);
    leftCliff.position.set(-6.5, -2.8, -2);
    castleGroup.add(leftCliff);

    const rightCliff = new THREE.Mesh(new THREE.ConeGeometry(6.5, 6.0, 6), stoneMat);
    rightCliff.position.set(6.8, -2.6, -2);
    castleGroup.add(rightCliff);

    // Castle Main Keep
    const mainKeep = new THREE.Mesh(new THREE.BoxGeometry(4.2, 3.2, 2.5), stoneMat);
    mainKeep.position.set(0, 1.2, 0);
    castleGroup.add(mainKeep);

    // Central Tower & Spire
    const centerTower = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.9, 4.2, 8), stoneMat);
    centerTower.position.set(0, 3.2, 0);
    castleGroup.add(centerTower);

    const centerSpire = new THREE.Mesh(new THREE.ConeGeometry(0.9, 2.6, 8), roofMat);
    centerSpire.position.set(0, 6.2, 0);
    castleGroup.add(centerSpire);

    // Flanking Gothic Towers
    for (let side of [-1, 1]) {
      const sideTower = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.75, 3.5, 8), stoneMat);
      sideTower.position.set(side * 2.3, 2.5, 0.4);
      castleGroup.add(sideTower);

      const sideSpire = new THREE.Mesh(new THREE.ConeGeometry(0.75, 2.0, 8), roofMat);
      sideSpire.position.set(side * 2.3, 4.8, 0.4);
      castleGroup.add(sideSpire);

      // Gate Torches / Crimson Braziers
      const torch = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 6), torchMat);
      torch.position.set(side * 1.1, 0.4, 1.3);
      castleGroup.add(torch);
    }

    scene.add(castleGroup);

    // ==========================================
    // 3. ENORMOUS SEA OF ROLLING CLOUDS
    // ==========================================
    const cloudsGroup = new THREE.Group();
    cloudsGroup.position.set(0, -1.8, 0);

    const cloudMaterial = new THREE.MeshStandardMaterial({
      color: isMidnight ? 0x161e2e : 0x3d2b28,
      roughness: 1.0,
      transparent: true,
      opacity: 0.88,
      flatShading: true,
    });

    const cloudPuffs = [];
    // Generate billowed cloud clusters across depth
    for (let i = 0; i < 65; i++) {
      const puffGeo = new THREE.SphereGeometry(
        THREE.MathUtils.randFloat(1.5, 3.8),
        7,
        5
      );
      puffGeo.scale(1.8, 0.5, 1.2);
      const puff = new THREE.Mesh(puffGeo, cloudMaterial);
      puff.position.set(
        THREE.MathUtils.randFloatSpread(36),
        THREE.MathUtils.randFloat(-1.2, 0.4),
        THREE.MathUtils.randFloat(-24, 6)
      );
      puff.userData = {
        speed: THREE.MathUtils.randFloat(0.003, 0.009),
        baseX: puff.position.x,
        seed: Math.random() * 100,
      };
      cloudsGroup.add(puff);
      cloudPuffs.push(puff);
    }
    scene.add(cloudsGroup);

    // ==========================================
    // 4. 3D FLYING GUARDIAN OWL
    // ==========================================
    const flyingOwlGroup = new THREE.Group();
    flyingOwlGroup.position.set(-4.5, 2.2, 4.5);
    flyingOwlGroup.scale.set(0.65, 0.65, 0.65);

    const owlFeatherMat = new THREE.MeshStandardMaterial({
      color: isMidnight ? 0x212b40 : 0x2e1c17,
      roughness: 0.7,
      flatShading: true,
    });

    const owlWingMat = new THREE.MeshStandardMaterial({
      color: isMidnight ? 0x2e3c59 : 0x452922,
      roughness: 0.6,
      flatShading: true,
    });

    const owlEyeMat = new THREE.MeshBasicMaterial({
      color: isMidnight ? 0x70a1ff : 0xf39c12,
    });

    // Body
    const owlBody = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1.1, 7), owlFeatherMat);
    owlBody.rotation.x = Math.PI / 2.3;
    flyingOwlGroup.add(owlBody);

    // Head
    const owlHead = new THREE.Mesh(new THREE.SphereGeometry(0.26, 8, 6), owlFeatherMat);
    owlHead.position.set(0, 0.22, 0.55);
    flyingOwlGroup.add(owlHead);

    // Eyes
    for (let side of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.055, 6, 6), owlEyeMat);
      eye.position.set(side * 0.12, 0.28, 0.75);
      flyingOwlGroup.add(eye);
    }

    // Wings (Articulated for realistic flight flapping)
    const leftWingGroup = new THREE.Group();
    leftWingGroup.position.set(-0.25, 0.15, 0.2);
    const leftWingMesh = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.05, 0.6), owlWingMat);
    leftWingMesh.position.set(-0.75, 0, 0);
    leftWingGroup.add(leftWingMesh);
    flyingOwlGroup.add(leftWingGroup);

    const rightWingGroup = new THREE.Group();
    rightWingGroup.position.set(0.25, 0.15, 0.2);
    const rightWingMesh = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.05, 0.6), owlWingMat);
    rightWingMesh.position.set(0.75, 0, 0);
    rightWingGroup.add(rightWingMesh);
    flyingOwlGroup.add(rightWingGroup);

    scene.add(flyingOwlGroup);

    // ==========================================
    // 5. FLOATING CRIMSON EMBERS & DUST MOTES
    // ==========================================
    const emberCount = 120;
    const emberGeo = new THREE.BufferGeometry();
    const emberPositions = new Float32Array(emberCount * 3);
    for (let i = 0; i < emberCount * 3; i += 3) {
      emberPositions[i] = THREE.MathUtils.randFloatSpread(25);
      emberPositions[i + 1] = THREE.MathUtils.randFloat(-2, 8);
      emberPositions[i + 2] = THREE.MathUtils.randFloat(-20, 10);
    }
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3));

    const emberMat = new THREE.PointsMaterial({
      color: isMidnight ? 0x70a1ff : 0xff4757,
      size: 0.08,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const embers = new THREE.Points(emberGeo, emberMat);
    scene.add(embers);

    // ==========================================
    // MOUSE PARALLAX & ANIMATION
    // ==========================================
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // RESIZE
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // ANIMATION LOOP
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const delta = clock.getDelta();

      // Mouse parallax smooth damp
      mouse.x = THREE.MathUtils.lerp(mouse.x, mouse.targetX, 0.04);
      mouse.y = THREE.MathUtils.lerp(mouse.y, mouse.targetY, 0.04);

      // Camera base parallax
      if (!isEntering) {
        camera.position.x = mouse.x * 0.9;
        camera.position.y = 1.8 + mouse.y * 0.45;
        camera.lookAt(0, 2.0 + mouse.y * 0.2, -28);
      } else {
        // SMOOTH CAMERA FLIGHT TOWARDS THE CASTLE
        flightProgressRef.current = THREE.MathUtils.lerp(
          flightProgressRef.current,
          1.0,
          0.035
        );
        const p = flightProgressRef.current;
        camera.position.z = THREE.MathUtils.lerp(12, -18, p);
        camera.position.y = THREE.MathUtils.lerp(1.8, 1.2, p);
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, 0, 0.05);
        camera.lookAt(0, 1.5, -28);

        // Thicken fog during entrance
        scene.fog.density = 0.04 + p * 0.12;

        if (p >= 0.96 && onFlightComplete) {
          onFlightComplete();
        }
      }

      // 1. Cloud drifting waves
      for (let p of cloudPuffs) {
        p.position.x -= p.userData.speed;
        p.position.y += Math.sin(elapsed * 0.8 + p.userData.seed) * 0.002;
        if (p.position.x < -18) {
          p.position.x = 18;
        }
      }

      // 2. Flying Owl Animation & trajectory
      const flap = Math.sin(elapsed * 6.5) * 0.42;
      leftWingGroup.rotation.z = flap;
      rightWingGroup.rotation.z = -flap;

      // Owl arcs across the sky towards the distant castle
      const owlProgress = (elapsed * 0.12) % (Math.PI * 2);
      flyingOwlGroup.position.x = Math.sin(owlProgress) * 7.5;
      flyingOwlGroup.position.y = 2.4 + Math.cos(owlProgress * 2) * 0.6;
      flyingOwlGroup.position.z = 2.0 - Math.sin(owlProgress * 0.5) * 14;
      flyingOwlGroup.rotation.y = -Math.cos(owlProgress) * 0.5 - 0.4;
      flyingOwlGroup.rotation.z = -Math.cos(elapsed * 6.5) * 0.08;

      // 3. Corona subtle pulse
      coronaMesh.scale.setScalar(1 + Math.sin(elapsed * 1.5) * 0.035);
      outerFlare.scale.setScalar(1 + Math.cos(elapsed * 1.1) * 0.04);

      // 4. Embers drifting upwards
      const pos = emberGeo.attributes.position.array;
      for (let i = 1; i < emberCount * 3; i += 3) {
        pos[i] += 0.02;
        if (pos[i] > 8) pos[i] = -2;
      }
      emberGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, [isEntering, isMidnight, onFlightComplete]);

  return (
    <div
      ref={containerRef}
      className="cinematic-world-canvas-container"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-label="3D Cinematic Sky Realm and Mountain Castle"
    />
  );
};

export default CinematicWorldCanvas;
