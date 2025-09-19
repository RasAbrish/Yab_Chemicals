import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import Partnerships from "@/components/Partnerships";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

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
          Testimonials &{" "}
            <span className="text-accent">Partnerships</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover what our clients say about us and explore our trusted
            global partnerships that enable us to deliver world-class chemical
            solutions.
          </p>
        </motion.div>
      </section>
      <section className="bg-gradient-to-br from-blue-50/40 via-white to-amber-50/40 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Stats preview */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { value: "50+", label: "Global Partners" },
              { value: "8+", label: "Countries" },
              { value: "12+", label: "Years Experience" },
              { value: "99%", label: "Quality Score" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-border/10"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <Partnerships />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
