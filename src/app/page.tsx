"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Ne

export default function Home() {
  return (
    <>
      <nav className="w-full bg-black flex justify-center">
        <div className="max-w-[700px] w-full px-4 py-3 flex items-center justify-between">
          {/* Logo/Icon */}
          <div className="transform hover:scale-105 transition-transform duration-200">
            <p>THE LOGO</p>
            {/* <img 
            src="/logo.jpg" 
            alt="Logo" 
            className="h-10 w-auto"
          /> */}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-8 items-center">
            {["Home", "Gallery", "About Us", "Contact"].map((item) => (
              <button
                key={item}
                className="text-white hover:text-gray-300 px-4 py-2 
                         transition-all duration-200 ease-in-out
                         hover:scale-105 relative
                         after:content-[''] after:absolute after:w-0 
                         after:h-[2px] after:bg-white after:left-0 
                         after:bottom-0 after:transition-all after:duration-300
                         hover:after:w-full"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="w-full flex flex-col items-center py-8">
        {/* Wrap each image in motion.div */}
        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.6 }}
        >
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
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-4">The Evolution of Speed</h2>
          <p className="text-gray-700 leading-relaxed">
            From the earliest days of motorsport to the cutting-edge machines of
            today, our collection represents the pinnacle of automotive
            engineering. Each vehicle tells a story of innovation, passion, and
            the relentless pursuit of performance. These masterpieces have not
            just shaped racing history; they've defined generations of
            automotive excellence.
          </p>
        </motion.div>

        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.6 }}
        >
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
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-4">The Evolution of Speed</h2>
          <p className="text-gray-700 leading-relaxed">
            From the earliest days of motorsport to the cutting-edge machines of
            today, our collection represents the pinnacle of automotive
            engineering. Each vehicle tells a story of innovation, passion, and
            the relentless pursuit of performance. These masterpieces have not
            just shaped racing history; they've defined generations of
            automotive excellence.
          </p>
        </motion.div>

        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2}}
          transition={{ duration: 0.6 }}
        >
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
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-4">The Evolution of Speed</h2>
          <p className="text-gray-700 leading-relaxed">
            From the earliest days of motorsport to the cutting-edge machines of
            today, our collection represents the pinnacle of automotive
            engineering. Each vehicle tells a story of innovation, passion, and
            the relentless pursuit of performance. These masterpieces have not
            just shaped racing history; they've defined generations of
            automotive excellence.
          </p>
        </motion.div>

        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.6 }}
        >
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
