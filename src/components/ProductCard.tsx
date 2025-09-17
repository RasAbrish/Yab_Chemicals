import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye, Package } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card className="group h-full bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden">
      <div className="aspect-video w-full overflow-hidden bg-muted/50 flex items-center justify-center">
        {imageError ? (
          <Package className="h-16 w-16 text-muted-foreground" />
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
            onError={handleImageError}
          />
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex-1">
        <Badge variant="outline" className="mb-2 text-xs">
            {product.category}
          </Badge>
          <CardTitle className="text-lg mb-3 line-clamp-2 group-hover:text-primary transition-smooth">
            {product.name}
          </CardTitle>
          
          <p className="text-muted-foreground text-sm line-clamp-3">
            {product.description}
          </p>
        </div>

        {/* Actions section */}
        <div className="mt-auto pt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="w-full group/btn shadow-card hover:shadow-glow">
                <Eye className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                View Detail
              </Button>
            </DialogTrigger>
            
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-auto">
              <DialogHeader>
                <DialogTitle className="text-xl">{product.name}</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted/50 flex items-center justify-center">
                  {imageError ? (
                    <Package className="h-24 w-24 text-muted-foreground" />
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                      onError={handleImageError}
                    />
                  )}
                </div>
                
                <div>
                  <Badge variant="secondary" className="mb-3">
                    {product.category}
                  </Badge>
                  <p className="text-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {product.specifications && (
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Technical Specifications</h4>
                    <ul className="space-y-2">
                      {product.specifications.map((spec, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.applications && (
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;