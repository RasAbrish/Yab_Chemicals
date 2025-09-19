import Navigation from "@/components/Navigation";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Globe,
  Shield,
  CheckCircle,
  Target,
  Eye,
  Compass,
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const milestones = [
    {
      year: "2013",
      event: "Company Founded",
      description: "Started operations on April 1, 2013",
    },
    {
      year: "2013",
      event: "Growing Popularity",
      description: "Became recognized and started gaining fame in September 2013",
    },
    {
      year: "2018",
      event: "Expansion",
      description: "Major growth with network expansion in different aspects",
    },
    {
      year: "2022",
      event: "Global Partnership",
      description: "Established global partnerships to strengthen market presence",
    },
    {
      year: "2023",
      event: "Exclusive Products",
      description: "Began offering exclusivity for most products",
    },
    {
      year: "2023",
      event: "Rebirth & Rebranding",
      description: "The company was revitalized and rebranded",
    },
    {
      year: "2024",
      event: "Market Leadership",
      description: "Now one of the most popular chemical product suppliers in Ethiopia",
    },
    
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management Systems",
      icon: Award,
    },
    { name: "ISO 14001", description: "Environmental Management", icon: Globe },
    {
      name: "OHSAS 18001",
      description: "Occupational Health & Safety",
      icon: Shield,
    },
    {
      name: "GMP Certified",
      description: "Good Manufacturing Practice",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero with background image */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681426678542-613c306013e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoZW1pY2Fsc3xlbnwwfHwwfHx8MA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-accent">US</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Your trusted partner in chemical supply, connecting global
            innovation with local expertise
          </p>
        </motion.div>
      </section>

      {/* Company Overview with side image */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full z-0"></div>

              <span className="text-primary mb-6 block font-semibold tracking-wider text-sm uppercase relative z-10">
                ABOUT OUR COMPANY
              </span>

              <h2 className="text-accent font-bold text-4xl mb-6 mt-4 relative">
                Our History
                <div className="w-16 h-1 bg-primary mt-3"></div>
              </h2>

              <div className=" p-6 mb-8  transition-shadow duration-300">
                <p className="text-lg text-muted-foreground leading-relaxed text-justify mb-4">
                  <strong>YAB Chemicals</strong> is a privately owned company
                  established on <strong>April 1, 2013</strong> under the
                  commercial laws of the Federal Democratic Republic of
                  Ethiopia. We are based in{" "}
                  <strong>Gotera – Ethio-China Friendship Avenue</strong>, Addis
                  Ababa, in front of the Gotera Pepsi plant, with direct access
                  to the ring road and Djibouti seaport for efficient import
                  operations.
                </p>
                <p className="text-lg text-justify text-muted-foreground leading-relaxed">
                  Huge warehouses with well-equipped amenities and a
                  well-trained, educated staff have formed the strong foundation
                  of our company, enabling us to serve industries and MSMEs
                  across Ethiopia with their raw material and manufacturing
                  needs.
                </p>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative frames */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-primary/20 rounded-lg z-0"></div>

              <div className="overflow-hidden rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://media.istockphoto.com/id/1340716611/photo/a-tube-shaped-pond-in-the-middle-of-a-lush-virgin-rainforest-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yxp5TqUGiCIPvApqnIHsbJ9RhPYLFYuZIPHM_n3Rd98="
                  alt="YAB Chemicals warehouse"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating stats card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-center">
                  <span className="text-3xl font-bold text-accent">12+</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Years of Excellence
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* core value */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Driving principles that shape our growth and partnerships
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
          >
            {[
              {
                img: "https://media.istockphoto.com/id/1364946137/photo/businessman-holding-and-showing-the-best-quality-assurance-with-golden-five-stars-for.jpg?s=612x612&w=0&k=20&c=ewqI36IOI0FE9fQGEjhVrdR_4sAg77ICJJ2gZgZxH-0=",
                title: "Quality",
                text: "At YAB our goal has always been to guarantee that every product that we supply meets specified requirements and customer expectations. Our commitment to quality is the core of our business.",
              },
              {
                img: "https://st3.depositphotos.com/2169717/19408/i/450/depositphotos_194084370-stock-photo-trust-chain-as-business-concept.jpg",
                title: "Reliability",
                text: "We keep our integrity and commit ourselves to conduct our business honestly, ethically and consistently.",
              },
              {
                img: "https://media.istockphoto.com/id/1356554393/photo/businessman-holding-smile-icon-for-the-best-evaluation-customer-satisfaction-concept.jpg?s=612x612&w=0&k=20&c=HXPwCqokplAtW8p8U2B9qLX2swWO5sPyrrA5a02TKDg=",
                title: "Customer Satisfaction",
                text: "We are committed to satisfy our customers by providing timely, responsive and proactive services.",
              },
              {
                img: "https://t3.ftcdn.net/jpg/14/87/08/36/360_F_1487083613_KCUONBnolXA8q6Up651kec2XdCmhbxfV.jpg",
                title: "Professionalism",
                text: "Our customers will be served by competent and highly trained employees providing professional, courteous and friendly service.",
              },
              {
                img: "https://png.pngtree.com/thumb_back/fh260/background/20220314/pngtree-excellent-customer-service-service-report-stars-photo-image_21734904.jpg",
                title: "Excellence",
                text: "We strive for excellence and quality in everything we do. All our endeavors are geared to achieve excellence through innovation, learning, and agility.",
              },
            ].map(({ img, title, text }) => (
              <motion.div
                key={title}
                className="relative group h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our <span className="text-primary">Journey</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Key milestones in YAB Chemicals' growth and development from our
              founding to becoming a market leader
            </motion.p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent z-0 hidden md:block"></div>

            {/* Mobile timeline line */}
            <div className="absolute left-6 h-full w-1 bg-gradient-to-b from-primary to-accent z-0 md:hidden"></div>

            <div className="space-y-12 md:space-y-24 relative z-10">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  } items-start md:items-center`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                >
                  {/* Year Badge - positioned absolutely for desktop */}
                  <div className="relative w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0">
                    <div
                      className={`absolute md:relative flex justify-center ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      } z-20`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg border-4 border-background"
                      >
                        {milestone.year}
                      </motion.div>

                      {/* Connector dot for mobile */}
                      <div className="absolute top-1/2 transform -translate-y-1/2 -left-7 w-4 h-4 bg-primary rounded-full border-4 border-background md:hidden"></div>
                    </div>
                  </div>

                  {/* Content Card - with proper spacing from the center line */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    } mt-8 md:mt-0`}
                  >
                    <motion.div whileHover={{ y: -5 }} className="relative">
                      <Card className="hover-shadow group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <CardContent className="p-6 relative z-10">
                          <div className="flex items-center space-x-2 mb-3">
                            <Calendar className="h-5 w-5 text-primary" />
                            <span className="text-sm font-medium text-primary">
                              {milestone.year}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {milestone.event}
                          </h3>
                          <p className="text-muted-foreground">
                            {milestone.description}
                          </p>

                          {/* Decorative element */}
                          <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                            <svg viewBox="0 0 100 100" className="text-primary">
                              <path
                                d="M0,0 L100,100 M100,0 L0,100"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Arrow pointer for desktop */}
                      <div
                        className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rotate-45 bg-card border-t border-l ${
                          index % 2 === 0 ? "md:-left-2" : "md:-right-2"
                        } hidden md:block`}
                      ></div>

                      {/* Arrow pointer for mobile */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-card border-t border-l md:hidden"></div>
                    </motion.div>
                  </div>

                  {/* Empty spacer for alternating layout on desktop */}
                  <div className="hidden md:block md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress indicator */}
          <motion.div
            className="mt-16 bg-muted rounded-full h-2 max-w-2xl mx-auto overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background opacity-70 animate-pulse" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold text-foreground mb-4"
            >
              Quality <span className="text-accent">Certifications</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Industry-recognized certifications ensuring the highest standards.
            </motion.p>
          </div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
          >
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 30 }}
                  variants={{ visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                >
                  <Card className="relative group rounded-2xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300"
                      >
                        <Icon className="h-8 w-8 text-primary" />
                      </motion.div>
                      <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.description}
                      </p>
                    </CardContent>
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;
