'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { Maximize, Pause, Play } from 'lucide-react';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Modified useEffect to auto-play after loading
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsLoading(false);
        // Auto-play video after loading
        videoRef.current
          ?.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error('Error auto-playing video:', error);
          });
      });

      videoRef.current.addEventListener('error', () => {
        setIsLoading(false);
        console.error('Error loading video');
      });
    }
  }, []);

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => {
          console.error('Error playing video:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = () => {
    const element = containerRef.current;
    if (!element) return;

    if (!document.fullscreenElement) {
      element.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <>
      <nav className="w-full bg-black flex justify-center">
        <div className="max-w-[700px] w-full px-4 py-3 flex items-center justify-between">
          <div className="transform hover:scale-105 transition-transform duration-200">
            <p>THE LOGO</p>
            {/* <img 
            src="/logo.jpg" 
            alt="Logo" 
            className="h-10 w-auto"
          /> */}
          </div>

          <div className="flex gap-8 items-center">
            {['Home', 'Gallery', 'About Us', 'Contact'].map((item) => (
              <button
                key={item}
                className="text-white hover:text-gray-300 px-4 py-2 
                         transition-all duration-200 ease-in-out
                         hover:scale-105 relative
                         after:content-[''] after:absolute after:w-0 
                         after:h-[2px] after:bg-white after:left-0 
                         after:bottom-0 after:transition-all after:duration-300
                         hover:after:w-full">
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div
        ref={containerRef}
        className="relative w-full mx-auto group">
        {/* {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        )} */}
        {isLoading && (
          <div className="absolute inset-0">
            <Image
              src="/1frame.jpg"
              alt="Video thumbnail"
              fill
              // className="object-cover"
              priority
            />
          </div>
        )}

        <video
          ref={videoRef}
          className="w-full rounded-lg shadow-lg transition-transform duration-300"
          preload="auto"
          playsInline
          muted
          poster="/video-thumbnail.jpg">
          <source
            src="/banner.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay controls - only show when video is loaded and container is hovered */}
        {!isLoading && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <div className="flex gap-4 pointer-events-auto">
              <button
                onClick={togglePlay}
                className="p-3 rounded-full bg-white shadow-md bg-opacity-70 hover:bg-opacity-70 transition-all duration-300 transform hover:scale-110"
                aria-label={isPlaying ? 'Pause' : 'Play'}>
                {isPlaying ? <Pause className="w-6 h-6 text-black" /> : <Play className="w-6 h-6 text-black" />}
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-3 rounded-full bg-white shadow-md bg-opacity-70 hover:bg-opacity-70 transition-all duration-300 transform hover:scale-110"
                aria-label="Toggle fullscreen">
                <Maximize className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="w-full flex flex-col items-center py-8">
        {/* <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.6 }}>
          <Image
            src="/car1.jpg"
            alt="Car 1"
            className="w-full max-h-[400px] object-cover mx-auto"
            width={1920}
            height={400}
            priority
          />
        </motion.div>

        <motion.div
          className="max-w-[700px] text-left pr-[30%] py-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3, margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          <h2 className="text-3xl font-bold mb-4">The Evolution of Speed</h2>
          <p className="text-gray-700 leading-relaxed">
            From the earliest days of motorsport to the cutting-edge machines of today, our collection represents the pinnacle of automotive engineering. Each vehicle tells a story of innovation, passion, and the relentless pursuit of performance. These masterpieces have not just shaped racing
            history; they've defined generations of automotive excellence.
          </p>
        </motion.div> */}

        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.6 }}>
          <Image
            src="/car2.jpg"
            alt="Car 2"
            className="w-full max-h-[400px] object-cover mx-auto"
            width={1920}
            height={400}
          />
        </motion.div>

        <motion.div
          className="max-w-[700px] text-left pr-[30%] py-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3, margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          <h2 className="text-3xl font-bold mb-4">The Evolution of Speed</h2>
          <p className="text-gray-700 leading-relaxed">
            From the earliest days of motorsport to the cutting-edge machines of today, our collection represents the pinnacle of automotive engineering. Each vehicle tells a story of innovation, passion, and the relentless pursuit of performance. These masterpieces have not just shaped racing
            history; they've defined generations of automotive excellence.
          </p>
        </motion.div>

        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}>
          <Image
            src="/car3.jpg"
            alt="Car 3"
            className="w-full max-h-[400px] object-cover mx-auto"
            width={1920}
            height={400}
          />
        </motion.div>

        <motion.div
          className="max-w-[700px] text-left pr-[30%] py-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3, margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          <h2 className="text-3xl font-bold mb-4">The Evolution of Speed</h2>
          <p className="text-gray-700 leading-relaxed">
            From the earliest days of motorsport to the cutting-edge machines of today, our collection represents the pinnacle of automotive engineering. Each vehicle tells a story of innovation, passion, and the relentless pursuit of performance. These masterpieces have not just shaped racing
            history; they've defined generations of automotive excellence.
          </p>
        </motion.div>

        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.6 }}>
          <Image
            src="/car4.jpg"
            alt="Car 4"
            className="w-full max-h-[400px] object-cover mx-auto"
            width={1920}
            height={400}
          />
        </motion.div>
      </div>
    </>
  );
}
