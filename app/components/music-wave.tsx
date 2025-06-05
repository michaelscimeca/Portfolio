'use client';

import { useRef, useEffect, useCallback, useState } from "react";
import { gsap } from "gsap";

export default function MusicWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio API
  useEffect(() => {
    // Create Audio instance
    soundRef.current = new Audio('/sound.mp3');
    soundRef.current.volume = 0.7;
    soundRef.current.loop = false;
    soundRef.current.preload = 'auto';

    // Handle when audio ends
    const handleEnded = () => setIsPlaying(false);
    soundRef.current.addEventListener('ended', handleEnded);

    return () => {
      // Cleanup
      if (soundRef.current) {
        soundRef.current.pause();
        soundRef.current.removeEventListener('ended', handleEnded);
        soundRef.current = null;
      }
    };
  }, []);

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Canvas dimensions
    const width = 25;
    const height = 50;

    const opt = {
      width: width,
      height: height,
      midY: height / 2,
      points: 20,
      stretch: 30,
      sinheight: 0,
      speed: 0.1,
      strokeColor: 'white',
      strokeWidth: 1.5,
      power: false,
      maxAmplitude: height * 0.3 // 30% of height = 15px max
    };

    // Set canvas size for high DPI displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.scale(dpr, dpr);
    ctx.strokeStyle = opt.strokeColor;
    ctx.lineWidth = opt.strokeWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 1;
      ctx.beginPath();
      
      let increment = 0;
      for (let i = 0; i <= opt.points; i++) {
        if (i < opt.points / 2) {
          increment += 0.1;
        } else {
          increment -= 0.1;
        }
        
        const x = (width / opt.points) * i;
        const y = opt.midY + Math.sin(time * opt.speed + i / opt.stretch) * opt.sinheight * increment;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
      animationIdRef.current = requestAnimationFrame(render);
    };

    // Canvas click handler - controls both wave and audio
    const handleCanvasClick = () => {
      opt.power = !opt.power;
      setIsPlaying(opt.power);

      if (opt.power) {
        // Play audio and animate wave
        soundRef.current?.play()
          .then(() => console.log('Audio started'))
          .catch((err: Error) => console.error('Playback error:', err));
        
        gsap.to(opt, {
          duration: 1,
          sinheight: opt.maxAmplitude * 0.5,
          stretch: 5,
          ease: "power2.inOut",
        });
      } else {
        // Pause audio and calm wave
        soundRef.current?.pause();
        
        gsap.to(opt, {
          duration: 1,
          sinheight: 0,
          stretch: 30,
          ease: "power3.inOut",
        });
      }
    };

    canvas.addEventListener('click', handleCanvasClick);
    render();

    // Cleanup function
    return () => {
      canvas.removeEventListener('click', handleCanvasClick);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [setIsPlaying]);

  useEffect(() => {
    const cleanup = initializeCanvas();
    
    return () => {
      if (cleanup) cleanup();
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [initializeCanvas]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const timeoutId = setTimeout(() => {
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }
        initializeCanvas();
      }, 100);

      return () => clearTimeout(timeoutId);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initializeCanvas]);

  return (
    <div className="relative flex flex-col items-center space-y-4">
      <div className="text-center">
      
        <canvas 
          ref={canvasRef} 
          
          style={{ width: '25px', height: '50px' }}
        />
      </div>
    </div>
  );
}
