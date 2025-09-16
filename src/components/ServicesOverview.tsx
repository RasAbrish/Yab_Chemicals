"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesOverview = () => {
  // NOTE: Data text kept the same as your original content
  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      title: "Global Sourcing",
      description:
        "Strategic partnerships with international suppliers to ensure reliable chemical supply chains",
      features: ["50+ Countries", "Quality Assurance", "Competitive Pricing"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
      title: "Logistics & Distribution",
      description:
        "Efficient delivery systems ensuring safe transport of chemicals across Ethiopia",
      features: ["Fast Delivery", "Safe Handling", "Nationwide Coverage"],
    },
    {
      image:
        "https://i.pinimg.com/1200x/ae/b3/87/aeb38744213efffb179cab37a98f1c58.jpg",
      title: "Safety & Compliance",
      description:
        "Strict adherence to international safety standards and regulatory requirements",
      features: ["ISO Certified", "Safety Training", "Regulatory Compliance"],
    },
  ];

  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive <span className="text-blue-500">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end chemical supply solutions designed to meet the diverse
            needs of Ethiopian industries
          </p>
        </div>

        {/* Services Grid (3 cards) */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* `group` makes inner elements react to hover on the whole card */}
              <Card className="group rounded-3xl overflow-hidden shadow-lg transition-all duration-400 hover:shadow-2xl">
                {/* IMAGE (kept fixed size; does NOT shrink on hover) */}
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title + short description always visible */}
                <CardHeader className="px-6 pt-4">
                  <CardTitle className="text-lg font-semibold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                {/* Features: hidden by default, revealed when hovering the entire card */}
                <CardContent className="px-6 pb-6">
                  <div
                    className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-48 group-hover:opacity-100 transition-all duration-300 ease-out"
                    aria-hidden={!true}
                  >
                    <div className="mt-3 space-y-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-3 text-sm"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary inline-block shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="mt-8 flex items-center bg-gradient-to-r from-blue-700 to-blue-500 text-white border-0 rounded-full hover:from-blue-600 hover:to-blue-800 hover:text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => navigate("/services")}
          >
            Our Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
