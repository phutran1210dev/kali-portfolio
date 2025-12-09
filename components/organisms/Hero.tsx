"use client";

import { useEffect, useState, useRef } from "react";
import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { Icon } from "@/components/atoms/Icon";
import { Download, ChevronDown } from "lucide-react";
import { animateElement, animations } from "@/lib/anime";
import * as THREE from "three";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = [
    "Full-Stack Developer",
    "Space Explorer",
    "Digital Creator",
  ];

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentIndex];
    let timeoutId: NodeJS.Timeout;

    if (displayText.length < currentRole.length) {
      timeoutId = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 100);
    } else {
      timeoutId = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, currentIndex, roles]);

  // Three.js Starfield effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Setup scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create starfield
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 3000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    // Cosmic color palette
    const colorPalette = [
      new THREE.Color(0x9333ea), // Purple
      new THREE.Color(0xec4899), // Pink
      new THREE.Color(0x3b82f6), // Blue
      new THREE.Color(0xa855f7), // Light purple
      new THREE.Color(0xfbbf24), // Amber/Yellow
    ];

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      
      // Random position in sphere
      const radius = Math.random() * 50 + 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi) - 30;

      // Random color from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // Random size
      sizes[i] = Math.random() * 2 + 0.5;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Star material
    const starMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Add nebula particles
    const nebulaGeometry = new THREE.BufferGeometry();
    const nebulaCount = 500;
    const nebulaPositions = new Float32Array(nebulaCount * 3);
    const nebulaColors = new Float32Array(nebulaCount * 3);

    for (let i = 0; i < nebulaCount; i++) {
      const i3 = i * 3;
      nebulaPositions[i3] = (Math.random() - 0.5) * 100;
      nebulaPositions[i3 + 1] = (Math.random() - 0.5) * 100;
      nebulaPositions[i3 + 2] = (Math.random() - 0.5) * 50 - 20;

      const nebulaColor = new THREE.Color(0x9333ea).lerp(new THREE.Color(0xec4899), Math.random());
      nebulaColors[i3] = nebulaColor.r;
      nebulaColors[i3 + 1] = nebulaColor.g;
      nebulaColors[i3 + 2] = nebulaColor.b;
    }

    nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(nebulaPositions, 3));
    nebulaGeometry.setAttribute('color', new THREE.BufferAttribute(nebulaColors, 3));

    const nebulaMaterial = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });

    const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);

    // Animation
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate stars slowly
      stars.rotation.y += 0.0002;
      stars.rotation.x += 0.0001;
      
      // Rotate nebula
      nebula.rotation.y -= 0.0001;
      nebula.rotation.x -= 0.00005;

      // Mouse parallax effect
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      nebulaGeometry.dispose();
      nebulaMaterial.dispose();
    };
  }, []);

  // Animate on mount
  useEffect(() => {
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll(".animate-on-mount");

      animateElement(elements, {
        ...animations.fadeInUp,
        delay: (el, i) => i * 200,
      });
    }
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Three.js Starfield Background */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Cosmic Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-purple-900/20 via-transparent to-pink-900/20" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/50 to-black" />

      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Cosmic greeting */}
          <div className="animate-on-mount">
            <Typography variant="code" className="text-purple-400 mb-4">
              $ echo "Welcome to the cosmic realm"
            </Typography>
          </div>

          {/* Name with cosmic glow */}
          <div className="animate-on-mount">
            <Typography
              variant="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono mb-4"
            >
              <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">Phú</span>{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-purple-600 drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]">
                Trần
              </span>
            </Typography>
          </div>

          {/* Dynamic Role with cosmic cursor */}
          <div className="animate-on-mount">
            <div className="h-16 flex items-center justify-center">
              <Typography
                variant="h2"
                className="text-xl md:text-3xl font-mono text-pink-300"
              >
                &gt; {displayText}
                <span className="animate-pulse text-purple-400">▊</span>
              </Typography>
            </div>
          </div>

          {/* Description with cosmic theme */}
          <div className="animate-on-mount">
            <Typography
              variant="lead"
              className="text-gray-300 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm"
            >
              Passionate full-stack developer with over 5+ years of experience in React, Next.js, and modern web technologies. 
              Creating exceptional digital experiences that transcend the ordinary, one pixel at a time.
            </Typography>
          </div>

          {/* CTA Buttons with cosmic styling */}
          <div className="animate-on-mount flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/cv/SE_PHUTRAN.pdf" 
              download="SE_PHUTRAN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="cosmic" size="lg" className="group">
                <Icon
                  icon={Download}
                  className="h-4 w-4 mr-2 group-hover:animate-bounce"
                />
                Download CV
              </Button>
            </a>

            <Button 
              variant="nebula" 
              size="lg"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              View Projects
            </Button>
          </div>

          {/* Social Links with cosmic variant */}
          <div className="animate-on-mount">
            <SocialLinks variant="cosmic" className="justify-center" />
          </div>
        </div>

        {/* Scroll Indicator with cosmic styling */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-on-mount">
          <div className="flex flex-col items-center space-y-2">
            <Typography variant="small" className="text-purple-400 font-mono">
              explore
            </Typography>
            <Icon
              icon={ChevronDown}
              variant="cosmic"
              className="h-6 w-6 animate-bounce"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
