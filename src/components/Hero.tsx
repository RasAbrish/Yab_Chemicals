"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ✅ Slides
const heroSlides = [
  {
    id: 1,
    headline: <>Trusted Chemical Supplier for Ethiopian Industries</>,
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
    headline: <>Premium Industrial Chemicals for Growth</>,
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
    headline: <>Safe & Certified Chemical Imports</>,
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
  const navigate = useNavigate();

  // ✅ Auto rotation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[activeIndex];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ✅ Gradient Background Only */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-700/90 to-blue-700/90"></div>
      </div>

      {/* ✅ Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
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
          </div>

          {/* Right Stats */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              {slide.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur p-6 rounded-2xl hover:shadow-lg transition"
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === activeIndex ? "bg-red-500 w-6" : "bg-gray-400"
            }`}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
