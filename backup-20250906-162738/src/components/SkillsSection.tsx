import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, MessageCircle, Heart, Lightbulb } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: BookOpen,
      title: "Literacy Skills",
      color: "bg-primary"
    },
    {
      icon: Heart,
      title: "Confidence", 
      color: "bg-primary"
    },
    {
      icon: MessageCircle,
      title: "Communication Skills",
      color: "bg-primary"
    },
    {
      icon: Users,
      title: "Social Skills",
      color: "bg-primary"
    },
    {
      icon: Lightbulb,
      title: "Creativity & Imagination",
      color: "bg-primary"
    }
  ];

  const targetAudience = [
    {
      title: "For the Parent & Child:",
      image: "/api/placeholder/200/150",
      points: [
        "Help your child to become a fearless, confident and motivated Reader.",
        "Stress free and Playful Learning."
      ]
    },
    {
      title: "For School Owners:",
      image: "/api/placeholder/200/150", 
      points: [
        "Boost admissions",
        "Guarantee Academic Success and Better Results",
        "Strengthens the School's Brand"
      ]
    },
    {
      title: "For Teachers:",
      image: "/api/placeholder/200/150",
      points: [
        "Reduces Workload with play-based Learning",
        "Enables Differentiation (Applicable for all Age groups)",
        "Easy to follow, step by step content Provided."
      ]
    },
    {
      title: "For Ambitious Entrepreneurs:",
      image: "/api/placeholder/200/150",
      points: [
        "Affordable Startup Opportunity",
        "Personal and Professional Growth",
        "Financial Independence"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-child-yellow rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-child-pink rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-child-blue rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skills Icons Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className={`${skill.color} rounded-2xl p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-sm">{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Who is Let's Read for? */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Who is Let's Read for?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="bg-muted hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-primary">{audience.title}</h3>
                  <div className="aspect-video bg-gradient-secondary rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      {index === 0 && <Users className="w-8 h-8 text-white" />}
                      {index === 1 && <BookOpen className="w-8 h-8 text-white" />}
                      {index === 2 && <Heart className="w-8 h-8 text-white" />}
                      {index === 3 && <Lightbulb className="w-8 h-8 text-white" />}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {audience.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1 h-1 bg-child-pink rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;