"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Background Images
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image7 from "@/assets/image6.jpg";
const bgImages = [image3, image4, image7];

// ✅ Slides
const heroSlides = [
  {
    id: 1,
    headline: (
      <>
        <span className="text-blue-500">Trusted</span>{" "}
        <span className="text-white">Chemical</span>{" "}
        <span className="text-red-500">Supplier</span>{" "}
        <span className="text-white">for Ethiopian Industries</span>
      </>
    ),
    description:
      "YAB Chemicals connects global markets with Ethiopian industries, importing high-quality chemical solutions with a commitment to safety, quality, and innovation.",
    stats: [
      { value: "500+", label: "Products Available", color: "text-yellow-400" },
      { value: "50+", label: "Countries Sourced", color: "text-yellow-400" },
      { value: "1000+", label: "Satisfied Clients", color: "text-yellow-400" },
      { value: "15+", label: "Years Experience", color: "text-yellow-400" },
    ],
  },
  {
    id: 2,
    headline: (
      <>
        <span className="text-white">Premium</span>{" "}
        <span className="text-white">Industrial</span>{" "}
        <span className="text-red-500">Chemicals</span>{" "}
        <span className="text-white">for Growth</span>
      </>
    ),
    description:
      "We import from global suppliers and distribute across Ethiopia, ensuring sustainable solutions, safety, and rapid delivery for every sector.",
    stats: [
      { value: "200+", label: "Industry Partners", color: "text-yellow-400" },
      { value: "24/7", label: "Customer Support", color: "text-yellow-400" },
      { value: "99%", label: "On-Time Delivery", color: "text-yellow-400" },
      {
        value: "10+",
        label: "Global Certifications",
        color: "text-yellow-400",
      },
    ],
  },
  {
    id: 3,
    headline: (
      <>
        <span className="text-white">Safe</span>{" "}
        <span className="text-white">and</span>{" "}
        <span className="text-red-500">Certified</span>{" "}
        <span className="text-white">Chemical Imports</span>
      </>
    ),
    description:
      "Every product we supply meets international safety standards and certifications, protecting industries, workers, and the environment in Ethiopia.",
    stats: [
      { value: "300+", label: "Verified Products", color: "text-yellow-400" },
      { value: "ISO", label: "Certified Imports", color: "text-yellow-400" },
      { value: "100%", label: "Safety Guarantee", color: "text-yellow-400" },
      { value: "500+", label: "Local Distributors", color: "text-yellow-400" },
    ],
  },
];

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const navigate = useNavigate();

  // ✅ Slide rotation every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[activeIndex];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ✅ Background Images */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((image, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0"
            animate={{
              opacity: idx === bgIndex ? 1 : 0,
              scale: idx === bgIndex ? 1 : 1.025,
            }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        ))}
      </div>

      {/* ✅ Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* ✅ Colored Headline */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {slide.headline}
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              {slide.description}
            </p>

            {/* Key Points */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium text-white">
                  International Sourcing
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium text-white">
                  Safety Certified
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium text-white">
                  Fast Delivery
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-full hover:from-blue-700 hover:to-blue-900 text-white hover:shadow-lg group transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => navigate("/products")}
              >
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-gradient-to-r from-blue-700 to-blue-500 text-white border-0 rounded-full hover:from-blue-600 hover:to-blue-800 hover:text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => navigate("/contact")}
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          {/* Right Stats */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              {slide.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur p-6 rounded-2xl cursor-pointer"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    rotateZ: 3,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === activeIndex ? "bg-red-500 w-6" : "bg-gray-400"
            }`}
            onClick={() => {
              setActiveIndex(idx);
              setBgIndex(idx);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
