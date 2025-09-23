import { useState, useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilter";
import Pagination from "@/components/Pagination";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Grid, List } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

const ProductCatalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [viewMode, setViewMode] = useState("grid");

  // 1️⃣ Filter products by search & category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Categories" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // 2️⃣ Filter again by view mode (grid → with images, list → without images)
  const viewFilteredProducts = useMemo(() => {
    return filteredProducts.filter((product) => {
      if (viewMode === "grid") {
        return product.image && product.image.trim() !== "";
      } else if (viewMode === "list") {
        return !product.image || product.image.trim() === "";
      }
      return true;
    });
  }, [filteredProducts, viewMode]);

  // 3️⃣ Pagination
  const totalPages = Math.ceil(viewFilteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = viewFilteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handlers
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      {/* Hero */}
      <section className="relative py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/a4/31/77/a43177b2c4af3185dc50c56c5ed8fabe.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-accent">Products</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Comprehensive range of high-quality chemicals and ceramics for
            various industries
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <ProductFilters
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
                onSearchChange={handleSearchChange}
                onCategoryChange={handleCategoryChange}
                onClearFilters={handleClearFilters}
              />
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  {selectedCategory === "All Categories"
                    ? "All Products"
                    : selectedCategory}
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {viewFilteredProducts.length} product
                  {viewFilteredProducts.length !== 1 ? "s" : ""} found
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4 mr-1" /> Grid
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4 mr-1" /> List
                </Button>
              </div>
            </div>

            {paginatedProducts.length > 0 ? (
              <>
                {viewMode === "grid" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                    {paginatedProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}

                {viewMode === "list" && (
                  <div className="divide-y divide-border rounded-lg border border-border/50 bg-white shadow mb-8">
                    {paginatedProducts.map((product) => (
                      <div
                        key={product.id}
                        className="flex flex-col sm:flex-row items-start gap-4 p-4 hover:bg-muted/50 transition"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">
                            {product.name}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {product.description}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-xs">
                              {product.category}
                            </Badge>
                            {product.applications
                              ?.slice(0, 3)
                              .map((app, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {app}
                                </Badge>
                              ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalItems={viewFilteredProducts.length}
                  itemsPerPage={itemsPerPage}
                  onPageChange={setCurrentPage}
                  onItemsPerPageChange={handleItemsPerPageChange}
                />
              </>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl text-muted-foreground mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No products found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search terms or filters
                </p>
                <button
                  onClick={handleClearFilters}
                  className="text-primary hover:text-primary-glow transition-smooth underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCatalog;
