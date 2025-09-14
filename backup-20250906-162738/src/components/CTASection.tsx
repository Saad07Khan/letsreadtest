import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-white/20 backdrop-blur-sm rounded-full w-40 h-40 mx-auto mb-8 flex items-center justify-center">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
            <div className="w-24 h-24 bg-child-pink rounded-full"></div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Tell us About Your Problems,
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
          We are Ready to Solve
        </h3>

        <Button 
          size="lg" 
          className="bg-child-yellow text-foreground hover:bg-child-yellow/90 text-lg px-8 py-3"
        >
          Contact US
        </Button>
      </div>
    </section>
  );
};

export default CTASection;