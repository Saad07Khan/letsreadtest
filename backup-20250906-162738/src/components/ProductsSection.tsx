import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductsSection = () => {
  const products = [
    {
      title: "Let's Read Educator's Guide",
      description: "Our Let's Read Educator's Handbook is your ultimate guide to teaching phonics skills, effectively. The handbook includes a detailed guide to parents and learners of how to utilize our toolkit properly to ensure each group...",
      image: "/api/placeholder/300/200",
      bgColor: "bg-primary"
    },
    {
      title: "Let's Read Kits", 
      description: "Let's Read kits are fun, engaging hands-on activities and games that support reading at every level. Purchase these exciting activities to make reading great, fun...",
      image: "/api/placeholder/300/200",
      bgColor: "bg-primary"
    },
    {
      title: "Level 0 Kit",
      description: "Level 0 is for beginners and mostly young children. The carefully planned sets of activities help the children to transition from mother tongue to English and recognise letters and associate sound with symbols. Although this level is for early years, activities like the picture cards can be used as pre...",
      image: "/api/placeholder/300/200", 
      bgColor: "bg-primary"
    },
    {
      title: "Level 1 Kit",
      description: "Level 1 is all about learning to read CVC (3 letter) words, sentences and stories. The carefully selected activities help young learners to master fluency in reading and pick up speed. This is excellent for building self esteem for your little ones. The Level 1 kit comes with a detailed manual t...",
      image: "/api/placeholder/300/200",
      bgColor: "bg-primary"
    }
  ];

  const achievements = [
    { number: "100+", label: "Schools", icon: "🏫" },
    { number: "10000+", label: "Teachers", icon: "👩‍🏫" },
    { number: "50000+", label: "Students", icon: "👨‍🎓" }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-child-pink mx-auto mb-6"></div>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-3 h-3 bg-child-pink rounded-full"></div>
            <div className="w-2 h-2 bg-child-yellow rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our wide range of Products Designed to meet your needs. Select the perfect solution for yourself with just a few clicks.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-primary"></div>
              <div className={`${product.bgColor} text-white p-6`}>
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-child-yellow text-foreground hover:bg-child-yellow/90"
                >
                  Shop Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Our Achievements</h3>
            <div className="w-20 h-1 bg-child-pink mx-auto mb-6"></div>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-child-pink rounded-full"></div>
              <div className="w-2 h-2 bg-child-yellow rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-primary text-white text-center p-8">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-xl">{achievement.label}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="bg-gradient-primary bg-clip-text text-transparent">LET'S READ</span> Helps Your Child Develop
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;