"use client";
import { useEffect, useState, useRef } from "react";

const Partnerships = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const partners = [
    {
      name: "BASF",
      logo: "https://img.icons8.com/?size=100&id=QjroQ85D9B0L&format=png&color=000000",
    },
    {
      name: "Dow Chemical",
      logo: "https://img.icons8.com/?size=100&id=QjroQ85D9B0L&format=png&color=000000",
    },
    {
      name: "DuPont",
      logo: "https://img.icons8.com/?size=100&id=QjroQ85D9B0L&format=png&color=000000",
    },
    {
      name: "3M",
      logo: "https://img.icons8.com/?size=100&id=QjroQ85D9B0L&format=png&color=000000",
    },
    {
      name: "Bayer",
      logo: "https://img.icons8.com/?size=100&id=QjroQ85D9B0L&format=png&color=000000",
    },
    {
      name: "Merck",
      logo: "https://img.icons8.com/?size=100&id=QjroQ85D9B0L&format=png&color=000000",
    },
    {
      name: "Solvay",
      logo: "https://img.icons8.com/?size=100&id=QjroQ85D9B0L&format=png&color=000000",
    },
    {
      name: "AkzoNobel",
      logo: "https://img.icons8.com/?size=100&id=QjroQ85D9B0L&format=png&color=000000",
    },
  ];

  const visibleItems = 4; // Number of items visible at once

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted <span className="text-primary">Global</span> Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We source premium chemicals from world-leading manufacturers and
            suppliers
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div className="w-1/3 sm:w-1/6 flex-shrink-0 px-2">
                <div className="bg-card border rounded-lg p-2 hover-shadow hover-lift transition-all duration-300 aspect-square flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-2/3 max-h-2/3 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Global Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">25+</div>
            <div className="text-muted-foreground">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">99%</div>
            <div className="text-muted-foreground">Quality Assurance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
