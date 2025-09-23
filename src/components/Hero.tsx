// Hero.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "@/assets/hero3.jpg";
import image2 from "@/assets/hero2.jpg";
import image3 from "@/assets/hero4.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const images = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const navigate = useNavigate();

  // Background slider
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentImage((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        ),
      5000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  // Counters
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
    <section className="relative h-[90vh] sm:h-screen flex items-center px-4 sm:px-6 lg:px-20 overflow-hidden">
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
        className="relative z-10 text-white max-w-4xl space-y-6 mt-16 sm:mt-20 text-center md:text-left mx-auto md:ml-20 px-2"
      >
        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] sm:text-xs md:text-sm lg:text-base flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-1 sm:py-2 rounded-full w-fit mx-auto md:mx-0 font-semibold text-primary"
        >
          <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
          The Chemical Behind Smarter Solutions
        </motion.h2>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
        >
          Trusted Chemical Supplier for a Smarter, Safer World
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-sm sm:text-base md:text-lg text-gray-200"
        >
          With a strong global network and a commitment to quality, we
          specialize in importing and supplying a wide range of trusted
          chemical products for industries and businesses. From laboratory
          essentials to large-scale industrial chemicals, we provide reliable
          sourcing, timely delivery, and expert guidance.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start"
        >
          <button
            onClick={() => navigate("/contact")}
            className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary/80 rounded-lg font-semibold shadow-md transition text-sm sm:text-base"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/products")}
            className="w-full sm:w-auto px-6 py-3 border border-white hover:bg-white hover:text-primary rounded-lg font-semibold transition text-sm sm:text-base"
          >
            Explore Our Product
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-6 justify-center md:justify-start">
          <div className="text-center md:text-left">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400">
              {yearsCount}+
            </div>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base">
              Years Of Experience
            </p>
          </div>
          <div className="text-center md:text-left mb-5">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400">
              {clientsCount}+
            </div>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base">
              Satisfied Clients
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
