import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  Send,
  ChevronRight,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();

  // ----- content
  const contactInfo = [
    {
      icon: Building,
      title: "Head Office",
      details: ["Addis Ababa, Ethiopia", "Bole District"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+251-11-xxx-xxxx", "+251-91-xxx-xxxx"],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@yabchemicals.com"],
    },
  ] as const;

  // ----- motion
  const easeOut = [0.16, 1, 0.3, 1] as const;

  const pageFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const stagger = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: prefersReducedMotion ? 0 : 0.08,
          delayChildren: prefersReducedMotion ? 0 : 0.2,
        },
      },
    }),
    [prefersReducedMotion]
  );

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const liftOnHover = {
    whileHover: prefersReducedMotion ? {} : { y: -6, scale: 1.01 },
    whileTap: { scale: 0.98 },
  };

  return (
    <motion.div
      className="min-h-screen bg-background relative"
      initial="hidden"
      animate="visible"
      variants={pageFade}
    >
      {/* subtle animated blobs */}
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

      {/* HERO — clean background */}
      <section className="relative h-[38vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <img
          alt="Laboratory background"
          src="https://t4.ftcdn.net/jpg/03/37/96/33/360_F_337963325_EJuPjWslX3vAFxJ59L3y1cm6IsSfo07s.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact <span className="text-primary">us</span>
          </motion.h1>
        </div>
      </section>

      {/* HIGHLIGHT BLOCK — BLUE gradient, equal-height cards */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="
              rounded-3xl border p-4 sm:p-6 lg:p-8
              bg-gradient-to-br from-blue-50 via-blue-100/60 to-indigo-50
              dark:from-blue-950/40 dark:via-slate-950/30 dark:to-indigo-950/40
              border-blue-100/60 dark:border-blue-900/30
            "
          >
            <motion.div
              className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {/* Left: merged info (fills height) */}
              <motion.div variants={item} {...liftOnHover} className="h-full">
                <Card className="overflow-hidden h-full flex">
                  <CardContent className="p-6 sm:p-8 flex flex-col">
                    <div className="inline-flex items-center gap-2 w-fit rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-foreground mb-6">
                      <span className="size-1.5 rounded-full bg-blue-600" />
                      Get In Touch
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                      Have Questions? <br />
                      We’re Ready to Help
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-prose">
                      Whether you’re looking to collaborate, inquire about our research, or simply have a question — we’re just a message away.
                    </p>

                    <div className="space-y-6">
                      {contactInfo.map((info) => {
                        const Icon = info.icon;
                        return (
                          <div key={info.title} className="flex items-start gap-4">
                            <div className="rounded-xl bg-blue-600/10 p-3">
                              <Icon className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">{info.title}</div>
                              <ul className="mt-1 space-y-1">
                                {info.details.map((d, idx) => (
                                  <li key={idx} className="font-medium text-foreground text-sm">
                                    {d}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-auto" />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Right: image with "Working Hours" overlay (same height as left) */}
              <motion.div variants={item} {...liftOnHover} className="h-full">
                <Card className="overflow-hidden h-full flex shadow-lg shadow-blue-100/60">
                  <div className="relative h-full min-h-[480px] w-full">
                    <img
                      alt="Modern lab"
                      src="https://wallpapers.com/images/hd/lab-background-2716-x-1811-iy0zqdpg56r4bv9p.jpg"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-background/0 to-background/10" />
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
                      className="absolute bottom-6 left-6 right-6 md:left-auto md:w-[380px]"
                    >
                      <div className="rounded-2xl border bg-background/70 backdrop-blur-md shadow-xl shadow-blue-100/60">
                        <div className="px-5 py-4 border-b">
                          <div className="flex items-center gap-2 font-semibold">
                            <Clock className="h-4 w-4 text-primary" />
                            Working Hours
                          </div>
                        </div>
                        <div className="px-5 py-4 text-sm">
                          <div className="flex items-center justify-between py-1">
                            <span className="text-muted-foreground">Mon - Fri</span>
                            <span className="font-medium text-foreground">10:00AM – 07:00PM</span>
                          </div>
                          <div className="flex items-center justify-between py-1">
                            <span className="text-muted-foreground">Saturday</span>
                            <span className="font-medium text-foreground">12:00PM – 05:00PM</span>
                          </div>
                          <div className="flex items-center justify-between py-1">
                            <span className="text-muted-foreground">Sunday</span>
                            <span className="font-medium text-foreground">Closed</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FORM + MAP — light BLUE ONLY gradient + shadows */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-stretch"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Light-Blue Contact Form */}
            <motion.div variants={item} className="h-full">
              <Card className="overflow-hidden h-full border-0 relative shadow-xl shadow-blue-100/60">
                {/* animated soft blue glows only */}
                {!prefersReducedMotion && (
                  <div className="absolute inset-0 -z-10">
                    <motion.div
                      className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl"
                      animate={{ y: [0, -10, 0], x: [0, 8, 0], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl"
                      animate={{ y: [0, 10, 0], x: [0, -8, 0], opacity: [0.7, 0.95, 0.7] }}
                      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    />
                  </div>
                )}

                <div className="relative p-8 md:p-10 h-full bg-gradient-to-br from-sky-50 via-sky-50 to-white">
                  <div className="max-w-xl">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">
                      Get in touch{" "}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-sky-600">
                        with us
                      </span>
                    </h3>
                    <p className="text-slate-600 mb-8">
                      We’re here to answer your questions & explore new possibilities together.
                    </p>
                  </div>

                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-slate-700">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="First Name"
                        className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-slate-700">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Last Name"
                        className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emailDark" className="text-slate-700">Email</Label>
                      <Input
                        id="emailDark"
                        type="email"
                        placeholder="your.email@company.com"
                        className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phoneDark" className="text-slate-700">Phone</Label>
                      <Input
                        id="phoneDark"
                        placeholder="+251-9x-xxx-xxxx"
                        className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-400"
                      />
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                      <Label htmlFor="messageDark" className="text-slate-700">Message</Label>
                      <Textarea
                        id="messageDark"
                        placeholder="Tell us about your requirements, quantities, timeline, etc."
                        className="min-h-[140px] bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-400"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full text-white bg-sky-600 hover:bg-sky-700 shadow-lg"
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Submit Message
                        </Button>
                      </motion.div>
                    </div>
                  </form>
                </div>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div variants={item} className="h-full">
              <Card className="overflow-hidden h-full flex flex-col shadow-xl shadow-blue-100/60 ring-1 ring-slate-100">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-sky-600" />
                    <span>Our Location</span>
                  </CardTitle>
                  <CardDescription>Kera Sefer, Addis Ababa, Ethiopia</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="relative h-full min-h-[360px] rounded-lg overflow-hidden">
                    <iframe
                      title="Google Map - Kera Sefer, Addis Ababa"
                      src="https://www.google.com/maps?q=Kera+Sefer,+Addis+Ababa&z=15&output=embed"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  </div>
                  {/* Removed the two quick-contact cards below the form per request */}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Contact;
