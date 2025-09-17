export interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    image: string;
    specifications?: string[];
    applications?: string[];
  }
  
  export const categories = [
    "All Categories",
    "Detergent, Cosmetics & Soap",
    "Shoes & Tannery",
    "Laundry & Textile",
    "Beverage, Brewery & Food",
    "Boiler, Sugar & Water Treatment",
    "Mining & Water Drilling",
    "Electroplating, Foundry & Metal",
    "Solvent & Paints",
    "Packaging",
    "Foam, Rubber & Plastic"
  ];
  
  export const products: Product[] = [
    // Detergent, Cosmetics & Soap
    {
      id: "1",
      name: "CAPB (Coco Amid propyl Betaine)",
      description: "Amphoteric surfactant used in personal care products and detergents for foam boosting and mildness enhancement.",
      category: "Detergent, Cosmetics & Soap",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/9/LG/HY/EH/82679013/whatsapp-image-2021-09-13-at-12-03-48-am-500x500.jpeg",
      specifications: ["Purity: 30-35%", "pH: 5.0-7.0", "Viscosity: 1000-3000 cP"],
      applications: ["Shampoos", "Body wash", "Facial cleansers", "Baby products"]
    },
    {
      id: "2",
      name: "Caustic Soda Flakes/Pearl/Solid",
      description: "Sodium hydroxide in various forms, essential for soap manufacturing and pH adjustment in cleaning products.",
      category: "Detergent, Cosmetics & Soap",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/421228851/JT/YN/JC/46310949/caustic-soda-flakes-500x500.jpg",
      specifications: ["Purity: 99%", "NaCl: <0.1%", "Fe₂O₃: <0.005%"],
      applications: ["Soap manufacturing", "pH adjustment", "Drain cleaners", "Oven cleaners"]
    },
    {
      id: "3",
      name: "SLES (Sodium Lauryl Ether Sulphate)",
      description: "Primary anionic surfactant providing excellent foaming and cleaning properties in personal care formulations.",
      category: "Detergent, Cosmetics & Soap",
      image: "https://image.made-in-china.com/202f0j00NASVdOZReHqc/Sodium-Laureth-Sulfate-SLES-70-Sodium-Lauryl-Ether-Sulphate-28-CAS-68585-34-2.webp",
      specifications: ["Active matter: 70%", "pH: 7.0-9.5", "Sodium sulfate: <3%"],
      applications: ["Liquid detergents", "Shampoos", "Toothpaste", "Bubble baths"]
    },
    {
      id: "4",
      name: "Titanium Dioxide",
      description: "White pigment providing opacity, brightness, and UV protection in cosmetics and personal care products.",
      category: "Detergent, Cosmetics & Soap",
      image: "https://www.samaterials.com/img/cms/Application%20of%20Titanium%20Dioxide.jpg",
      specifications: ["Purity: 98%", "TiO₂: >94%", "Oil absorption: 15-25"],
      applications: ["Sunscreens", "Foundations", "Toothpaste", "Soap whitening"]
    },
  
    // Shoes & Tannery
    {
      id: "5",
      name: "Basic Chrome Sulphate",
      description: "Essential tanning agent for leather processing, providing excellent leather quality and durability.",
      category: "Shoes & Tannery",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/1/CU/PM/WO/21627858/basic-chromium-sulphate-500x500.jpg",
      specifications: ["Cr₂O₃: 23-25%", "Basicity: 33-35%", "pH: 2.5-4.0"],
      applications: ["Leather tanning", "Wet blue processing", "Chrome tanning", "Shoe leather"]
    },
    {
      id: "6",
      name: "Formic Acid",
      description: "Organic acid used in leather processing for pH adjustment and pickle preparation in tanning operations.",
      category: "Shoes & Tannery",
      image: "https://5.imimg.com/data5/SELLER/Default/2025/1/482857396/FU/ZR/ZM/122454698/formic-acid-chemical-500x500.png",
      specifications: ["Purity: 85-90%", "Color: Clear", "Density: 1.20 g/cm³"],
      applications: ["Pickle preparation", "pH adjustment", "Deliming", "Neutralization"]
    },
    // Laundry & Textile
    {
      id: "7",
      name: "Hydrogen Peroxide",
      description: "Bleaching agent for textile processing, providing effective whitening and stain removal properties.",
      category: "Laundry & Textile",
      image: "/api/placeholder/300/200",
      specifications: ["Concentration: 35%", "Stability: >99%", "pH: 2.0-3.0"],
      applications: ["Textile bleaching", "Stain removal", "Fabric whitening", "Peroxide bleaching"]
    },
    {
      id: "8",
      name: "Reactive Dyestuffs",
      description: "High-quality dyes for cotton and cellulosic fibers, offering excellent color fastness and brilliance.",
      category: "Laundry & Textile",
      image: "/api/placeholder/300/200",
      specifications: ["Fixation: >90%", "Light fastness: 6-7", "Wash fastness: 4-5"],
      applications: ["Cotton dyeing", "Textile printing", "Garment dyeing", "Home textiles"]
    },
  
    // Beverage, Brewery & Food
    {
      id: "9",
      name: "Citric Acid 99% Monohydrate",
      description: "Food-grade acidulant and preservative for beverage and food applications with excellent solubility.",
      category: "Beverage, Brewery & Food",
      image: "/api/placeholder/300/200",
      specifications: ["Purity: 99.5%", "Heavy metals: <5ppm", "Arsenic: <1ppm"],
      applications: ["Beverages", "Confectionery", "Dairy products", "Canned foods"]
    },
    {
      id: "10",
      name: "Sodium Benzoate",
      description: "Food preservative preventing bacterial and fungal growth in acidic food and beverage products.",
      category: "Beverage, Brewery & Food",
      image: "/api/placeholder/300/200",
      specifications: ["Purity: 99%", "pH: 7.0-8.5", "Loss on drying: <1.5%"],
      applications: ["Soft drinks", "Fruit juices", "Pickles", "Sauces"]
    },
  
    // Boiler, Sugar & Water Treatment
    {
      id: "11",
      name: "Poly Aluminum Chloride",
      description: "High-efficiency coagulant for water treatment, providing excellent turbidity removal and clarification.",
      category: "Boiler, Sugar & Water Treatment",
      image: "/api/placeholder/300/200",
      specifications: ["Al₂O₃: 10%", "Basicity: 50-90%", "pH: 3.5-5.0"],
      applications: ["Water treatment", "Sewage treatment", "Industrial wastewater", "Swimming pools"]
    },
    {
      id: "12",
      name: "Activated Carbon",
      description: "High-surface-area adsorbent for water purification and sugar refining applications.",
      category: "Boiler, Sugar & Water Treatment",
      image: "/api/placeholder/300/200",
      specifications: ["Iodine number: >900", "Moisture: <8%", "Ash: <8%"],
      applications: ["Water purification", "Sugar refining", "Air purification", "Solvent recovery"]
    },
  
    // Mining & Water Drilling
    {
      id: "13",
      name: "Bentonite (Sodium)",
      description: "High-quality drilling mud additive providing viscosity control and borehole stability in drilling operations.",
      category: "Mining & Water Drilling",
      image: "/api/placeholder/300/200",
      specifications: ["Viscosity: 30 cP", "Filtrate loss: <15ml", "pH: 8.5-10.5"],
      applications: ["Drilling mud", "Borehole stability", "Sealing", "Foundry sand"]
    },
    {
      id: "14",
      name: "Barium Sulphate (Barite)",
      description: "High-density weighting agent for drilling fluids, providing pressure control in deep drilling operations.",
      category: "Mining & Water Drilling",
      image: "/api/placeholder/300/200",
      specifications: ["Specific gravity: 4.2", "Purity: >95%", "Soluble salts: <250mg/kg"],
      applications: ["Drilling fluids", "Weighting agent", "Oil drilling", "Gas drilling"]
    },
  
    // Electroplating, Foundry & Metal
    {
      id: "15",
      name: "Nickel Salt",
      description: "High-purity nickel compounds for electroplating applications, providing excellent surface finish and corrosion resistance.",
      category: "Electroplating, Foundry & Metal",
      image: "/api/placeholder/300/200",
      specifications: ["Ni content: >22%", "Iron: <0.002%", "Copper: <0.001%"],
      applications: ["Electroplating", "Surface finishing", "Decorative plating", "Corrosion protection"]
    },
    {
      id: "16",
      name: "Chromic Acid",
      description: "Oxidizing agent for chrome plating and surface treatment, providing hard, durable chrome finishes.",
      category: "Electroplating, Foundry & Metal",
      image: "/api/placeholder/300/200",
      specifications: ["CrO₃: 99.7%", "Sulfate: <0.05%", "Chloride: <0.003%"],
      applications: ["Chrome plating", "Surface treatment", "Metal finishing", "Anodizing"]
    },
  
    // Solvent & Paints
    {
      id: "17",
      name: "Titanium Dioxide",
      description: "High-grade white pigment for paints and coatings, providing excellent hiding power and durability.",
      category: "Solvent & Paints",
      image: "/api/placeholder/300/200",
      specifications: ["TiO₂: >94%", "Oil absorption: 15-25", "pH: 6.5-8.0"],
      applications: ["Paints", "Coatings", "Primers", "Industrial finishes"]
    },
    {
      id: "18",
      name: "Iron Oxide/Chrome Oxide",
      description: "Inorganic pigments providing color stability and weather resistance in paint formulations.",
      category: "Solvent & Paints",
      image: "/api/placeholder/300/200",
      specifications: ["Fe₂O₃: >96%", "Oil absorption: 25-35", "Tint strength: 95-105%"],
      applications: ["Architectural paints", "Industrial coatings", "Automotive paints", "Primer formulations"]
    },
  
    // Packaging
    {
      id: "19",
      name: "Modified Starch",
      description: "Specialized starch for packaging adhesives, providing strong bonding and water resistance.",
      category: "Packaging",
      image: "/api/placeholder/300/200",
      specifications: ["Viscosity: 2000-5000 cP", "pH: 4.0-7.0", "Moisture: <12%"],
      applications: ["Packaging adhesives", "Carton sealing", "Label adhesives", "Laminating"]
    },
    {
      id: "20",
      name: "Ethyl Acetate",
      description: "Fast-evaporating solvent for packaging inks and adhesives, providing excellent solvency power.",
      category: "Packaging",
      image: "/api/placeholder/300/200",
      specifications: ["Purity: 99.5%", "Water content: <0.1%", "Acidity: <0.01%"],
      applications: ["Printing inks", "Adhesives", "Coatings", "Flexible packaging"]
    },
  
    // Foam, Rubber & Plastic
    {
      id: "21",
      name: "PVC Resin",
      description: "High-quality polyvinyl chloride resin for various plastic applications with excellent processing properties.",
      category: "Foam, Rubber & Plastic",
      image: "/api/placeholder/300/200",
      specifications: ["K-value: 65-67", "Viscosity: 120-130", "Volatiles: <0.4%"],
      applications: ["Pipe manufacturing", "Cable insulation", "Flexible films", "Rigid applications"]
    },
    {
      id: "22",
      name: "Carbon Black",
      description: "Reinforcing filler for rubber compounds, providing strength, durability, and UV protection.",
      category: "Foam, Rubber & Plastic",
      image: "/api/placeholder/300/200",
      specifications: ["DBP absorption: 100-120", "Iodine number: 120-145", "Ash: <0.5%"],
      applications: ["Tire manufacturing", "Rubber compounds", "Plastic coloring", "Conductive compounds"]
    }
  ];