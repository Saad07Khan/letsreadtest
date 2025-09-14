import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-children.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] bg-gradient-hero flex items-center relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-child-yellow rounded-full"></div>
        <div className="absolute top-40 left-20 w-3 h-3 bg-child-pink rounded-full"></div>
        <div className="absolute top-60 left-32 w-2 h-2 bg-child-blue rounded-full"></div>
        <div className="absolute bottom-40 left-16 w-4 h-4 bg-child-green rounded-full"></div>
        <div className="absolute bottom-20 left-40 w-2 h-2 bg-child-yellow rounded-full"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-child-pink rounded-full"></div>
        <div className="absolute top-56 right-32 w-2 h-2 bg-child-blue rounded-full"></div>
        <div className="absolute bottom-32 right-24 w-4 h-4 bg-child-green rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            We Prepare To Ignite <br />
            The Joy of <span className="text-child-yellow">Reading</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Kinesthetic reading kits offer young children the tools and 
            means to ignite a passion for lifelong learning.
          </p>

          <div className="mb-8">
            <div className="text-lg md:text-xl font-semibold mb-2">
              100+ Schools ... 10000+ Teachers ...
            </div>
            <div className="text-lg md:text-xl font-semibold">
              50000+ Students
            </div>
          </div>

          <Button size="lg" className="bg-child-yellow text-foreground hover:bg-child-yellow/90 text-lg px-8 py-3">
            Enquire Now
          </Button>
        </div>

        {/* Right image */}
        <div className="relative">
          <div className="relative z-10">
            <div className="bg-child-yellow rounded-full p-8 w-full max-w-md mx-auto aspect-square overflow-hidden">
              <img 
                src={heroImage} 
                alt="Children engaged in joyful learning with colorful educational materials"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-child-pink rounded-full opacity-80"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-child-blue rounded-full opacity-80"></div>
          <div className="absolute top-1/2 -right-8 w-12 h-12 bg-child-green rounded-full opacity-80"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;