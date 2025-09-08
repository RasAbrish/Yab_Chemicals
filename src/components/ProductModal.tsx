import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, Truck, Globe, AlertTriangle } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  applications: string[];
  image?: string;
  classification?: string;
  safetyRating?: string;
  specifications?: {
    purity?: string;
    grade?: string;
    form?: string;
    storage?: string;
  };
  certifications?: string[];
  origin?: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Product Image */}
          {product.image && (
            <div className="w-full h-48 bg-muted rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Basic Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          {/* Category and Applications */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Category</h4>
              <Badge variant="secondary">{product.category}</Badge>
            </div>
            <div>
              <h4 className="font-medium mb-2">Applications</h4>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <Badge key={app} variant="outline">
                    {app}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Separator />

          {/* Specifications */}
          {product.specifications && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <ShieldCheck className="h-5 w-5 mr-2 text-primary" />
                Specifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {product.specifications.purity && (
                  <div>
                    <span className="font-medium">Purity:</span>
                    <span className="ml-2 text-muted-foreground">{product.specifications.purity}</span>
                  </div>
                )}
                {product.specifications.grade && (
                  <div>
                    <span className="font-medium">Grade:</span>
                    <span className="ml-2 text-muted-foreground">{product.specifications.grade}</span>
                  </div>
                )}
                {product.specifications.form && (
                  <div>
                    <span className="font-medium">Form:</span>
                    <span className="ml-2 text-muted-foreground">{product.specifications.form}</span>
                  </div>
                )}
                {product.specifications.storage && (
                  <div>
                    <span className="font-medium">Storage:</span>
                    <span className="ml-2 text-muted-foreground">{product.specifications.storage}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Safety & Classification */}
          <div className="grid md:grid-cols-2 gap-4">
            {product.classification && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2 text-accent" />
                  Classification
                </h4>
                <p className="text-muted-foreground">{product.classification}</p>
              </div>
            )}
            {product.safetyRating && (
              <div>
                <h4 className="font-semibold mb-2">Safety Rating</h4>
                <Badge variant="secondary">{product.safetyRating}</Badge>
              </div>
            )}
          </div>

          {/* Certifications & Origin */}
          <div className="grid md:grid-cols-2 gap-4">
            {product.certifications && product.certifications.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert) => (
                    <Badge key={cert} variant="outline">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {product.origin && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-primary" />
                  Origin
                </h4>
                <p className="text-muted-foreground">{product.origin}</p>
              </div>
            )}
          </div>

          <Separator />

          {/* Contact Information */}
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center">
              <Truck className="h-4 w-4 mr-2 text-primary" />
              Request Quote
            </h4>
            <p className="text-sm text-muted-foreground mb-2">
              Interested in this product? Contact our team for pricing and availability.
            </p>
            <p className="text-sm">
              <span className="font-medium">Email:</span> products@yabchemicals.com
            </p>
            <p className="text-sm">
              <span className="font-medium">Phone:</span> +251 11 XXX XXXX
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;