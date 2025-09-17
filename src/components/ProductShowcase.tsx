import React from "react";
import { motion } from "framer-motion";
import Image1 from "@/assets/hero-chemicals.jpg"
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const statsVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const AboutPage = () => {
  return (
    <div className="bg-gray-50 py-16 px-8">
      {/* Header Section */}
      <motion.div 
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <motion.span 
            className="text-sm text-primary font-medium bg-blue-50 px-3 py-1 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            About Our Company
          </motion.span>
          <motion.h1 
            className="mt-4 text-4xl font-bold text-accent leading-snug"
            variants={itemVariants}
          >
            YAB Chemicals:{" "}
            <span className="text-gray-900">
              Pioneering Chemical Supply to Transform Industries
            </span>
          </motion.h1>
          <motion.p 
            className="mt-4 text-gray-600"
            variants={itemVariants}
          >
            YAB Chemicals is dedicated to providing high-quality and sustainable
            chemical solutions for industries, small, and medium enterprises
            across Ethiopia, ensuring the smooth transition from agriculture-led
            to industry-led economy.
          </motion.p>
        </motion.div>

        {/* Right side image */}
        <motion.div 
          className="relative rounded-xl overflow-hidden shadow-lg"
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://media.istockphoto.com/id/1340716611/photo/a-tube-shaped-pond-in-the-middle-of-a-lush-virgin-rainforest-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yxp5TqUGiCIPvApqnIHsbJ9RhPYLFYuZIPHM_n3Rd98="
            alt="Laboratory"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Statistics & Info Section */}
      <motion.div 
        className="max-w-7xl mx-auto mt-16 grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div 
          className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer "
          variants={imageVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <img
            src={Image1}
            alt="How it works"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Industry Collaborations */}
        <motion.div 
          className="bg-[#172c45] text-white p-8 rounded-xl shadow-lg flex flex-col justify-between"
          variants={statsVariants}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.3 }
          }}
        >
          <div className=" text-white rounded-xl w-full max-w-sm">
            <div className="flex gap-4 pb-4">
            <motion.h2 
              className="text-3xl font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              5K+
            </motion.h2>
            <motion.p 
              className="mt-2 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Industry Collaborations
            </motion.p>
            </div>
            <hr className="border-gray-600 pb-6 my-4" />
            <motion.ul 
              className="mt-4 space-y-4 px-3 text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.6
                  }
                }
              }}
            >
              <motion.li className=" list-disc" variants={itemVariants}>Industry & Academic Collaborations</motion.li>
              <motion.li variants={itemVariants}>
                Partnering with global institutions and private sector leaders
              </motion.li>
            </motion.ul>
          </div>
          <motion.a
            href="/about"
            className="mt-6 inline-block text-primary font-medium hover:underline"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Learn More &rarr;
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="relative rounded-xl overflow-hidden shadow-lg"
          variants={imageVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <img
            src="https://housing.com/news/wp-content/uploads/2023/10/chemical-industries.jpg"
            alt="Research"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="max-w-7xl mx-auto mt-20 grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* CARD 1 */}
        <motion.div 
          className="relative group p-6 bg-white shadow rounded-xl overflow-hidden"
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          {/* Expanding half-circle */}
          <div
            className="
              absolute top-0 left-0 
              w-[60px] h-[60px] 
              bg-blue-600 
              rounded-br-full 
              transition-all duration-500 ease-in-out 
              group-hover:w-full group-hover:h-full 
              group-hover:rounded-br-none
            "
          ></div>

          {/* Content */}
          <h3 className="text-xl font-bold transition-colors duration-500 group-hover:text-white text-gray-900 mb-2 relative z-10">
            Mission
          </h3>
          <p className="text-gray-600 transition-colors duration-500 group-hover:text-white relative z-10">
            To ensure the continuous and sustainable supply of best quality and
            environment-friendly chemicals for industries as well as medium,
            small and micro scale enterprises.
          </p>
        </motion.div>

        {/* CARD 2 */}
        <motion.div 
          className="relative group p-6 bg-white shadow rounded-xl overflow-hidden"
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <div
            className="
              absolute top-0 left-0 
              w-[60px] h-[60px] 
              bg-blue-600 
              rounded-br-full 
              transition-all duration-500 ease-in-out 
              group-hover:w-full group-hover:h-full 
              group-hover:rounded-br-none
            "
          ></div>
          <h3 className="text-xl font-bold transition-colors duration-500 group-hover:text-white text-gray-900 mb-2 relative z-10">
            Vision
          </h3>
          <p className="text-gray-600 transition-colors duration-500 group-hover:text-white relative z-10">
            To become the best reference for customers and leading chemicals
            supplier in East Africa.
          </p>
        </motion.div>

        {/* CARD 3 */}
        <motion.div 
          className="relative group p-6 bg-white shadow rounded-xl overflow-hidden"
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <div
            className="
              absolute top-0 left-0 
              w-[60px] h-[60px] 
              bg-blue-600 
              rounded-br-full 
              transition-all duration-500 ease-in-out 
              group-hover:w-full group-hover:h-full 
              group-hover:rounded-br-none
            "
          ></div>
          <h3 className="text-xl font-bold transition-colors duration-500 group-hover:text-white text-gray-900 mb-2 relative z-10">
            Core Values
          </h3>
          <motion.ul 
            className="space-y-3 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {[
              "Quality: Guarantee products meet customer expectations.",
              "Reliability: Conduct business honestly and ethically.",
              "Customer Satisfaction: Provide timely, responsive services.",
              "Professionalism: Competent and trained employees.",
              "Excellence: Achieve excellence through innovation and learning.",
            ].map((text, index) => (
              <motion.li 
                key={index} 
                className="flex items-start gap-2"
                variants={itemVariants}
              >
                <span className="w-2 h-2 mt-1 rounded-full bg-blue-600 group-hover:bg-white transition-colors duration-500 flex-shrink-0"></span>
                <span className="text-gray-600 group-hover:text-white transition-colors duration-500">
                  {text}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;