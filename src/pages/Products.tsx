import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductFilter from "@/components/ProductFilter";
import ProductModal from "@/components/ProductModal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FlaskConical, TestTube, Atom, Beaker, Sparkles, 
  Eye, Star 
} from "lucide-react";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") === "ceramics" ? "Ceramics" : "All");
  const [selectedApplications, setSelectedApplications] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Industrial Solvents",
      description: "High-purity solvents for manufacturing and industrial applications",
      icon: FlaskConical,
      category: "Solvents",
      applications: ["Manufacturing", "Cleaning", "Processing"],
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
      classification: "Industrial Chemical - Class 3 Flammable Liquid",
      safetyRating: "Handle with care - PPE required",
      specifications: {
        purity: "99.5% min",
        grade: "Industrial Grade",
        form: "Liquid",
        storage: "Cool, dry place away from ignition sources"
      },
      certifications: ["ISO 9001", "REACH Compliant"],
      origin: "Germany",
      inStock: true,
      rating: 4.8
    },
    {
      id: 2,
      name: "Laboratory Chemicals",
      description: "Analytical grade chemicals for research and quality control",
      icon: TestTube,
      category: "Laboratory",
      applications: ["Research", "Testing", "Analysis"],
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1554475901-e2ce1a3a3264?w=400&h=300&fit=crop",
      classification: "Laboratory Reagent - Various Classifications",
      safetyRating: "Laboratory conditions required",
      specifications: {
        purity: "99.9% min",
        grade: "Analytical Grade",
        form: "Various",
        storage: "Controlled laboratory conditions"
      },
      certifications: ["ISO 9001", "GMP", "USP Grade"],
      origin: "USA",
      inStock: true,
      rating: 4.9
    },
    {
      id: 3,
      name: "Specialty Compounds",
      description: "Custom chemical solutions for specific industrial needs",
      icon: Atom,
      category: "Specialty",
      applications: ["Custom Solutions", "R&D", "Innovation"],
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      classification: "Specialty Chemical - Custom Classification",
      safetyRating: "Application specific requirements",
      specifications: {
        purity: "Custom specifications",
        grade: "Specialty Grade",
        form: "Various",
        storage: "Application specific"
      },
      certifications: ["Custom Certifications", "Quality Tested"],
      origin: "Switzerland",
      inStock: true,
      rating: 4.7
    },
    {
      id: 4,
      name: "Basic Chemicals",
      description: "Essential chemical building blocks for various industries",
      icon: Beaker,
      category: "Basic",
      applications: ["Construction", "Agriculture", "Textile"],
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop",
      classification: "Basic Industrial Chemical",
      safetyRating: "Standard industrial handling",
      specifications: {
        purity: "95% min",
        grade: "Technical Grade",
        form: "Crystalline/Powder",
        storage: "Dry, ventilated area"
      },
      certifications: ["Industrial Standard", "Quality Assured"],
      origin: "India",
      inStock: true,
      rating: 4.6
    },
    {
      id: 5,
      name: "Advanced Ceramics",
      description: "High-performance ceramic materials for industrial applications",
      icon: Sparkles,
      category: "Ceramics",
      applications: ["Electronics", "Aerospace", "Medical"],
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1565008447742-97cde4b07c7b?w=400&h=300&fit=crop",
      classification: "Advanced Material - Ceramic",
      safetyRating: "Standard handling procedures",
      specifications: {
        purity: "99.9% min",
        grade: "Advanced Grade",
        form: "Powder/Sintered",
        storage: "Moisture-free environment"
      },
      certifications: ["ISO 9001", "Aerospace Qualified"],
      origin: "Japan",
      inStock: true,
      rating: 4.9
    },
    {
      id: 6,
      name: "Bio-compatible Ceramics",
      description: "Medical-grade ceramic materials for healthcare applications",
      icon: Sparkles,
      category: "Ceramics",
      applications: ["Medical", "Dental", "Implants"],
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      classification: "Medical Grade Ceramic",
      safetyRating: "Bio-compatible, sterile handling",
      specifications: {
        purity: "99.95% min",
        grade: "Medical Grade",
        form: "Various forms",
        storage: "Sterile conditions"
      },
      certifications: ["FDA Approved", "ISO 13485", "CE Mark"],
      origin: "Germany",
      inStock: false,
      rating: 5.0
    }
  ];

  // Filter products based on search and filters
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      
      const matchesApplications = selectedApplications.length === 0 ||
                                 selectedApplications.some(app => product.applications.includes(app));
      
      return matchesSearch && matchesCategory && matchesApplications;
    });
  }, [products, searchQuery, selectedCategory, selectedApplications]);

  const handleApplicationFilter = (application: string) => {
    setSelectedApplications(prev => 
      prev.includes(application) 
        ? prev.filter(app => app !== application)
        : [...prev, application]
    );
  };

  const handleProductDetails = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive range of high-quality chemicals and ceramics for various industries
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductFilter
            onSearch={setSearchQuery}
            onCategoryFilter={setSelectedCategory}
            onApplicationFilter={handleApplicationFilter}
            selectedCategory={selectedCategory}
            selectedApplications={selectedApplications}
            searchQuery={searchQuery}
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card 
                  key={product.id}
                  className="hover-shadow hover-lift group transition-all duration-300 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded px-2 py-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-white text-xs">{product.rating}</span>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {product.name}
                          </CardTitle>
                          <Badge variant="outline" className="mt-1">
                            {product.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <CardDescription className="line-clamp-2">
                      {product.description}
                    </CardDescription>
                    
                    <div>
                      <span className="font-medium text-muted-foreground text-sm">Applications:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {product.applications.slice(0, 3).map((app) => (
                          <Badge key={app} variant="secondary" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                        {product.applications.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{product.applications.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="default" size="sm" className="flex-1">
                        Request Quote
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleProductDetails(product)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <TestTube className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or browse all products
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default Products;