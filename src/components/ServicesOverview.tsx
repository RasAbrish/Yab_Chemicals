import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical,
  Droplet,
  SprayCan,
  Beaker,
  ShoppingBasket,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    category: "Beverage, Brewery & Food",
    chemical: "Activated Carbon for Sugar",
    description:
      "Used to decolorize sugar syrup and remove impurities in food and beverage production.",
    image:
      "https://files.plytix.com/api/v1.1/file/public_files/pim/assets/75/95/c1/61/61c19575de9e44251baf58ac/images/38/61/6d/64/646d6138c2fa457b7491adf9/Sugar-Sweetener-MSG.jpg",
    icon: <ShoppingBasket className="w-6 h-6 text-pink-500" />,
  },
  {
    category: "Boiler, Sugar & Water Treatment",
    chemical: "Activated Carbon",
    description:
      "High-purity activated carbon for treating boiler water, sugar processing and industrial water purification.",
    image:
      "https://content.deltrian.dune.app/media/a9d35670d659e3d1f9e53952-shutterstock779194810-min-scaled.jpg",
    icon: <Droplet className="w-6 h-6 text-blue-500" />,
  },
  {
    category: "Laundry & Textile",
    chemical: "Acetic Acid 99.7% Glacial",
    description:
      "Glacial acetic acid used in textile finishing and laundry applications for pH control and cleaning.",
    image:
      "https://shop-image.readyplanet.com/o53ZUwlM8fTnVVCsnnlZ42myG8A=/9031d1a5e120406aaff7795e596b80df",
    icon: <SprayCan className="w-6 h-6 text-green-500" />,
  },
  {
    category: "Shoes & Tannery",
    chemical: "Ammonia Liquid/Solution",
    description:
      "Ammonia solution used in tanning and leather processing to clean and treat hides.",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/1/IJ/LJ/WB/2220962/liquid-ammonia.png",
    icon: <Beaker className="w-6 h-6 text-yellow-500" />,
  }
];

const cardVariants = {
  initial: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -80 },
};

const ProductShowcase = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // Auto slide
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <div
      className="max-w-6xl mx-auto px-4 py-16 relative"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <motion.span
        className="text-sm text-primary font-medium bg-blue-50 px-3 py-1 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Our Product Categories
      </motion.span>
      <motion.h1
        className="mt-4 text-4xl font-bold text-gray-800 leading-snug"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Choose Chemicals Tailored for Your Industry Needs
      </motion.h1>
      <div className="relative mt-12 h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
          >
            <div className="h-full w-full">
              <img
                src={products[index].image}
                alt={products[index].chemical}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-8 flex flex-col justify-center bg-gray-50">
              <div className="flex items-center space-x-3 mb-4">
                {products[index].icon}
                <h2 className="text-2xl font-semibold text-gray-800">
                  {products[index].category}
                </h2>
              </div>
              <p className="text-gray-600 mb-2">
                <span className="font-medium text-gray-800">
                  {products[index].chemical}
                </span>
              </p>
              <p className="text-gray-600">{products[index].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
      <div className="mt-4 flex justify-center space-x-2">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "bg-blue-600 w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <Link
          to="/products"
          className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md transition-transform transform hover:scale-105"
        >
          View More Products
        </Link>
      </div>
    </div>
  );
};

export default ProductShowcase;
