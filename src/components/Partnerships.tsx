import { useEffect, useState } from "react";

const Partnerships = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const partners = [
    { name: "BASF", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/BASF-Logo.svg" },
    { name: "Dow Chemical", logo: "https://logos-world.net/wp-content/uploads/2020/11/Dow-Logo.png" },
    { name: "DuPont", logo: "https://logos-world.net/wp-content/uploads/2020/11/DuPont-Logo.png" },
    { name: "3M", logo: "https://logos-world.net/wp-content/uploads/2020/04/3M-Logo.png" },
    { name: "Bayer", logo: "https://logos-world.net/wp-content/uploads/2020/04/Bayer-Logo.png" },
    { name: "Merck", logo: "https://logos-world.net/wp-content/uploads/2020/11/Merck-Logo.png" },
    { name: "Solvay", logo: "https://logos-world.net/wp-content/uploads/2020/11/Solvay-Logo.png" },
    { name: "AkzoNobel", logo: "https://logos-world.net/wp-content/uploads/2020/11/AkzoNobel-Logo.png" }
  ];

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
            We source premium chemicals from world-leading manufacturers and suppliers
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="w-1/4 flex-shrink-0 px-4"
              >
                <div className="bg-card border rounded-lg p-8 hover-shadow hover-lift transition-all duration-300 h-32 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-16 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
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