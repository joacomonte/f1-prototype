'use client';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import countries from '@/app/data/countries.json';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StatDisplay } from './components/StatDisplay';
import { useClickOutside } from './hooks/useClickOutside';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const swiper1 = ['swiper1-01.png', 'swiper1-02.png', 'swiper1-03.png', 'swiper1-04.png'];

  const swiper2 = ['swiper2-01.png', 'swiper2-02.png', 'swiper2-03.png', 'swiper2-04.png'];

  const swiper3 = ['swiper3-01.png', 'swiper3-02.png', 'swiper3-03.png', 'swiper3-04.png'];

  const hearUsList = ['GOOGLE', 'YOUTUBE', 'INSTAGRAM', 'AUTOCLASICA', 'OTRO'];

  const inquiryList = ['HOW MUCH DOES IT COST?', 'GENERAL INFO'];

  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    hearUs: '',
    inquiry: '',
  });

  const inquiryRef = useRef(null);
  const countryRef = useRef(null);
  const hearUsRef = useRef(null);

  const [countryOpen, setCountryOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [hearUsOpen, setHearUsOpen] = useState(false);

  useClickOutside(countryRef, () => setCountryOpen(false));
  useClickOutside(inquiryRef, () => setInquiryOpen(false));
  useClickOutside(hearUsRef, () => setHearUsOpen(false));

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
  };

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

  // useEffect(() => {
  //   const videoElement = videoRef.current;
  //   if (!videoElement) return;

  //   const handleLoadedData = () => {
  //     setIsLoading(false);
  //     videoElement
  //       .play()
  //       .then(() => {
  //         setIsPlaying(true);
  //       })
  //       .catch((error) => {
  //         console.error('Error auto-playing video:', error);
  //         setIsPlaying(false);
  //       });
  //   };

  //   const handleEnded = () => {
  //     setIsPlaying(false);
  //   };

  //   const handlePause = () => {
  //     setIsPlaying(false);
  //   };

  //   const handlePlay = () => {
  //     setIsPlaying(true);
  //   };

  //   const handleError = () => {
  //     setIsLoading(false);
  //     setIsPlaying(false);
  //     console.error('Error loading video');
  //   };

  //   videoElement.addEventListener('loadeddata', handleLoadedData);
  //   videoElement.addEventListener('ended', handleEnded);
  //   videoElement.addEventListener('pause', handlePause);
  //   videoElement.addEventListener('play', handlePlay);
  //   videoElement.addEventListener('error', handleError);

  //   return () => {
  //     videoElement.removeEventListener('loadeddata', handleLoadedData);
  //     videoElement.removeEventListener('ended', handleEnded);
  //     videoElement.removeEventListener('pause', handlePause);
  //     videoElement.removeEventListener('play', handlePlay);
  //     videoElement.removeEventListener('error', handleError);
  //   };
  // }, []);

  return (
    <div className="flex flex-col items-center  mx-auto ">
      <nav className="w-full bg-black/80 flex justify-center fixed top-0 left-0 right-0 z-[100]">
        <div className="max-w-[650px] w-full px-4 py-2 flex items-center justify-between flex-wrap ">
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

          <div className="flex gap-3 items-center">
            {['MAIN', 'MODELS', 'STORY', 'CONTACT'].map((item) => (
              <button
                key={item}
                className="text-white text-[11px] md:text-sm hover:text-gray-300 md:px-4 mt-1 py-2
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
        className="relativ mx-auto w-full h-full group">
        <video
          ref={videoRef}
          className=" shadow-lg transition-transform duration-300 w-full h-full min-h-[350px] object-cover"
          preload="metadata"
          playsInline
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          poster="/1frame.jpg"
          loop
          muted
          autoPlay
          style={{
            width: '100%',
            height: 'auto',
            display: 'block', // Prevent extra spacing below the video
            objectFit: 'cover', // Ensures the video maintains aspect ratio and covers the container
          }}>
          <source
            src="/banner.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-full max-w-[1000px] py-4">
        <Image
          src={'/horizontal.png'}
          alt={'horizontal'}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={500}
          height={300}
        />
      </div>

      <div className="relative">
        <div className="relative w-full max-w-[1000px] mx-auto">
          <Image
            src={'/static1edit.png'}
            alt={'static1'}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={2043}
            height={766}
            priority
          />
          {/* <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent"></div>
          </div> */}
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="flex justify-around flex-wrap items-center w-[1000px] gap-2">
          <StatDisplay
            value={2.88}
            unit="KW"
            label="BATTERY CAPACITY"
          />
          <StatDisplay
            value={95}
            unit="Km/h"
            label="TOP SPEED"
          />
          <StatDisplay
            value={240}
            unit="Kg"
            label="WEIGHT"
          />
          <StatDisplay
            value={20}
            unit="KW"
            label="DUAL MOTOR"
          />
        </div>
      </div>

      <div className="relative">
        <div className="relative w-full max-w-[1000px] mx-auto">
          <Image
            src={'/static2.png'}
            alt={'static1'}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={2043}
            height={766}
            priority
          />
          {/* <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent"></div>
          </div> */}
        </div>
      </div>

      {/* <StatDisplay
        value="3.10x1.50x0.66m"
        label="DIMENSIONS"
      /> */}

      <div className="flex flex-col px-10 pt-8 max-w-[1000px]">
        <div
          className="min-w-72 thonburiRegular pb-4"
          style={{ color: '#d49600' }}>
          <div className="iconic-design-header my-[-8px]">
            <h3>ICONIC</h3>
            <h4>DESIGN</h4>
          </div>
          <div className="iconic-design-header">
            <h4>LAST</h4>
            <h3>FOREVER</h3>
          </div>
        </div>
        <p className="avenirRoman text-[18px] w-full md:w-7/10 ">
          The Thrill of 1960’s Formula 1 Racing – Reimagined in 3/4 Scale, Powered by Electric Innovation. meticulously detailed, fully electric 3/4 scale replicas of iconic 1960’s Formula 1 cars. Designed for both, collectors and enthusiasts, these cars capture the essence of that legendary racing
          era, blending classic aesthetics with cutting-edge technology.
        </p>
      </div>

      <div className="w-full py-8">
        <Image
          src={'/horizontal-single.png'}
          alt={'horizontal'}
          sizes="100vw"
          style={{
            width: '100%',
            maxHeight: '3px',
            objectFit: 'cover',
          }}
          width={0} // Set width to 0 to use the full width
          height={3}
        />
      </div>

      <div className="w-full max-w-[1000px] mx-auto ">
        <Slider {...settings}>
          {swiper1.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center ">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className=" mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex flex-col px-10 pt-8 max-w-[1000px]">
        <div
          className="min-w-72 thonburiRegular pb-4"
          style={{ color: '#d49600' }}>
          <div className="iconic-design-header my-[-8px]">
            <h3>DETAILED</h3>
          </div>
          <div className="iconic-design-header">
            <h4>AND</h4>
            <h3>ELECTRIC</h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <p className="avenirRoman text-[18px] w-full md:w-7/10 ">Designed for both collectors and enthusiasts, these cars capture the essence of that legendary racing era, blending classic aesthetics with cutting-edge technology. </p>
          <button className="btnExplore py-2 w-full my-auto md:w-3/10">Explore</button>
        </div>
      </div>

      <div className="w-full py-8">
        <Image
          src={'/horizontal-single.png'}
          alt={'horizontal'}
          sizes="100vw"
          style={{
            width: '100%',
            maxHeight: '3px',
            objectFit: 'cover',
          }}
          width={0} // Set width to 0 to use the full width
          height={3}
        />
      </div>

      <div className="w-full max-w-[1000px] mx-auto ">
        <Slider
          {...settings}
          slidesToScroll={-1}>
          {swiper2.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className=" mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex flex-col px-10 pt-8 max-w-[1000px]">
        <div
          className="min-w-72 thonburiRegular pb-4"
          style={{ color: '#d49600' }}>
          <div className="iconic-design-header my-[-8px]">
            <h3>BEYOND</h3>
          </div>
          <div className="iconic-design-header">
            <h4>THE</h4>
            <h3>REPLICA</h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <p className="avenirRoman text-[18px] w-full md:w-7/10">The way we see it, if you're gonna build a replica car, blending classic aesthetics with cutting-edge technolgy... why not do it with some style?.</p>
          <button className="btnExplore py-2 w-full my-auto md:w-3/10">Explore</button>
        </div>
      </div>

      <div className="w-full py-8">
        <Image
          src={'/horizontal-single.png'}
          alt={'horizontal'}
          sizes="100vw"
          style={{
            width: '100%',
            maxHeight: '3px',
            objectFit: 'cover',
          }}
          width={0} // Set width to 0 to use the full width
          height={3}
        />
      </div>

      <div className="w-full max-w-[1000px] mx-auto ">
        <Slider {...settings}>
          {swiper3.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex flex-col px-10 pt-8 max-w-[1000px]">
        <div
          className="min-w-72 thonburiRegular pb-4"
          style={{ color: '#d49600' }}>
          <div className="iconic-design-header my-[-8px]">
            <h3>FEEL</h3>
            <h4>THE</h4>
          </div>
          <div className="iconic-design-header">
            <h3>COSWORTH</h3>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <p className="avenirRoman text-[18px] w-full  md:w-7/10">At FivePrix we believe that if an engine doesn't roar, it isn't alive, no matter how it runs. That's why we digitally developed the exhaust sound of the original Cosworth V8 used on the 1967 Lotus 49.</p>
          <button className="btnExplore py-2 w-full my-auto md:w-3/10">Explore</button>
        </div>
      </div>

      <div className="w-full py-8">
        <Image
          src={'/horizontal-single.png'}
          alt={'horizontal'}
          sizes="100vw"
          style={{
            width: '100%',
            maxHeight: '3px',
            objectFit: 'cover',
          }}
          width={0} // Set width to 0 to use the full width
          height={3}
        />
      </div>

      <div className="h-10"></div>

      <div className=" w-full min-h-[800px] h-[800px] relative flex justify-center items-center z-50">
        <div className=" h-full absolute top-0 left-0 right-0 overflow-hidden">
          <Image
            src={'/form-background.png'}
            alt={'back'}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full  h-1/2 my-auto max-w-[1200px] flex flex-col justify-around gap-4">
          <h2 className="text-center">ASK YOUR QUESTION</h2>
          <form
            onSubmit={handleSubmit}
            className="px-10">
            <div className="flex justify-center flex-wrap gap-10 items-center px-20 my-4">
              <input
                className="border-bottom-gold w-[250px] max-w-[250px]"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                className="border-bottom-gold w-[250px] max-w-[250px]"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
              />
              <input
                className="border-bottom-gold w-[250px] max-w-[250px]"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />

              <div className="relative ">
                <div className=" flex items-center input-select min-w-[250px] w-[250px] max-w-[250px]">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setCountryOpen(true)}
                    placeholder="Where do you live?"
                    className="w-full px-4 pb-1 focus:outline-none"
                  />
                  <svg
                    className={`w-5 h-5 ml-1 mb-1 transition-transform ${countryOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    onClick={() => setCountryOpen(!countryOpen)}>
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="#d49600"
                      fill="none"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                {countryOpen && (
                  <div
                    ref={countryRef}
                    className="absolute top-full left-0 w-full bg-black border mt-1 border-gold max-h-60 overflow-y-auto z-10">
                    {countries
                      .filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
                      .map((country) => (
                        <div
                          key={country.code}
                          className="p-2 hover:bg-[#d49600] cursor-pointer"
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              country: country.name,
                            }));
                            setCountryOpen(false);
                            setSearchTerm(country.name);
                          }}>
                          {country.name}
                        </div>
                      ))}
                  </div>
                )}
              </div>

              <div className="relative ">
                <div className=" flex items-center input-select min-w-[250px] w-[250px] max-w-[250px]">
                  <input
                    type="text"
                    value={formData.hearUs}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setHearUsOpen(true)}
                    placeholder="How did you find us?"
                    className="w-full px-4 pb-1 focus:outline-none"
                  />
                  <svg
                    className={`w-5 h-5 ml-1 mb-1 transition-transform ${hearUsOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24">
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="#d49600"
                      fill="none"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                {hearUsOpen && (
                  <div
                    ref={hearUsRef}
                    className="absolute top-10 left-0 w-full bg-black border mt-1 border-gold z-10">
                    {hearUsList.map((opt) => (
                      <div
                        key={opt}
                        className="p-2 hover:bg-[#d49600] cursor-pointer"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            hearUs: opt,
                          }));
                          setHearUsOpen(false);
                        }}>
                        {opt}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative ">
                <div className=" flex items-center input-select min-w-[250px] w-[250px] max-w-[250px]">
                  <input
                    type="text"
                    value={formData.inquiry}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setInquiryOpen(true)}
                    placeholder="Your enquiry"
                    className="w-full px-4 pb-1 focus:outline-none"
                  />
                  <svg
                    className={`w-5 h-5 ml-1 mb-1 transition-transform ${inquiryOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24">
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="#d49600"
                      fill="none"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                {inquiryOpen && (
                  <div
                    ref={inquiryRef}
                    className="absolute top-full left-0 w-full bg-black border mt-1 border-gold">
                    {inquiryList.map((opt) => (
                      <div
                        key={opt}
                        className="p-2 hover:bg-[#d49600] cursor-pointer"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            inquiry: opt,
                          }));
                          setInquiryOpen(false);
                        }}>
                        {opt}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              className="btnExplore w-full mx-auto mt-20 md:w-3/10"
              type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="w-full py-8">
        <Image
          src={'/horizontal-single.png'}
          alt={'horizontal'}
          sizes="100vw"
          style={{
            width: '100%',
            maxHeight: '3px',
            objectFit: 'cover',
          }}
          width={0} // Set width to 0 to use the full width
          height={3}
        />
      </div>

      <div className="footer-container w-full">
        <div className=" footer-buttons flex flex-wrap justify-around max-w-[1300px] mx-auto py-8">
          <div className="flex flex-col">
            <h4>MODELS</h4>
            <span className="!text-white">LOTUS 49</span>
            <span>EAGLE T1G</span>
            <span>FERARRI 312</span>
            <span>HONDA RA300</span>
          </div>

          <div className="flex flex-col">
            <h4>ABOUT</h4>
            <span>FIVERPRIK STORY</span>
            <span>PRESS</span>
          </div>

          <div className="flex flex-col">
            <h4>SERVICE</h4>
            <span>APP UPDATE</span>
            <span>ASSISTANCE</span>
          </div>
        </div>

        <div className="footer-icons-container text-center">
          <span>face</span>
          <span>insta</span>
          <span>YT</span>
        </div>

        <div className="w-full py-8">
          <Image
            src={'/horizontal-single.png'}
            alt={'horizontal'}
            sizes="100vw"
            style={{
              width: '100%',
              maxHeight: '3px',
              objectFit: 'cover',
            }}
            width={0} // Set width to 0 to use the full width
            height={3}
          />
        </div>
        <h3 className="avenirLight text-[25px] tracking-widest text-center">TERMS & CONDITIONS</h3>
        <div className="w-full py-8">
          <Image
            src={'/horizontal-single.png'}
            alt={'horizontal'}
            sizes="100vw"
            style={{
              width: '100%',
              maxHeight: '3px',
              objectFit: 'cover',
            }}
            width={0} // Set width to 0 to use the full width
            height={3}
          />
        </div>
        <h3 className="avenirLight text-[25px] tracking-widest text-center">DISCLAIMER</h3>
        <p className=" text-pretty px-[10vw] text-center text-[#6d6d6d] py-8 mb-10">
          This website contains images of the product that include decals of certain brands for which authorization of use has been requested, without having yet received a response. The initial inclusion of said marks is intended solely to illustrate the design concept. It does not imply any
          trademark use, and does not represent a guarantee that they will be present in the final product.
        </p>
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
