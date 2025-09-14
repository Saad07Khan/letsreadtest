import Navigation from "@/components/Navigation";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-8">
        <ProductsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Products;


