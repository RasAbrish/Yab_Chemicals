// Hero.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "@/assets/hero1.jpg";
import image2 from "@/assets/hero2.jpg";
const Hero = () => {
  const images = [
    `${image1}`,
    `${image2}`
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  // Background slider
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1)),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  // Counter animation
  useEffect(() => {
    let years = 0;
    let clients = 0;
    const yearsTimer = setInterval(() => {
      years += 1;
      setYearsCount(years);
      if (years >= 12) clearInterval(yearsTimer);
    }, 100);
    const clientsTimer = setInterval(() => {
      clients += 100;
      setClientsCount(clients);
      if (clients >= 5000) clearInterval(clientsTimer);
    }, 1);
    return () => {
      clearInterval(yearsTimer);
      clearInterval(clientsTimer);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center px-4 sm:px-6 lg:px-20">
      {/* Background */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/70"></div>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-white max-w-3xl space-y-6 mt-20 text-center md:text-left mx-auto md:ml-20"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, x: -30 },
            show: { opacity: 1, x: 0 },
          }}
          className="text-xs sm:text-sm md:text flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-1 sm:py-2 rounded-full w-fit mx-auto md:mx-0 font-semibold text-primary"
        >
          <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
          The Chemical Behind Smarter Solutions
        </motion.h2>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className="text-4xl md:text-6xl font-medium leading-tight"
        >
          Trusted Chemical Supplier for a Smarter, Safer World
        </motion.h1>

        <motion.p
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="text-base sm:text-lg text-gray-200"
        >
          With a strong global network and a commitment to quality, we
          specialize in importing and supplying a wide range of trusted chemical
          products for industries and businesses. From laboratory essentials to
          large-scale industrial chemicals, we provide reliable sourcing, timely
          delivery, and expert guidance.
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start"
        >
          <button className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary/80 rounded-lg font-semibold shadow-md transition">
            Get Started
          </button>
          <button className="w-full sm:w-auto px-6 py-3 border border-white hover:bg-white/10 rounded-lg font-semibold transition">
            Explore Our Service
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-6 justify-center md:justify-start">
          <div className="text-center md:text-left">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400">
              {yearsCount}+
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              Years Of Experience
            </p>
          </div>
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              Satisfied Clients
            </p>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
