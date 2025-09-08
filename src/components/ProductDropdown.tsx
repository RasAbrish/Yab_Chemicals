import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Beaker, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductDropdownProps {
  isActive: boolean;
}

const ProductDropdown = ({ isActive }: ProductDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const productCategories = [
    {
      name: "Chemicals",
      path: "/products?category=chemicals",
      icon: Beaker,
      description: "Industrial and laboratory chemicals"
    },
    {
      name: "Ceramics",
      path: "/products?category=ceramics", 
      icon: Sparkles,
      description: "Advanced ceramic materials"
    }
  ];

  return (
    <div className="relative" onMouseLeave={() => setIsOpen(false)}>
      <button
        onMouseEnter={() => setIsOpen(true)}
        className={cn(
          "flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
          isActive
            ? "text-primary bg-primary/10"
            : "text-muted-foreground hover:text-primary hover:bg-primary/5"
        )}
      >
        <span>Products</span>
        <ChevronDown className={cn(
          "h-4 w-4 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-72 bg-popover border border-border rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="p-2">
            {productCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  to={category.path}
                  className="flex items-start space-x-3 p-3 rounded-md hover:bg-muted/50 transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDropdown;