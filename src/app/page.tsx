'use client';
import { color, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { Maximize, Pause, Play } from 'lucide-react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StatDisplay } from './components/StatDisplay';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const images = ['001.jpg', '002.jpg', '003.jpg', '004.jpg', '005.jpg', '006.jpg'];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500, // increased for smoother transition
    arrows: false,
    cssEase: 'cubic-bezier(0.45, 0, 0.55, 1)', // ease-in-out curve
    pauseOnHover: false, // prevents pausing on hover
    swipe: false, // disables manual swiping
    touchMove: false, // disables touch movement
    adaptiveHeight: true, // enables dynamic height adjustment
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleLoadedData = () => {
      setIsLoading(false);
      videoElement
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error('Error auto-playing video:', error);
          setIsPlaying(false);
        });
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handleError = () => {
      setIsLoading(false);
      setIsPlaying(false);
      console.error('Error loading video');
    };

    videoElement.addEventListener('loadeddata', handleLoadedData);
    videoElement.addEventListener('ended', handleEnded);
    videoElement.addEventListener('pause', handlePause);
    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('error', handleError);

    return () => {
      videoElement.removeEventListener('loadeddata', handleLoadedData);
      videoElement.removeEventListener('ended', handleEnded);
      videoElement.removeEventListener('pause', handlePause);
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">

      <nav className="w-full bg-black flex justify-center">
        <div className="max-w-[700px] w-full px-4 py-3 flex items-center justify-between flex-wrap">
          <div className="transform hover:scale-105 transition-transform duration-200">
            <div className="relative w-[120px] h-[24px]">
              <Image
                src="/logo.svg"
                alt="Next.js Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex gap-4 items-center">
            {['MAIN', 'MODELS', 'STORY', 'CONTACT'].map((item) => (
              <button
                key={item}
                className="text-white text-xs md:text-sm hover:text-gray-300 px-1 md:px-4 py-2 
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
        className="relative w-full mx-auto max-w-[1000px] group">
        <video
          ref={videoRef}
          className=" rounded-lg shadow-lg transition-transform duration-300 w-full min-h-[200px] h-auto object-cover object-center"
          preload="metadata"
          playsInline
          width={1920}
          height={1080}
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          poster="/1frame.jpg"
          loop
          muted
          autoPlay
          style={{ margin: 0, verticalAlign: 'middle' }}>
          <source
            src="/banner.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-full max-w-[1000px] mx-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="max-h-[500px] max-w-full" // Set a maximum height and width
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="relative">
        <div className="relative w-full max-w-[1000px] mx-auto">
          <Image
            src={'/static1.png'}
            alt={'static1'}
            className="w-full min-h-[300px] h-auto object-cover object-center"
            width={1920}
            height={790}
            priority
          />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="flex justify-around flex-wrap items-center w-[1000px] gap-2">
          <StatDisplay
            value="2.88 KW"
            label="BATTERY CAPACITY"
          />
          <StatDisplay
            value="95 Km/h"
            label="TOP SPEED"
          />
          <StatDisplay
            value="240 Kg"
            label="WEIGHT"
          />
          <StatDisplay
            value="20 KW"
            label="DUAL MOTOR"
          />
          <StatDisplay
            value="3.10x1.50x0.66m"
            label="DIMENSIONS"
          />
        </div>
      </div>

      <div className="relative">
        <div className="relative w-full max-w-[1000px] mx-auto">
          <Image
            src={'/static2.png'}
            alt={'static1'}
            className="w-full min-h-[300px] h-auto object-cover object-center"
            width={1920} // Set appropriate width
            height={790} // Match height with CSS
            priority // Optional: for above-the-fold images
          />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <div
          className="min-w-72"
          style={{ color: '#d49600' }}>
          <div className="flex gap-2 items-baseline">
            <h3 className="text-xl md:text-3xl">ICONIC</h3>
            <h4 className="text-xs md:text-base">DESIGN</h4>
          </div>
          <div className="flex gap-2 items-baseline">
            <h4 className="text-xs md:text-base">LAST</h4>
            <h3 className="text-xl md:text-3xl">FOREVER</h3>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full max-w-[1000px] mx-auto">
            <Image
              src={'/fade1.png'}
              alt={'fade1'}
              className="w-full min-h-[300px] h-auto object-cover object-center"
              width={1920} // Set appropriate width
              height={790} // Match height with CSS
              priority // Optional: for above-the-fold images
            />
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent"></div>
            </div>
          </div>
        </div>

        <div
          className="min-w-72"
          style={{ color: '#d49600' }}>
          <div className="flex gap-2 items-baseline">
            <h3 className="text-xl md:text-3xl">DETAILED</h3>
          </div>
          <div className="flex gap-2 items-baseline">
            <h4 className="text-xs md:text-base">AND</h4>
            <h3 className="text-xl md:text-3xl">ELECTRIC</h3>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full max-w-[1000px] mx-auto">
            <Image
              src={'/fade2.png'}
              alt={'fade2'}
              className="w-full min-h-[300px] h-auto object-cover object-center"
              width={1920} // Set appropriate width
              height={790} // Match height with CSS
              priority // Optional: for above-the-fold images
            />
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent"></div>
            </div>
          </div>
        </div>

        <div
          className="min-w-72"
          style={{ color: '#d49600' }}>
          <div className="flex gap-2 items-baseline">
            <h3 className="text-xl md:text-3xl">BEYOND</h3>
          </div>
          <div className="flex gap-2 items-baseline">
            <h4 className="text-xs md:text-base">THE</h4>
            <h3 className="text-xl md:text-3xl">REPLICA</h3>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full max-w-[1000px] mx-auto">
            <Image
              src={'/fade3.png'}
              alt={'fade3'}
              className="w-full min-h-[300px] h-auto object-cover object-center"
              width={1920} // Set appropriate width
              height={790} // Match height with CSS
              priority // Optional: for above-the-fold images
            />
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent"></div>
            </div>
          </div>
        </div>

        <div
          className="min-w-72"
          style={{ color: '#d49600' }}>
          <div className="flex gap-2 items-baseline">
            <h3 className="text-xl md:text-3xl">FEEL</h3>
            <h4 className="text-xs md:text-base">THE</h4>
          </div>
          <div className="flex gap-2 items-baseline">
            <h3 className="text-xl md:text-3xl">COSWORTH</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
      { <div className="w-full flex flex-col items-center py-8">
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
          className="max-w-[700px] max-h-96 text-left pr-[20%] py-8"
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
          className="max-w-[700px] max-h-96 text-left pr-[20%] py-8"
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
      </div> }
*/

/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
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
 */
