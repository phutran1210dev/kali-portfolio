"use client";

import { useEffect, useRef } from "react";
import { animateElement } from "@/lib/anime";
import Link from "next/link";

export default function NotFound() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentPath = 'unknown-page';



  // Matrix rain background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

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

      ctx.fillStyle = "#ff0000";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text =
          matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Terminal animation effect with warning style
  useEffect(() => {
    if (terminalRef.current) {
      const lines = terminalRef.current.querySelectorAll('.terminal-line');
      
      // Animate terminal lines with slide in from left and shake effect
      animateElement(lines, {
        translateX: [-100, 0],
        opacity: [0, 1],
        rotateX: [-15, 0],
        delay: (el, i) => i * 300,
        duration: 600,
        easing: 'easeOutBounce',
      });

      // Add warning shake effect after initial animation
      setTimeout(() => {
        if (terminalRef.current) {
          animateElement(terminalRef.current, {
            translateX: [-5, 5, -3, 3, 0],
            duration: 500,
            easing: 'easeInOutQuad',
          });
        }
      }, 2000);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Matrix Rain Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      />
      
      {/* Content */}
      <div className="w-full max-w-4xl mx-auto p-4 relative z-10">
        {/* Kali Linux Terminal */}
        <div className="bg-gray-900 rounded-lg border border-red-500/30 overflow-hidden">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between p-3 bg-red-950/30 border-b border-red-500/30">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400 shadow-lg shadow-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-lg shadow-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-500/50"></div>
            </div>
            <div className="text-xs font-mono font-semibold text-red-400">
              root@kali:~/portfolio [ERROR 404]
            </div>
          </div>

          {/* Terminal Content */}
          <div ref={terminalRef} className="p-6 space-y-2 font-mono text-sm bg-black min-h-[400px]">
            <div className="terminal-line flex items-center text-red-300">
              <span className="text-red-500">┌──(</span>
              <span className="font-bold text-red-400">root㉿kali</span>
              <span className="text-red-500">)-[</span>
              <span className="text-gray-200 font-semibold">~/portfolio</span>
              <span className="text-red-500">]</span>
            </div>
            
            <div className="terminal-line flex items-center text-red-300">
              <span className="text-red-500">└─</span>
              <span className="font-bold text-red-400">$ </span>
              <span className="text-gray-200">ls -la</span>
            </div>
            
            <div className="terminal-line text-gray-300">
              total 12
            </div>
            
            <div className="terminal-line text-blue-400">
              drwxr-xr-x 3 root root 4096 Nov 26 2025 .
            </div>
            
            <div className="terminal-line text-blue-400">
              drwxr-xr-x 5 root root 4096 Nov 26 2025 ..
            </div>
            
            <div className="terminal-line text-green-400">
              -rw-r--r-- 1 root root  256 Nov 26 2025 index.html
            </div>
            
            <div className="terminal-line text-green-300">
              <span className="text-red-400">┌──(</span>
              <span className="font-bold text-green-400">root㉿kali</span>
              <span className="text-red-400">)-[</span>
              <span className="text-gray-200 font-semibold">~/portfolio</span>
              <span className="text-red-400">]</span>
            </div>
            
            <div className="terminal-line flex items-center text-red-300">
              <span className="text-red-500">└─</span>
              <span className="font-bold text-red-400">$ </span>
              <span className="text-gray-200">cat {currentPath}</span>
            </div>
            
            <div className="terminal-line text-red-400 font-bold">
              cat: {currentPath}: No such file or directory
            </div>
            
            <div className="terminal-line text-green-300">
              <span className="text-red-400">┌──(</span>
              <span className="font-bold text-green-400">root㉿kali</span>
              <span className="text-red-400">)-[</span>
              <span className="text-gray-200 font-semibold">~/portfolio</span>
              <span className="text-red-400">]</span>
            </div>
            
            <div className="terminal-line flex items-center text-red-300">
              <span className="text-red-500">└─</span>
              <span className="font-bold text-red-400">$ </span>
              <span className="text-gray-200">find . -name &quot;*{currentPath}*&quot;</span>
            </div>
            
            <div className="terminal-line text-gray-500">
              {/* Empty result - no files found */}
            </div>
            
            <div className="terminal-line text-green-300">
              <span className="text-red-400">┌──(</span>
              <span className="font-bold text-green-400">root㉿kali</span>
              <span className="text-red-400">)-[</span>
              <span className="text-gray-200 font-semibold">~/portfolio</span>
              <span className="text-red-400">]</span>
            </div>
            
            <div className="terminal-line flex items-center text-red-300">
              <span className="text-red-500">└─</span>
              <span className="font-bold text-red-400">$ </span>
              <span className="text-gray-200">echo &quot;Page not found - returning to main directory&quot;</span>
            </div>
            
            <div className="terminal-line text-yellow-400">
              Page not found - returning to main directory
            </div>
            
            <div className="terminal-line text-red-300">
              <span className="text-red-500">┌──(</span>
              <span className="font-bold text-red-400">root㉿kali</span>
              <span className="text-red-500">)-[</span>
              <span className="text-gray-200 font-semibold">~/portfolio</span>
              <span className="text-red-500">]</span>
            </div>
            
            <div className="terminal-line flex items-center text-red-300">
              <span className="text-red-500">└─</span>
              <span className="font-bold text-red-400">$ </span>
              <span className="text-gray-200">whoami</span>
            </div>
            
            <div className="terminal-line text-red-400 font-bold">
              WARNING: Unauthorized access detected!
            </div>
            
            <div className="terminal-line text-red-300">
              <span className="text-red-500">┌──(</span>
              <span className="font-bold text-red-400">root㉿kali</span>
              <span className="text-red-500">)-[</span>
              <span className="text-gray-200 font-semibold">~/portfolio</span>
              <span className="text-red-500">]</span>
            </div>
            
            <div className="terminal-line flex items-center text-red-300">
              <span className="text-red-500">└─</span>
              <span className="font-bold text-red-400">$ </span>
              <span className="text-gray-200">ls -la ../</span>
            </div>
            
            <div className="terminal-line text-orange-400">
              SECURITY ALERT: Redirecting to safe zone...
            </div>
            
            <div className="terminal-line text-red-300">
              <span className="text-red-500">┌──(</span>
              <span className="font-bold text-red-400">root㉿kali</span>
              <span className="text-red-500">)-[</span>
              <span className="text-gray-200 font-semibold">~/portfolio</span>
              <span className="text-red-500">]</span>
            </div>
            
            <div className="terminal-line flex items-center text-red-300">
              <span className="text-red-500">└─</span>
              <span className="font-bold text-red-400">$ </span>
              <span className="text-gray-200">cd ..</span>
            </div>
            
            <div className="terminal-line text-red-300">
              <span className="text-red-500">┌──(</span>
              <span className="font-bold text-red-400">root㉿kali</span>
              <span className="text-red-500">)-[</span>
              <span className="text-gray-200 font-semibold">~</span>
              <span className="text-red-500">]</span>
            </div>
            
            <div className="terminal-line flex items-center text-red-300">
              <span className="text-red-500">└─</span>
              <span className="font-bold text-red-400">$ </span>
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 underline font-bold animate-pulse">
                cd /home/portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}