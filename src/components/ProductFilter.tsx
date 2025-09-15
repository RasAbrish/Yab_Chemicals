import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, X } from "lucide-react";
import { categories } from "@/data/products";

interface ProductFiltersProps {
  searchQuery: string;
  selectedCategory: string;
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onClearFilters: () => void;
}

const ProductFilters = ({
  searchQuery,
  selectedCategory,
  onSearchChange,
  onCategoryChange,
  onClearFilters
}: ProductFiltersProps) => {
  const hasActiveFilters = searchQuery || selectedCategory !== "All Categories";

  return (
    <Card className="bg-gradient-card border-border/50 shadow-card">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Filter className="h-5 w-5 text-primary" />
          Search & Filter Products
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by product name or description..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 transition-smooth focus:shadow-elegant"
          />
        </div>

        {/* Category Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Filter by Category
          </label>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="transition-smooth focus:shadow-elegant">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border shadow-elegant z-50">
              {categories.map((category) => (
                <SelectItem 
                  key={category} 
                  value={category}
                  className="hover:bg-accent focus:bg-accent"
                >
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <Button 
            variant="outline" 
            onClick={onClearFilters}
            className="w-full transition-bounce hover:shadow-card"
          >
            <X className="mr-2 h-4 w-4" />
            Clear All Filters
          </Button>
        )}

        {/* Active Filters Summary */}
        {hasActiveFilters && (
          <div className="pt-2 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Active filters:</span>
              {searchQuery && <span className="ml-1">Search: "{searchQuery}"</span>}
              {searchQuery && selectedCategory !== "All Categories" && <span>, </span>}
              {selectedCategory !== "All Categories" && (
                <span className="ml-1">Category: {selectedCategory}</span>
              )}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductFilters;