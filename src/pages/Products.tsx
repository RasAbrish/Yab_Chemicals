import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Beaker, FlaskConical, TestTube, Atom, Building, Leaf } from "lucide-react";

const Products = () => {
  const categories = [
    { name: "All Products", count: 124, active: true },
    { name: "Industrial Solvents", count: 45, active: false },
    { name: "Laboratory Chemicals", count: 32, active: false },
    { name: "Specialty Compounds", count: 28, active: false },
    { name: "Basic Chemicals", count: 19, active: false },
  ];

  const products = [
    {
      id: 1,
      name: "Acetone (Technical Grade)",
      category: "Industrial Solvents",
      purity: "99.5%",
      packaging: "Drum, IBC, Bulk",
      applications: ["Cleaning", "Manufacturing", "Paint Industry"],
      icon: FlaskConical,
      inStock: true,
    },
    {
      id: 2,
      name: "Sodium Hydroxide",
      category: "Basic Chemicals",
      purity: "98%",
      packaging: "Bags, Drums",
      applications: ["Soap Making", "Water Treatment", "Chemical Processing"],
      icon: Beaker,
      inStock: true,
    },
    {
      id: 3,
      name: "Analytical Reagents Kit",
      category: "Laboratory Chemicals",
      purity: "AR Grade",
      packaging: "Kit, Individual",
      applications: ["Analysis", "Research", "Quality Control"],
      icon: TestTube,
      inStock: false,
    },
    {
      id: 4,
      name: "Custom Catalyst Solution",
      category: "Specialty Compounds",
      purity: "Custom",
      packaging: "Custom",
      applications: ["Petrochemical", "Pharmaceutical", "Research"],
      icon: Atom,
      inStock: true,
    },
    {
      id: 5,
      name: "Ethanol (Food Grade)",
      category: "Industrial Solvents",
      purity: "99.9%",
      packaging: "Drums, Tanks",
      applications: ["Food Industry", "Pharmaceuticals", "Cosmetics"],
      icon: FlaskConical,
      inStock: true,
    },
    {
      id: 6,
      name: "Sulfuric Acid",
      category: "Basic Chemicals",
      purity: "98%",
      packaging: "Drums, IBC",
      applications: ["Metal Processing", "Battery Manufacturing", "Fertilizers"],
      icon: Beaker,
      inStock: true,
    },
  ];

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
              Comprehensive range of high-quality chemicals for various industries
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={category.active ? "default" : "outline"}
                  size="sm"
                  className="hover-lift"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card 
                  key={product.id}
                  className="hover-shadow hover-lift group transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
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
                      <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-muted-foreground">Purity:</span>
                        <p className="text-foreground">{product.purity}</p>
                      </div>
                      <div>
                        <span className="font-medium text-muted-foreground">Packaging:</span>
                        <p className="text-foreground">{product.packaging}</p>
                      </div>
                    </div>
                    
                    <div>
                      <span className="font-medium text-muted-foreground text-sm">Applications:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {product.applications.map((app) => (
                          <Badge key={app} variant="secondary" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="default" size="sm" className="flex-1">
                        Request Quote
                      </Button>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;