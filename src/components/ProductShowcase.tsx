"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Beaker,
  FlaskConical,
  Microscope,
  Utensils,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductShowcase = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Industrial Solvents",
      description:
        "High-purity solvents for manufacturing and industrial applications",
      icon: FlaskConical,
      category: "Solvents",
      applications: ["Manufacturing", "Cleaning", "Processing"],
    },
    {
      id: 2,
      name: "Laboratory Chemicals",
      description:
        "Analytical grade chemicals for research and quality control",
      icon: Microscope,
      category: "Laboratory",
      applications: ["Research", "Testing", "Analysis"],
    },
    {
      id: 3,
      name: "Food Chemicals",
      description:
        "Safe additives and preservatives for food processing industries",
      icon: Utensils,
      category: "Food",
      applications: ["Food Processing", "Preservation", "Flavoring"],
    },
    {
      id: 4,
      name: "Basic Chemicals",
      description: "Essential chemical building blocks for various industries",
      icon: Beaker,
      category: "Basic",
      applications: ["Construction", "Agriculture", "Textile"],
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Premium Chemical
            <span className="ml-2 text-gradient bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality chemicals sourced
            from trusted international suppliers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.id}
                onClick={() => navigate("/products")}
                className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-blue-600 opacity-100 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <CardHeader className="relative text-center z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/40 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-white group-hover:text-yellow-300 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-200">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-3">
                    <span className="inline-block text-xs font-medium text-white bg-white/10 px-2 py-1 rounded">
                      {product.category}
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-white/80">
                        Applications:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app) => (
                          <span
                            key={app}
                            className="text-xs text-white/80 bg-white/10 px-2 py-1 rounded transition-colors duration-300 group-hover:bg-white/20"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* Optional hover overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-500 to-blue-600 text-white 
               hover:from-red-600 hover:to-blue-600 
               transition-all duration-300 rounded-full
               transform hover:-translate-y-1 hover:scale-105"
            onClick={() => navigate("/products")}
          >
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
