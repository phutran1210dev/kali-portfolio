import { animate, createTimeline } from "animejs";
import type { AnimationParams, TargetsParam, TimelineParams } from "animejs";

// Animation presets for consistent animations
export const animations = {
  fadeInUp: {
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 800,
    ease: "outExpo",
  },
  fadeInDown: {
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 800,
    ease: "outExpo",
  },
  fadeInLeft: {
    translateX: [-50, 0],
    opacity: [0, 1],
    duration: 800,
    ease: "outExpo",
  },
  fadeInRight: {
    translateX: [50, 0],
    opacity: [0, 1],
    duration: 800,
    ease: "outExpo",
  },
  scaleIn: {
    scale: [0, 1],
    opacity: [0, 1],
    duration: 600,
    ease: "outBack",
  },
  slideInLeft: {
    translateX: [-100, 0],
    opacity: [0, 1],
    duration: 1000,
    ease: "outExpo",
  },
  slideInRight: {
    translateX: [100, 0],
    opacity: [0, 1],
    duration: 1000,
    ease: "outExpo",
  },
  typewriter: {
    opacity: [0, 1],
    duration: 50,
    ease: "linear",
  },
  glitch: {
    translateX: [-2, 2, -2, 0],
    duration: 200,
    ease: "linear",
  },
  pulse: {
    scale: [1, 1.05, 1],
    duration: 1000,
    ease: "inOutSine",
    loop: true,
  },
};

// Common stagger configurations
export const stagger = {
  fast: 50,
  normal: 100,
  slow: 200,
};

// Utility functions
export const timeline = (options?: TimelineParams) => {
  return createTimeline(options);
};

export const animateElement = (
  targets: TargetsParam,
  params: AnimationParams
) => {
  return animate(targets, params);
};

// Matrix rain effect for hacker aesthetic
export const matrixRain = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()";
  const matrixArray = matrix.split("");

  const fontSize = 10;
  const columns = canvas.width / fontSize;

  const drops: number[] = [];
  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }

  const draw = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  };

  return setInterval(draw, 35);
};

// Export the animate function as default for convenience
export { animate as default };