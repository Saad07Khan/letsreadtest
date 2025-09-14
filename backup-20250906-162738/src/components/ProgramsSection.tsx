import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import beginnerImage from "@/assets/program-beginners.jpg";
import fluencyImage from "@/assets/program-fluency.jpg";
import proficiencyImage from "@/assets/program-proficiency.jpg";
import masteryImage from "@/assets/program-mastery.jpg";

const ProgramsSection = () => {
  const programs = [
    {
      level: "Level 0 Beginners Kit",
      image: beginnerImage,
      title: "Packed with engaging activities, It is the perfect start to their Reading journey.",
      bgColor: "bg-child-pink"
    },
    {
      level: "Level 1 Fluency Kit", 
      image: fluencyImage,
      title: "Empower Beginner with Level 1 Phonics Kit. Explore engaging CVC to build and read through Play.",
      bgColor: "bg-child-pink"
    },
    {
      level: "Level 2 Proficiency Kit",
      image: proficiencyImage, 
      title: "Elevate Phonics Proficiency: Master blends, Digraphs and Magic. Build Reading with Comprehension.",
      bgColor: "bg-child-pink"
    },
    {
      level: "Level 3 Mastery Kit",
      image: masteryImage,
      title: "Elevate Reading Confidence: Master advanced phonics and tricky Spelling Rules. Develop fluency and speed in Reading Stories.",
      bgColor: "bg-child-pink"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h2>
          <div className="w-20 h-1 bg-child-pink mx-auto mb-6"></div>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-3 h-3 bg-child-pink rounded-full"></div>
            <div className="w-2 h-2 bg-child-yellow rounded-full"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your Ally for Academic Success
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`${program.bgColor} text-white p-4 text-center font-semibold`}>
                {program.level}
              </div>
              <div className="aspect-square overflow-hidden">
                <img 
                  src={program.image} 
                  alt={`Children in ${program.level} learning program`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.title}
                </p>
                <Button 
                  variant="default" 
                  className="w-full bg-child-pink hover:bg-child-pink/90 text-white"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
          >
            Explore Our Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;