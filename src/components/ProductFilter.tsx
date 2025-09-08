import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface ProductFilterProps {
  onSearch: (query: string) => void;
  onCategoryFilter: (category: string) => void;
  onApplicationFilter: (application: string) => void;
  selectedCategory: string;
  selectedApplications: string[];
  searchQuery: string;
}

const ProductFilter = ({
  onSearch,
  onCategoryFilter,
  onApplicationFilter,
  selectedCategory,
  selectedApplications,
  searchQuery
}: ProductFilterProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["All", "Solvents", "Laboratory", "Specialty", "Basic", "Ceramics"];
  const applications = [
    "Manufacturing", "Cleaning", "Processing", "Research", "Testing", "Analysis",
    "Custom Solutions", "R&D", "Innovation", "Construction", "Agriculture", "Textile"
  ];

  const clearFilters = () => {
    onCategoryFilter("All");
    selectedApplications.forEach(app => onApplicationFilter(app));
    onSearch("");
  };

  return (
    <div className="bg-card border rounded-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryFilter(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Filter Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>

        {/* Clear Filters */}
        {(selectedCategory !== "All" || selectedApplications.length > 0 || searchQuery) && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="h-4 w-4 mr-2" />
            Clear
          </Button>
        )}
      </div>

      {/* Advanced Filters */}
      {(showFilters || window.innerWidth >= 1024) && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Applications</h4>
              <div className="flex flex-wrap gap-2">
                {applications.map((application) => (
                  <Badge
                    key={application}
                    variant={selectedApplications.includes(application) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/20 transition-colors"
                    onClick={() => onApplicationFilter(application)}
                  >
                    {application}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Active Filters */}
      {selectedApplications.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {selectedApplications.map((application) => (
              <Badge key={application} variant="secondary" className="cursor-pointer">
                {application}
                <X 
                  className="h-3 w-3 ml-1" 
                  onClick={() => onApplicationFilter(application)}
                />
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;