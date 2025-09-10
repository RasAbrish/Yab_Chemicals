import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin, Phone, Mail, Clock, Building,
  Send, MessageSquare
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();

  const contactInfo = [
    {
      icon: Building,
      title: "Head Office",
      details: ["Addis Ababa, Ethiopia", "Bole District", "Chemical Industrial Zone"],
      color: "primary"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+251-11-xxx-xxxx", "+251-91-xxx-xxxx", "Emergency: +251-90-xxx-xxxx"],
      color: "accent"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@yabchemicals.com", "sales@yabchemicals.com", "support@yabchemicals.com"],
      color: "primary"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon–Fri: 8:00–18:00", "Saturday: 9:00–16:00", "Sunday: Emergency only"],
      color: "accent"
    }
  ] as const;

  // -------- Motion Variants
  const easeOut = [0.16, 1, 0.3, 1] as const;

  const pageFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const stagger = useMemo(() => ({
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  }), [prefersReducedMotion]);

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut }
    }
  };

  const liftOnHover = {
    whileHover: prefersReducedMotion ? {} : { y: -8, scale: 1.02 },
    whileTap: { scale: 0.98 }
  };

  return (
    <motion.div
      className="min-h-screen bg-background relative"
      initial="hidden"
      animate="visible"
      variants={pageFade}
    >
      {/* Soft animated background orbs */}
      {!prefersReducedMotion && (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            aria-hidden
            className="absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl"
            style={{ background: "radial-gradient(closest-side, hsl(var(--primary)/.25), transparent)" }}
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full blur-3xl"
            style={{ background: "radial-gradient(closest-side, hsl(var(--accent)/.25), transparent)" }}
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
        </div>
      )}

      <Navigation />

      {/* Header */}
      <section className="py-16 bg-gradient-subtle relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
            <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact <span className="text-primary">Us</span>
            </motion.h1>
            <motion.p variants={item} className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team for all your chemical supply needs
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information (Aligned 4 cards) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <motion.div key={info.title} variants={item} {...liftOnHover} className="h-full">
                  <Card className="text-center hover-shadow hover-lift group transition-all duration-300 h-full flex">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-3 w-full">
                      <div
                        className={`w-12 h-12 ${
                          info.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                        } rounded-lg flex items-center justify-center`}
                      >
                        <Icon
                          className={`h-6 w-6 ${
                            info.color === "primary" ? "text-primary" : "text-accent"
                          }`}
                        />
                      </div>

                      {/* Keep title height consistent */}
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors tracking-tight leading-tight min-h-[28px]">
                        {info.title}
                      </h3>

                      {/* Details list */}
                      <ul className="mt-1 space-y-1 leading-relaxed">
                        {info.details.map((detail, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            {detail}
                          </li>
                        ))}
                      </ul>

                      {/* Spacer for perfect alignment if future footers/buttons are added */}
                      <div className="mt-auto" />
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Two equal-height cards: Contact Form + Live Map */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-stretch"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Contact Form */}
            <motion.div variants={item} className="h-full">
              <Card className="hover-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>Send us a Message</span>
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 flex-1 flex flex-col">
                  <motion.div variants={stagger} className="flex-1">
                    <motion.div variants={item} className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </motion.div>

                    <motion.div variants={item} className="space-y-2 mt-4">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@company.com" />
                    </motion.div>

                    <motion.div variants={item} className="space-y-2 mt-4">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your chemical requirements, quantities, delivery timeline, etc."
                        className="min-h-[150px]"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div variants={item} className="mt-6">
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="default" size="lg" className="w-full group bg-gradient-corporate">
                        <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        Send Message
                      </Button>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Our Location (Google Maps embed) */}
            <motion.div variants={item} className="h-full">
              <Card className="hover-shadow overflow-hidden h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Our Location</span>
                  </CardTitle>
                  <CardDescription>
                    Kera Sefer, Addis Ababa, Ethiopia
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="relative h-full min-h-[360px] rounded-lg overflow-hidden">
                    {/* Lightweight embed without API key; points to Kera Sefer */}
                    <iframe
                      title="Google Map - Kera Sefer, Addis Ababa"
                      src="https://www.google.com/maps?q=Kera+Sefer,+Addis+Ababa&z=15&output=embed"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  </div>

                  <div className="mt-4 text-sm">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Kera+Sefer%2C+Addis+Ababa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-4"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Quick Contact Row (no copy behavior) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-3 mt-8"
          >
            {[
              { icon: Phone, label: "+251-11-xxx-xxxx" },
              { icon: Mail, label: "info@yabchemicals.com" },
            ].map(({ icon: Ico, label }) => (
              <motion.div key={label} variants={item} {...liftOnHover}>
                <div className="flex items-center justify-between rounded-xl border bg-card/60 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Ico className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">{label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Contact;
