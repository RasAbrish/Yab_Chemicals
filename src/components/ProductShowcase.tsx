import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Beaker, FlaskConical, TestTube, Atom } from "lucide-react";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Industrial Solvents",
      description: "High-purity solvents for manufacturing and industrial applications",
      icon: FlaskConical,
      category: "Solvents",
      applications: ["Manufacturing", "Cleaning", "Processing"],
    },
    {
      id: 2,
      name: "Laboratory Chemicals",
      description: "Analytical grade chemicals for research and quality control",
      icon: TestTube,
      category: "Laboratory",
      applications: ["Research", "Testing", "Analysis"],
    },
    {
      id: 3,
      name: "Specialty Compounds",
      description: "Custom chemical solutions for specific industrial needs",
      icon: Atom,
      category: "Specialty",
      applications: ["Custom Solutions", "R&D", "Innovation"],
    },
    {
      id: 4,
      name: "Basic Chemicals",
      description: "Essential chemical building blocks for various industries",
      icon: Beaker,
      category: "Basic",
      applications: ["Construction", "Agriculture", "Textile"],
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Premium Chemical <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality chemicals sourced from trusted international suppliers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card 
                key={product.id} 
                className="hover-shadow hover-lift group cursor-pointer transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {product.category}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">Applications:</p>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.map((app) => (
                          <span key={app} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="corporate" size="lg" className="group">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;