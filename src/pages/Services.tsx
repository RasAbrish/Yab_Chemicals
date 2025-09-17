import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Truck,
  Globe,
  Shield,
  HeadphonesIcon,
  Users,
  ArrowRight,
  Zap,
  CheckCircle,
  Clock,
  Award,
  MapPin,
  Beaker,
  FlaskConical,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

// --- Variants for animations ---
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- Chemical Services Section ---
const ChemicalServices = () => {
  const services = [
    {
      title: "Industrial Chemical Supply",
      description:
        "We provide a wide range of industrial-grade chemicals, ensuring safety, quality, and compliance with international standards.",
      icon: <Beaker size={28} />,
    },
    {
      title: "Laboratory Chemicals & Reagents",
      description:
        "High-purity chemicals and reagents tailored for research, testing, and academic institutions.",
      icon: <FlaskConical size={28} />,
    },
    {
      title: "Custom Blending & Packaging",
      description:
        "Tailored chemical formulations and packaging solutions to meet specific client requirements.",
      icon: <BarChart3 size={28} />,
    },
    {
      title: "Trusted Partnerships",
      description:
        "We collaborate with industries and labs worldwide, ensuring reliable supply chains and consistent product delivery.",
      icon: <Users size={28} />,
    },
  ];

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-20">
    <motion.section
      className="bg-blue-900 text-white rounded-2xl p-6 sm:p-8 md:p-10 mt-10 md:mt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="max-w-5xl mx-auto text-center md:text-left">
        <span className="mb-4 inline-block px-4 py-2 border-2 border-white rounded-full shadow-lg font-semibold tracking-wide text-white text-sm sm:text-base">
          What We Do?
        </span>
  
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
          Supplying Quality Chemicals for Real-World Needs
        </h2>
        <p className="text-base sm:text-lg mt-4 text-gray-300">
          We are dedicated to providing reliable chemical solutions that
          empower industries, laboratories, and businesses with safe and
          high-quality products.
        </p>
  
        <button className="mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-red-600 hover:bg-red-700 transition rounded-xl shadow-lg">
          Contact Us
        </button>
  
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-12"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={sectionVariants}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 bg-blue-800 p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="p-2.5 sm:p-3 bg-red-600 rounded-xl text-white flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  </section>
  
  );
};
const Services: React.FC = () => {
  const mainServices = [
    {
      icon: Globe,
      title: "Global Chemical Sourcing",
      description:
        "Access to international chemical markets with strategic partnerships worldwide",
      features: [
        "Sourcing from 50+ countries",
        "Quality verification at origin",
        "Competitive international pricing",
        "Direct manufacturer relationships",
      ],
      color: "primary",
    },
    {
      icon: Truck,
      title: "Logistics & Distribution",
      description:
        "Safe and efficient delivery of chemicals throughout Ethiopia",
      features: [
        "Specialized chemical transport",
        "Temperature-controlled storage",
        "Nationwide delivery network",
        "Real-time tracking systems",
      ],
      color: "primary",
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description:
        "Comprehensive safety protocols and regulatory compliance support",
      features: [
        "ISO 9001:2015 certified",
        "Safety data sheets (SDS)",
        "Regulatory documentation",
        "Safety training programs",
      ],
      color: "primary",
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Support",
      description: "Expert consultation and ongoing technical assistance",
      features: [
        "Chemical application guidance",
        "Process optimization support",
        "24/7 technical helpline",
        "On-site consultation",
      ],
      color: "accent",
    },
    {
      icon: Users,
      title: "Industry Partnerships",
      description: "Tailored solutions for businesses across various sectors",
      features: [
        "Manufacturing industries",
        "Research institutions",
        "Healthcare sector",
        "Agriculture & fertilizers",
      ],
      color: "accent",
    },
    {
      icon: Zap,
      title: "Innovation & R&D",
      description:
        "Custom chemical solutions and research & development support",
      features: [
        "Custom formulations",
        "Product development support",
        "Laboratory testing services",
        "Innovation partnerships",
      ],
      color: "accent",
    },
  ];

  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen bg-background"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <Navigation />

      {/* Header */}
      <motion.section
        className="py-16 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/6c/98/d6/6c98d6336452bd591c8b0acc064543bc.jpg')",
        }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-accent">Our Services</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive chemical supply solutions designed to meet the diverse
            needs of Ethiopian industries
          </p>
        </div>
      </motion.section>

      {/* What We Do */}
      <ChemicalServices />

      {/* Main Services */}
      <motion.section className="py-20" variants={sectionVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Title */}
          <h2 className="text-4xl text-primary font-bold mb-4">Services</h2>
          {/* Section Description */}
          <p className="text-lg text-gray-600 mb-12">
            We offer a wide range of chemical supply solutions to meet the
            diverse needs of Ethiopian industries. Each service is designed to
            ensure quality, safety, and efficiency.
          </p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            animate="visible"
          >
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={sectionVariants}
                  whileHover={{ scale: 1.05 }}
                  className="hover-shadow hover-lift group transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary rounded-2xl p-6 bg-white dark:bg-card"
                >
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-10 h-10 ${
                          service.color === "primary"
                            ? "bg-primary/10"
                            : "bg-accent/10"
                        } rounded-lg flex items-center justify-center group-hover:${
                          service.color === "primary"
                            ? "bg-primary/20"
                            : "bg-accent/20"
                        } transition-colors`}
                      >
                        <Icon
                          className={`h-8 w-10 ${
                            service.color === "primary"
                              ? "text-primary"
                              : "text-accent"
                          }`}
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-10 relative overflow-hidden"
        variants={sectionVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-100 bg-[length:200%_200%] animate-[gradient_10s_ease-in-out_infinite]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contact our team today to discuss your chemical supply needs and
            discover how we can support your business growth.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white border-0 rounded-full 
        hover:from-red-700 hover:via-red-600 hover:to-red-500 hover:shadow-lg hover:text-white 
        transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => navigate("/contact")}
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </motion.section>

      <Footer />
    </motion.div>
  );
};

export default Services;
