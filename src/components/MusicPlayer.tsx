import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioElementWithSrcObject extends HTMLAudioElement {
  srcObject: MediaStream | null;
}

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const audioRef = useRef<AudioElementWithSrcObject>(null);
  const progressIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    const audio = new Audio('/imagination.mp3');
    // @ts-ignore
    audioRef.current = audio as AudioElementWithSrcObject;

    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
    });

    audio.addEventListener('ended', () => {
      setIsPlaying(false);
      setCurrentTime(0);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const togglePlayPause = (): void => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    } else {
      audio.play().catch(error => console.error("Playback failed", error));
      progressIntervalRef.current = window.setInterval(updateProgress, 1000);
    }
    setIsPlaying(!isPlaying);
  };

  const updateProgress = (): void => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='rounded-full w-full h-full flex items-center px-3 space-x-3'>
      <div className='flex items-center space-x-2'>
        <button 
          className='text-white'
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <Pause size={16} fill='currentColor' className='hover:text-blue-700'/>
          ) : (
            <Play size={16} fill='currentColor'  className='hover:text-blue-700' />
          )}
        </button>
        <div className='text-xs text-white font-medium'>
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
      <div className='flex-grow bg-white/20 rounded-full h-1'>
        <div 
          className='bg-white rounded-full h-1' 
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MusicPlayer;