'use client';

import React, { useRef, ReactNode } from 'react';

interface HoverSoundProps {
  children: ReactNode;
  soundPath?: string;
  volume?: number;
  className?: string;
}

const HoverSound: React.FC<HoverSoundProps> = ({
  children,
  soundPath = '/sounds/button/hover-logo.mp3',
  volume = 0.5,
  className = '',
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to start
      audioRef.current.volume = volume;
      audioRef.current.play().catch((error) => {
        console.warn('Audio play failed:', error);
      });
    }
  };

  const handleMouseEnter = () => {
    playSound();
  };

  return (
    <div
      className={'grid-item'}
      onMouseEnter={handleMouseEnter}
    >
      <audio
        ref={audioRef}
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src={soundPath} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {children}
    </div>
  );
};

export default HoverSound; 